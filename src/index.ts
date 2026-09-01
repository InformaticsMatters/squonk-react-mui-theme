import { createTheme } from "@mui/material";

const family = ["'Open Sans'", "Verdana", "Geneva", "Tahoma", "sans-serif"].join(", ");

const { breakpoints, shadows, palette, typography } = createTheme({ typography: { fontSize: 14 } });

const squonkPalette = {
  primary: {
    light: "rgba(255, 125, 102, 1)",
    main: "rgba(229, 74, 59, 1)",
    dark: "rgba(172, 7, 19, 1)",
    contrastText: "#fff",
  },
  secondary: {
    light: "rgba(225, 255, 255, 1)",
    main: "rgba(175, 207, 207, 1)",
    dark: "rgba(127, 158, 158, 1)",
    contrastText: "#fff",
  },
  error: { light: "#e1a436", main: "#cc7013", dark: "#c15b0f", contrastText: "#fff" },
  success: { light: "#5efc82", main: "#00c853", dark: "#009624", contrastText: "#fff" },
};

const softened = (colour: string) => `2px solid color-mix(in srgb, ${colour} 85%, transparent)`;

const ringColour = softened("currentColor");

/**
 * The ring drawn around whatever the keyboard is standing on.
 *
 * `currentColor` rather than a palette entry, because these surfaces sit on backgrounds that do
 * not agree: white text on a primary-coloured app bar, `text.primary` on the page beneath it, and
 * both again inverted in dark mode. The ring is whatever the label it surrounds already is, so it
 * is legible wherever the label is.
 *
 * The 85% is a measured floor, not a taste: WCAG 1.4.11 requires 3:1 against the backdrop, and at
 * 55% an outlined primary button and a white-on-primary app bar link both fell under it. Soften
 * the ring further only by changing the colour source, and only after re-measuring rendered
 * pixels.
 *
 * Drawn inside the control, which is what keeps it a property of the control alone: a ring outside
 * the box costs two pixels of whatever contains it, and `overflow-x` clips on both axes, so a
 * sideways-scrolling strip of tabs would have to be padded to stop cutting the ring off its first
 * and last tab. Inside, there is nothing to pay: a control that takes focus has padding of its own.
 */
export const focusRing = { outline: ringColour, outlineOffset: "-2px" } as const;

/**
 * The same ring, for a run of text rather than a control.
 *
 * A link has no padding to draw the ring in — its box stops where the glyphs stop — so this one is
 * outside, close enough to read as the text's own ring rather than a box around it. The corner
 * radius is the other half of that: a right-angled rectangle around a few words reads as a table
 * cell, where a rounded one reads as a highlight.
 */
export const textFocusRing = {
  borderRadius: "3px",
  outline: ringColour,
  outlineOffset: "1px",
} as const;

const focusVisible = { "&.Mui-focusVisible": focusRing } as const;

