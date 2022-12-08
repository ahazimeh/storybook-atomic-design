// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// };

import { DocsContainer, DocsPage } from "@storybook/addon-docs";
import { addParameters } from "@storybook/react";
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

// addon-docs
addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
