import React from 'react';

import { ThemeProvider } from 'styled-components';

import { MuiTheme } from './mui-theme';

export const SCMuiThemeProvider: React.FC = ({ children }) => {
  return <MuiTheme>{(theme) => <ThemeProvider theme={theme}>{children}</ThemeProvider>}</MuiTheme>;
};
