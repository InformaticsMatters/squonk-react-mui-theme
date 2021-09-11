import { createTheme } from '@material-ui/core';
const family = ['"Open Sans"', 'Verdana', 'Geneva', 'Tahoma', 'sans-serif'].join(', ');

export const generateThemes = () => {
  const defaultTheme = createTheme({});

  const commonThemeOptions = {
    palette: {
      primary: {
        light: 'rgba(255, 125, 102, 1)',
        main: 'rgba(229, 74, 59, 1)',
        dark: 'rgba(172, 7, 19, 1)',
        contrastText: '#fff',
      },
      secondary: {
        light: 'rgba(225, 255, 255, 1)',
        main: 'rgba(175, 207, 207, 1)',
        dark: 'rgba(127, 158, 158, 1)',
        contrastText: '#fff',
      },
      error: {
        light: '#e1a436',
        main: '#cc7013',
        dark: '#c15b0f',
        contrastText: '#fff',
      },
      success: {
        light: '#5efc82',
        main: '#00c853',
        dark: '#009624',
        contrastText: '#fff',
      },
    },
    overrides: {
      MuiAppBar: {
        root: {
          boxShadow: defaultTheme.shadows[1],
        },
      },
      MuiToolbar: {
        root: {
          minHeight: 80,
        },
        regular: {
          [defaultTheme.breakpoints.up('xs')]: {
            minHeight: 80,
          },
        },
      },
      MuiTab: {
        root: {
          textTransform: 'none',
          [defaultTheme.breakpoints.up('xs')]: {
            minWidth: 120,
          },
        },
        textColorInherit: {
          opacity: 1,
        },
      },
      MuiTabs: {
        root: {
          minHeight: 60,
        },
        flexContainer: {
          height: '100%',
        },
      },
    },
    typography: {
      fontFamily: family,
    },
    props: {
      MuiTextField: {
        variant: 'outlined',
        size: 'small',
      },
      MuiButton: {
        disableRipple: true,
        disableFocusRipple: true,
      },
      MuiTooltip: {
        arrow: true,
      },
    },
  };
  const darkTheme = createTheme({ palette: { type: 'dark' } }, commonThemeOptions);
  const lightTheme = createTheme(
    {
      palette: {
        type: 'light',
        background: {
          default: '#fafafa',
        },
      },
    },
    commonThemeOptions,
  );

  return { darkTheme, lightTheme };
};

export default generateThemes;
