import React from "react";
import { action } from "@storybook/addon-actions";

import Footer from "./Footer";
import { withDesign } from "storybook-addon-designs";

const label = "Icon";
const options = {
  vertical: "vertical",
  horizontal: "horizontal",
};

const defaultValue = "bag";
const groupId = "Images";

export const standardFooter = {
  component: (args) => <Footer {...args} />,

  argTypes: {
    menus: {
      defaultValue: [
        {
          title: "Menu 1",
          items: [{ title: "Home", url: "/" }],
        },
        {
          title: "Menu 2",
          items: [{ title: "About", url: "/" }],
        },
        {
          title: "Menu 3",
          items: [{ title: "Contact", url: "/" }],
        },
      ],
    },
  },
};

// export const basicButton = (args) => <Navigation {...args} />;
// basicButton.args = { children: "Basic button" };

// basicButton.parameters = {
//   design: {
//     type: "figma",
//     url: "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=954%3A426",
//   },
// };

export default {
  component: Footer,
  title: "Organisms/Footer",
  decorators: [withDesign],
  // decorators: [
  //   (Story) => (
  //     <div style={{ margin: "3em" }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
};
