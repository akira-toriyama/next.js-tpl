/** @type {import('stylelint').Config} */
module.exports = {
  extends: [
    // stylelintの標準的なルール
    "stylelint-config-standard",
    // プロパティーのソート
    "stylelint-config-recess-order",
    // prettierとのバッティング回避
    "stylelint-config-prettier",
  ],
};
