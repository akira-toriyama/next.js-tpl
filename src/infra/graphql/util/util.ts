/**
 * 強制的にエラーを発生させたい場合使用する。
 */
export const failure = <T>() => Promise.reject<T>();
