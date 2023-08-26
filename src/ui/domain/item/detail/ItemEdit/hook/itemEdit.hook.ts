import { useForm } from "react-hook-form";
import * as type from "../ItemEdit.type";
import { useFetch, useQueryData } from "../../common/hook/fetch";
import { match, P } from "ts-pattern";
import {
  useMutation,
  UseQueryResult,
  useQueryClient,
} from "@tanstack/react-query";
import type * as GQL from "../../common/hook/fetch/coLocation/ItemDetail.gql.generated";
import type * as commonType from "../../common/common.type";
import { useId, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as service from "./service";
import * as Mutation from "./coLocation/ItemEdit.gql.generated";
import { useRouter } from "next/router";
import { queries } from "~/ui/util/queries";
import * as client from "~/infra/graphql/client";

const mutationFn = (p: Mutation.ItemEditMutationVariables) =>
  client.graphQLClient.request(Mutation.ItemEditDocument, p);

type UseItemEdit = (p: commonType.OuterProps) => type.Props;
export const useItemEdit: UseItemEdit = (p) => {
  const queryClient = useQueryClient();
  const [serverErrorMessage, setServerErrorMessage] = useState("");
  const queriesData = useQueryData(p);

  const form = useForm<type.FormValue>({
    resolver: zodResolver(service.formSchema),
    defaultValues: {
      title: queriesData?.item?.title,
      body: queriesData?.item?.body,
    },
  });

  const ids = {
    title: useId(),
    body: useId(),
  };

  const router = useRouter();
  const mutation = useMutation({ mutationFn });
  const r = useFetch({
    id: p.id,
    onSuccess: (rr) =>
      form.reset({
        title: rr.item?.title,
        body: rr.item?.body,
      }),
  });

  return match<UseQueryResult<GQL.ItemDetailQuery>, type.Props>(r)
    .with({ isError: true }, () => ({ __tag: "failure" }))
    .with({ isLoading: true }, () => ({ __tag: "loading" }))
    .with({ isSuccess: true, data: { item: null } }, () => ({ __tag: "empty" }))
    .with({ isSuccess: true, data: { item: P.not(P.nullish) } }, () => ({
      __tag: "success",
      form,
      selectors: {
        canSubmit: mutation.isLoading,
        id: p.id,
        ids,
        serverErrorMessage: serverErrorMessage,
        errorMessages: {
          title: service.toErrorMessages(form.formState.errors.title?.message),
          body: service.toErrorMessages(form.formState.errors.body?.message),
        },
      },
      operations: {
        onSubmit: (v) =>
          mutation.mutate(
            {
              where: { id: p.id },
              data: { title: v.title, body: v.body },
            },
            {
              onSuccess: () => {
                queryClient.refetchQueries({
                  queryKey: queries.item.detail({ id: p.id }).queryKey,
                });
                router.push("/items");
              },
              onError: () => setServerErrorMessage("Update failed."),
              onSettled: () => {
                queryClient.resetQueries({
                  queryKey: queries.item.all.queryKey,
                });
                queryClient.resetQueries({
                  queryKey: queries.item.detail({ id: p.id }).queryKey,
                });
              },
            },
          ),
      },
    }))
    .exhaustive();
};
