import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryDark: string;
      primaryLight: string;
      // secondary: string;
      // secondaryDark: string;
      // secondaryLight: string;
      white: string;
      black: string;
      blackLight: string;
      blackDark: string;
      // danger: string;
      // warning: string;
      // success: string;
    };
    fonts: {
      primary: string;
      // secondary: string;
    };
    gradients: {
      headingLight: string;
      headingDark: string;
      secondaryDark: string;
      secondaryLight: string;
    };
    shadows: {
      close: string;
      spread: string;
    };
    responsive: {};
  }
}

const theme: DefaultTheme = {
  colors: {
    primary: "#f7981d",
    primaryDark: "#7c4c0f",
    primaryLight: "#fbcc8e",
    black: "#2c3327",
    blackDark: "#161a14",
    blackLight: "#80857d",
    white: "#fafafa",

    // danger: string,
    // warning: string,
    // success: string,
  },
  fonts: {
    primary:
      "'Circular Std', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  },
  gradients: {
    headingLight: "linear-gradient(to right, #abbaab, #ffffff)",
    headingDark: "linear-gradient(to right, #c31432, #240b36)",
    secondaryDark: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    secondaryLight: "linear-gradient(to right, #ffefba, #ffffff)",
  },
  shadows: {
    close: "0 0 5px 0 rgba(0, 0, 0, 0.25)",
    spread: " 0 0 20px 0 rgba(0, 0, 0, 0.15)",
  },
  responsive: {},
};

export default theme;
