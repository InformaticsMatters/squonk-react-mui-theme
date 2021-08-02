import React from 'react';

import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import { theme } from './theme';

export const MuiTheme: React.FC = ({ children }) => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </StylesProvider>
  );
};
