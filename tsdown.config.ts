import { defineConfig } from "tsdown";

export default defineConfig({
  dts: true,
  format: ["cjs", "esm"],
  target: "es2022",
  platform: "neutral",
  clean: true,
  sourcemap: true,
  unbundle: true,
  external: ["@mui/material"],
  exports: {
    devExports: true,
  },
});
