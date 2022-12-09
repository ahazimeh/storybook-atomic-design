import React from "react";
import { action } from "@storybook/addon-actions";

import Header from "./Header";
import { withDesign } from "storybook-addon-designs";

const label = "Icon";
const options = {
  vertical: "vertical",
  horizontal: "horizontal",
};

const defaultValue = "bag";
const groupId = "Images";

export const standardHeader = {
  component: (args) => <Header {...args} />,

  argTypes: {
    navigation: {
      defaultValue: [
        {
          title: "general",
          items: [
            {
              icon: null,
              title: "Shop",
              url: "#",
            },
            {
              icon: null,
              title: "About Celtic Elements",
              url: "#",
            },
            {
              icon: null,
              title: "FAQ",
              url: "#",
            },
            {
              icon: null,
              title: "Contact",
              url: "#",
            },
          ],
        },
        {
          title: "account",
          items: [
            {
              icon: null,
              title: "Insights",
              url: "#",
            },
            {
              icon: null,
              title: "Account",
              url: "#",
            },
            {
              icon: "user",
              title: "User",
              url: "#",
            },
            {
              icon: "bag",
              title: "Cart",
              url: "#",
            },
          ],
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
  component: Header,
  title: "Organisms/Header",
  decorators: [withDesign],
  // decorators: [
  //   (Story) => (
  //     <div style={{ margin: "3em" }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
};
