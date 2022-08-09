import { theme } from "../styles/theme";

declare module "@emotion/react" {
  type ThemeType = typeof theme;
  export interface Theme extends ThemeType {}
}
