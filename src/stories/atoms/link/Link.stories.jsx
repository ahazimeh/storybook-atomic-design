import React from "react";
import { action } from "@storybook/addon-actions";

export const basicLink = (args) => <a {...args} />;
basicLink.args = { children: "Link text", href: "#" };

export default {
  title: "Atoms/Link",
};
