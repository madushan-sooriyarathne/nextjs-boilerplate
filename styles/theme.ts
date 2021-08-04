import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      // primaryMedium: string;
      // primaryLight: string;
      secondary: string;
      // secondaryMedium: string;
      // secondaryLight: string;
      white: string;
      black: string;
      // blackLight: string;
      // danger: string;
      // warning: string;
      // success: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
    gradients: {};
    shadows: {
      close: string;
      spread: string;
    };
    responsive: {};
  }
}

const theme: DefaultTheme = {
  colors: {
    primary: "red",
    // primaryMedium: string,
    // primaryLight: string,
    secondary: "yellow",
    // secondaryMedium: string,
    // secondaryLight: string,
    white: "white",
    black: "black",
    // blackLight: string,
    // danger: string,
    // warning: string,
    // success: string,
  },
  fonts: {
    primary: "Arial, Helvetica, sans-serif",
    secondary: "'Times New Roman', Times, serif",
  },
  gradients: {},
  shadows: {
    close: "0 0 5px 0 rgba(0, 0, 0, 0.25)",
    spread: " 0 0 20px 0 rgba(0, 0, 0, 0.15)",
  },
  responsive: {},
};

export default theme;
