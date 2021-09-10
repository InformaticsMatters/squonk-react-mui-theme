import type { Options } from 'tsup';

export const tsup: Options = {
  dts: {
    resolve: true,
  },
  minify: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  format: ['esm', 'cjs'],
  entryPoints: ['src/index.ts', 'src/emotion-provider.tsx', 'src/styled-components-provider.tsx'],
};
