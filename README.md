[![dependency - @squonk/mui-theme](https://img.shields.io/badge/%40squonk%2Fmui--theme-blue?logo=npm&logoColor=white)](https://www.npmjs.com/package/@squonk/mui-theme)
[![GitHub tag](https://img.shields.io/github/tag/InformaticsMatters/squonk-react-mui-theme?include_prereleases=&sort=semver&color=blue)](https://github.com/InformaticsMatters/squonk-react-mui-theme/releases/)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)

[![release](https://github.com/InformaticsMatters/squonk-react-mui-theme/actions/workflows/release.yaml/badge.svg?branch=dev&event=status)](https://github.com/InformaticsMatters/squonk-react-mui-theme/actions/workflows/release.yaml)
[![release](https://github.com/InformaticsMatters/squonk-react-mui-theme/actions/workflows/release.yaml/badge.svg?branch=main&event=status)](https://github.com/InformaticsMatters/squonk-react-mui-theme/actions/workflows/release.yaml)

Material-UI theme for Squonk applications. Can be used independently with just Material-UI or with Emotion of Styled-Components.

## Examples

### Material UI

The colour scheme provides both a light and a dark theme. Mui v6 will automatically switch between schemes via media queries, taking into account the users system preference.

```tsx
import { CssBaseline } from '@material-ui/core';
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import theme from '@squonk/mui-theme';

export const App = () => {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        {...}
      </MuiThemeProvider>
    </StylesProvider>
  );
};
```

### Emotion

Wrap the previous example with the theme provider from emotion.

```tsx
import { ThemeProvider } from '@emotion/react';

<ThemeProvider theme={theme}>{...}</ThemeProvider>
```

### Styled Components

```tsx
import { ThemeProvider } from 'styled-components';

<ThemeProvider theme={theme}>{...}</ThemeProvider>
```

# Release Strategy

- Conventional commit messages are used to trigger new builds
- Only `feat` and `fix` commit types will trigger a version bump
- Commits pushed to the branch `dev` will trigger a tagged `dev` build. E.g. `5.0.1-dev.1`
- Commits pushed to the default branch (`main`) will trigger a "official" tag. E.g. `5.0.1`
- The package.json version, changelog will be updated and a the new version will be published to npm.
