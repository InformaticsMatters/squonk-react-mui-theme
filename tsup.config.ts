import type { Options } from 'tsup';

export const tsup: Options = {
  dts: true,
  minify: false,
  splitting: false,
  sourcemap: true,
  clean: true,
  format: ['esm', 'cjs'],
  entryPoints: ['src/index.ts'],
};
