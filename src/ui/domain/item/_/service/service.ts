export const formParam = {
  title: {
    minLength: 1,
    maxLength: 20,
    placeholder: "いちご",
    label: "タイトル",
  },
  body: {
    minLength: 1,
    maxLength: 15,
    placeholder: "あまい",
    label: "説明",
  },
} as const;
