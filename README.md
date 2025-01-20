Material-UI themes for Squonk applications. Can be used independently with just Material-UI or with Emotion of Styled-Components.

## Examples

### Material UI

The colour scheme provides both a light and a dark theme. Mui v6 will automatically switch between schemes via media queries, taking into account the users system preference.

```tsx
import React from 'react';

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

# Publishing a new Version

With made changes committed and pushed:

1. Run `pnpm release`. This builds a `dist` with the `publishConfig` merged in.
