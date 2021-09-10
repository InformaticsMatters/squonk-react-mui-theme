import type { ReactNode } from 'react';
import React from 'react';

import { useMediaQuery } from '@material-ui/core';
import type { Theme } from '@material-ui/core/styles';
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import { darkTheme, lightTheme } from './theme';

export interface MuiThemeProps {
  children: ((theme: Theme) => ReactNode) | ReactNode;
}

export const MuiTheme = ({ children }: MuiThemeProps) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = prefersDarkMode ? darkTheme : lightTheme;

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        {typeof children === 'function' ? children(theme) : children}
      </MuiThemeProvider>
    </StylesProvider>
  );
};
