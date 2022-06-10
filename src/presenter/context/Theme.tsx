import { ThemeProvider, createGlobalStyle } from "styled-components";

export const theme = {
  palette: {
    default: {
      primary: {
        main: "",
        light: "",
        dark: "",
        contrastText: "",
      },
      secondary: {
        main: "",
        light: "",
        dark: "",
        contrastText: "",
      },
      error: {
        main: "",
        light: "",
        dark: "",
        contrastText: "",
      },
      warning: {
        main: "",
        light: "",
        dark: "",
        contrastText: "",
      },
      info: {
        main: "",
        light: "",
        dark: "",
        contrastText: "",
      },
      text: {
        primary: "#222222",
        secondary: "",
        disabled: "",
      },
      action: {
        active: "",
        hover: 0.8,
        hoverOpacity: "",
        selected: "",
        selectedOpacity: "",
        disabled: "",
        disabledOpacity: "",
        disabledBackground: "",
        focus: "",
        focusOpacity: "",
        activatedOpacity: "",
      },
    },
  },
  typography: {
    default: {
      fontSize: "16px",
      fontFamily: "sans-serif",
      lineHeight: 1.8,
      fontWight: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
      },
    },
  },
} as const;

const GlobalStyle = createGlobalStyle`
  body {
    color: ${theme.palette.default.text.primary};
    font-size: ${theme.typography.default.fontSize};
    font-family: ${theme.typography.default.fontFamily};
    line-height: ${theme.typography.default.lineHeight};
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  figure {
    margin: 0;
    padding: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    opacity: ${theme.palette.default.action.hover}
  }
`;

type ThemeProps = {
  children: React.ReactNode;
};

export const Theme: React.FC<ThemeProps> = (props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {props.children}
  </ThemeProvider>
);
