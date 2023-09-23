import { useForm } from "react-hook-form";
import type * as type from "../ItemEdit.type";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as service from "./service";
import * as repository from "../../repository";
import { useRouter } from "next/navigation";

type UseItemEdit = (p: type.OuterProps) => type.Props;
export const useItemEdit: UseItemEdit = (p) => {
  const [serverErrorMessage, setServerErrorMessage] = useState("");
  const router = useRouter();
  const form = useForm<type.FormValue>({
    resolver: zodResolver(service.formSchema),
    defaultValues: {
      title: p.item.title,
      body: p.item.body,
    },
  });

  return {
    ...p,
    form,
    serverErrorMessage,
    onSubmit: (pp) =>
      repository
        .save({
          where: { id: p.item.id },
          data: pp,
        })
        .then(() => router.push("/items"))
        // FIXME サーバのエラーレスポンスを考慮して、適切に扱うようにすべき
        .catch(() => setServerErrorMessage("処理に失敗しました。")),
  };
};
