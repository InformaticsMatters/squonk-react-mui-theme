import config from "@squonk/eslint-config";

export default [{ ignores: ["**/dist/**"] }, ...config.slice(0, -1)]; // Remove the last rule which is for apps
