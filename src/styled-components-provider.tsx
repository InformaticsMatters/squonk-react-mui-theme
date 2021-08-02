import React from 'react';

import { ThemeProvider } from 'styled-components';

import { MuiTheme } from './mui-theme';
import { theme } from './theme';

export const Theme: React.FC = ({ children }) => {
  return (
    <MuiTheme>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MuiTheme>
  );
};
