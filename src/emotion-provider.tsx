import React from 'react';

import { ThemeProvider } from '@emotion/react';

import { MuiTheme } from './mui-theme';
import { theme } from './theme';

export const Theme: React.FC = ({ children }) => {
  return (
    <MuiTheme>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MuiTheme>
  );
};
