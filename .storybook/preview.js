// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// };

import React from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/stories/particles/globalStyles";
import themeDefault from "../src/stories/particles/themeDefault";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
