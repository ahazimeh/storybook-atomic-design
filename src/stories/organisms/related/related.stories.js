import React from "react";
// import { array, object, text } from "@storybook/addon-knobs";
import { withDesign } from "storybook-addon-designs";
import Related from "./related";

// import knobData from "./related.knobs.json";
// const { items, intro } = knobData;

export const postsRelated = {
  component: (args) => <Related {...args} />,
  argTypes: {
    intro: {
      cta: {
        defaultValue: {
          href: "/posts",
          label: "View all posts",
          target: null,
        },
      },
      subtitle: {
        defaultValue: "Related posts",
      },
      text: {
        defaultValue:
          "Multi Award Winning Spa Manager Clare Pritchard shares the story of Celtic Elements.",
      },
      title: {
        defaultValue: "Continue reading our beauty insights",
      },
    },
    items: {
      defaultValue: [
        {
          category: {
            href: "/category/beauty-routine",
            label: "Beauty routine",
          },
          description:
            "Celtic Elements is a Welsh, Vegan, Wellness brand. We use Welsh natural ingredients from the hillsides & coast of Wales in our Skincare, Body care and Well being ranges.",
          image: "https://source.unsplash.com/random/500x300",
          slug: "creating-a-positive-day",
          title: "Creating a Positive Day",
        },
        {
          category: {
            href: "/category/beauty-routine",
            label: "Beauty routine",
          },
          description:
            "Celtic Elements is a Welsh, Vegan, Wellness brand. We use Welsh natural ingredients from the hillsides & coast of Wales in our Skincare, Body care and Well being ranges.",
          image: "https://source.unsplash.com/random/500x300",
          slug: "creating-a-positive-day",
          title: "Creating a Positive Day",
        },
        {
          category: {
            href: "/category/beauty-routine",
            label: "Beauty routine",
          },
          description:
            "Celtic Elements is a Welsh, Vegan, Wellness brand. We use Welsh natural ingredients from the hillsides & coast of Wales in our Skincare, Body care and Well being ranges.",
          image: "https://source.unsplash.com/random/500x300",
          slug: "creating-a-positive-day",
          title: "Creating a Positive Day",
        },
      ],
    },
  },
  // intro={{
  // 	cta: object(intro.cta.label, intro.cta.default, intro.cta.group),
  // 	subtitle: text(
  // 		intro.subtitle.label,
  // 		intro.subtitle.default,
  // 		intro.subtitle.group
  // 	),
  // 	text: text(intro.text.label, intro.text.default, intro.text.group),
  // 	title: text(intro.title.label, intro.title.default, intro.title.group)
  // }}
  // items={array(items.label, items.default, items.group)}
  // />
};

postsRelated.story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=969%3A521",
    },
  },
};

export default {
  component: Related,
  decorators: [withDesign],
  title: "Organisms/Related",
};
