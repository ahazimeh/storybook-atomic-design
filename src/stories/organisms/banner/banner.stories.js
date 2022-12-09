import React from "react";
// import { object, select, text } from "@storybook/addon-knobs";
import { withDesign } from "storybook-addon-designs";
import Banner from "./banner";

// import knobData from "./banner.knobs.json";
// const { content, cta, title, variant } = knobData;

export const standardBanner = {
  component: (args) => <Banner {...args} />,
  argTypes: {
    content: {
      defaultValue:
        "Multi Award Winning Spa Manager Clare Pritchard shares the story of Celtic Elements.",
    },
    cta: {
      defaultValue: {
        title: "Lowered action",
        url: "/discount",
      },
    },
    title: {
      defaultValue: "Launch discount",
    },
    variant: {
      options: {
        Primary: "primary",
        Secondary: "secondary",
        Dark: "dark",
        Light: "light",
      },
      control: { type: "select" },
      groupId: "Type",
      defaultValue: "primary",
    },
  },
  // cta={object(cta.label, cta.default, cta.group)}
  // title={text(title.label, title.default, title.group)}
  // variant={select(
  //   variant.label,
  //   variant.default,
  //   variant.options,
  //   variant.group
  // )}
  //   />
};

standardBanner.story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=926%3A616",
    },
  },
};

export default {
  component: Banner,
  decorators: [withDesign],
  title: "Organisms/Banner",
};
