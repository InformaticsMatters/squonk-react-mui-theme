import config from "@squonk/eslint-config";

export default config
  .map((c) => ({ ...c, ignores: ["**/dist/**"] }))
  .slice(0, -1); // Remove the last rule which is for apps
