import React, { ReactNode } from "react";
import {
  ThemeContext,
  useThemeController,
} from "../lib/contexts/theme_context";

type Props = {
  children?: ReactNode;
};

function ThemeContextProvider({ children }: Props) {
  return (
    <ThemeContext.Provider value={useThemeController()}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
