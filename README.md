Material-UI themes for Squonk applications. Can be used independently with just Material-UI or with Emotion of Styled-Components.

## Examples

### Material UI

The correct theme for a user can be automatically set with `prefers-color-scheme`.

```tsx
import React from 'react';

import { CssBaseline, useMediaQuery } from '@material-ui/core';
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import { darkTheme, lightTheme } from '@squonk/mui-theme';

export const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = prefersDarkMode ? darkTheme : lightTheme;

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
