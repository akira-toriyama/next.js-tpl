export const errorMessages = {
  minLength: (p: { length: number }) =>
    `${p.length}文字以上で入力してください。`,
  maxLength: (p: { length: number }) =>
    `${p.length}文字以下で入力してください。`,
} as const;
