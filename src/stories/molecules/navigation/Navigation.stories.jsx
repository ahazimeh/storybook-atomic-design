// import React from "react";

// import { Button } from "./Button";

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// export default {
//   title: "Example/Button",
//   component: Button,
//   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: { control: "color" },
//   },
// };

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: "Button",
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "Button",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "Button",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Button",
// };

import React from "react";
import { action } from "@storybook/addon-actions";

import Navigation from "./Navigation";
import { withDesign } from "storybook-addon-designs";

const label = "Icon";
const options = {
  vertical: "vertical",
  horizontal: "horizontal",
};

const defaultValue = "bag";
const groupId = "Images";

export const horizontalNavigation = {
  component: (args) => <Navigation {...args} />,

  argTypes: {
    direction: {
      options: options,
      control: { type: "select" },
      groupId: "images",
      defaultValue: "horizontal",
    },
    items: {
      groupId: "images",
      defaultValue: [
        { title: "Home", url: "/" },
        {
          title: "About us",
          url: "/about",
        },
        {
          title: "Contact",
          url: "/contact",
        },
      ],
    },
  },
};

export const verticalNavigation = {
  component: (args) => <Navigation {...args} />,

  argTypes: {
    direction: {
      options: options,
      control: { type: "select" },
      groupId: "images",
      defaultValue: "vertical",
    },
    items: {
      groupId: "images",
      defaultValue: [
        { title: "Home", url: "/" },
        {
          title: "About us",
          url: "/about",
        },
        {
          title: "Contact",
          url: "/contact",
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
  component: Navigation,
  title: "Molecules/Navigation",
  decorators: [withDesign],
  // decorators: [
  //   (Story) => (
  //     <div style={{ margin: "3em" }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
};