const baseTheme = createTheme({
  cssVariables: { nativeColor: true, colorSchemeSelector: ".mode-%s" },

  components: {
    MuiAppBar: { styleOverrides: { root: { boxShadow: shadows[1] } } },
    MuiToolbar: {
      styleOverrides: {
        root: { minHeight: 80 },
        regular: { [breakpoints.up("xs")]: { minHeight: 80 } },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: { textTransform: "none", [breakpoints.up("xs")]: { minWidth: 120 } },
        textColorInherit: { opacity: 1 },
      },
    },
    MuiTabs: { styleOverrides: { root: { minHeight: 60 } } },
    MuiIconButton: {
      styleOverrides: { root: { ":hover": { backgroundColor: "rgba(0, 0, 0, 0.03)" } } },
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: { boxShadow: "0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)" },
        elevation2: { boxShadow: "0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)" },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: { ...typography.body1, borderBottom: `1px solid ${palette.divider}` },
      },
    },
    MuiTypography: { styleOverrides: { gutterBottom: { marginBottom: 8 } } },
    MuiChip: { styleOverrides: { root: focusVisible, sizeSmall: { lineHeight: 1.3 } } },
    MuiTextField: { defaultProps: { variant: "outlined", size: "small" } },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          variants: [
            {
              props: { variant: "contained" },
              style: {
                // A filled button has a fill where every other control has the page, so a ring
                // drawn inside it in the label's colour is a white rectangle a couple of pixels in
                // from the edge of the fill — a border that looks misdrawn rather than a ring. It
                // goes outside instead, and in the page's own text colour rather than the label's,
                // since the label's colour is whatever contrasts with the fill and would disappear
                // against the page. `vars` rather than `palette` so the colour follows the active
                // scheme; this theme sets `cssVariables`, so it is always there.
                "&.Mui-focusVisible": {
                  outline: softened(theme.vars.palette.text.primary),
                  outlineOffset: "2px",
                },
              },
            },
          ],
        }),
      },
    },
    MuiButtonBase: {
      // The ring says everything the ripple was being relied on to say, in one vocabulary instead
      // of two. `MuiButtonBase` carries both halves for everything built on it — buttons, icon
      // buttons, list rows, menu items, tabs, card actions — so a control added later inherits
      // them rather than having to remember them.
      defaultProps: { disableRipple: true, disableTouchRipple: true },
      styleOverrides: { root: focusVisible },
    },
    // A link's ring replaces the browser's own, which is a different colour on every platform.
    MuiLink: { styleOverrides: { root: { "&:focus-visible": textFocusRing } } },
    MuiSwitch: {
      // The one control the rectangular ring does not suit: what takes focus is the square that
      // carries the thumb, and the round ripple was doing the work of a halo around it. The ring
      // takes the thumb's shape and is drawn where the halo was, and the track stops clipping so
      // the ring is not cut in half by it.
      styleOverrides: {
        root: { overflow: "visible" },
        switchBase: { "&.Mui-focusVisible": { borderRadius: "50%", outlineOffset: "-4px" } },
      },
    },
    MuiTooltip: { defaultProps: { arrow: true } },
  },

  typography: {
    fontSize: 14,
    fontFamily: family,
    h1: {
      fontFamily: family,
      fontWeight: 600,
      fontSize: typography.pxToRem(45),
      lineHeight: typography.pxToRem(50),
    },
    h2: {
      fontFamily: family,
      fontWeight: 600,
      fontSize: typography.pxToRem(29),
      lineHeight: typography.pxToRem(32),
    },
    h3: {
      fontFamily: family,
      fontWeight: 600,
      fontSize: typography.pxToRem(24),
      lineHeight: typography.pxToRem(28),
    },
    h4: {
      fontFamily: family,
      fontWeight: 600,
      fontSize: typography.pxToRem(20),
      lineHeight: typography.pxToRem(24),
    },
    h5: {
      fontFamily: family,
      fontWeight: 600,
      fontSize: typography.pxToRem(16),
      lineHeight: typography.pxToRem(20),
    },
    h6: {
      fontFamily: family,
      fontWeight: 600,
      fontSize: typography.pxToRem(14),
      lineHeight: typography.pxToRem(20),
    },
    subtitle1: {
      fontFamily: family,
      fontSize: typography.pxToRem(16),
      lineHeight: typography.pxToRem(25),
    },
    subtitle2: {
      fontFamily: family,
      fontWeight: 400,
      fontSize: typography.pxToRem(14),
      lineHeight: typography.pxToRem(21),
    },
    body1: { fontFamily: family, fontSize: "1rem", lineHeight: typography.pxToRem(21) },
    body2: {
      fontFamily: family,
      fontSize: typography.pxToRem(12),
      lineHeight: typography.pxToRem(20),
    },
    button: { fontFamily: family, fontSize: "1rem" },
    caption: {
      fontFamily: family,
      fontSize: typography.pxToRem(12),
      lineHeight: typography.pxToRem(13),
    },
    overline: {
      fontFamily: family,
      fontSize: typography.pxToRem(12),
      fontWeight: 500,
      textTransform: "uppercase",
    },
  },

  // Color scheme specific configurations
  colorSchemes: {
    light: { palette: { mode: "light", background: { default: "#fafafa" }, ...squonkPalette } },
    dark: { palette: { mode: "dark", ...squonkPalette } },
  },
});

export default baseTheme;
