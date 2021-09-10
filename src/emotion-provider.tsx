import React from 'react';

import { ThemeProvider } from '@emotion/react';

import { MuiTheme } from './mui-theme';

export const EmotionMuiThemeProvider: React.FC = ({ children }) => {
  return <MuiTheme>{(theme) => <ThemeProvider theme={theme}>{children}</ThemeProvider>}</MuiTheme>;
};
