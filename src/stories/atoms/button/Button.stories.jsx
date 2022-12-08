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

import Button from "./Button";
import { withDesign } from "storybook-addon-designs";

const buttonClicked = (e) => {
  e.preventDefault();
  alert("hello");
};

const label = "Icon";
const options = {
  bag: "bag",
  cart: "cart",
  plus: "plus",
  user: "user",
  x: "x",
};

const defaultValue = "bag";
const groupId = "Images";

export const basicButton = (args) => <Button {...args} />;
basicButton.args = { children: "Basic button" };
export const secondaryButton = () => (
  <Button variant="secondary">Secondary button</Button>
);
export const tertiaryButton = () => (
  <Button variant="tertiary">Tertiary button</Button>
);
export const iconButton = {
  component: (args) => <Button {...args}></Button>,
  argTypes: {
    icon: {
      options: options,
      control: { type: "select" },
      groupId: "images",
      defaultValue: "bag",
    },
    children: {
      defaultValue: "Icon button",
    },
  },
};
export const functionButton = () => (
  <Button onClick={buttonClicked}>Function button</Button>
);
export const linkedButton = () => <Button href="/route">Linked button</Button>;

basicButton.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=954%3A426",
  },
};

export default {
  component: Button,
  title: "Button",
  decorators: [withDesign],
  // decorators: [
  //   (Story) => (
  //     <div style={{ margin: "3em" }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
};
