import { useForm } from "react-hook-form";
import * as type from "../ItemEdit.type";
import { useFetch } from "../../common/hook/fetch";
import { match, P } from "ts-pattern";
import { useMutation, UseQueryResult } from "@tanstack/react-query";
import type * as GQL from "../../common/hook/fetch/coLocation/ItemDetail.gql.generated";
import type * as commonType from "../../common/common.type";
import { useId, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as service from "./service";
import { mutations } from "~/ui/util/graphql/mutations";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";
import { queries } from "~/ui/util/graphql/queries";

type UseItemEdit = (p: commonType.OuterProps) => type.Props;
export const useItemEdit: UseItemEdit = (p) => {
  const [serverErrorMessage, setServerErrorMessage] = useState("");
  const form = useForm<type.FormValue>({
    resolver: zodResolver(service.formSchema),
  });
  const ids = {
    title: useId(),
    body: useId(),
  };
  const router = useRouter();
  const mutation = useMutation(mutations.item.itemEdit);
  const r = useFetch({
    id: p.id,
    onSuccess: (rr) =>
      form.reset({
        title: rr.item?.title,
        body: rr.item?.body,
      }),
  });
  const queryClient = useQueryClient();

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
                  queryKey: queries.item.item({ id: p.id }).queryKey,
                });
                router.push("/items");
              },
              onError: () => setServerErrorMessage("Update failed."),
            }
          ),
      },
    }))
    .exhaustive();
};
