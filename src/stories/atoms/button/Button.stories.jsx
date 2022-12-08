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

const buttonClicked = (e) => {
  e.preventDefault();
  alert("hello");
};

export const bassicButton = () => (
  <Button variant="secondary">Basic button</Button>
);
export const functionButton = () => (
  <Button onClick={buttonClicked}>Function button</Button>
);
export const linkedButton = () => <Button href="/route">Linked button</Button>;

export default {
  component: Button,
  title: "Button",
  // decorators: [
  //   (Story) => (
  //     <div style={{ margin: "3em" }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
};
