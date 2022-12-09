import React from "react";
// import { array, object, text } from "@storybook/addon-knobs"
import { withDesign } from "storybook-addon-designs";
import Carousel from "./carousel";

// import knobData from "./carousel.knobs.json"
// const { items, intro } = knobData

export const productCarousel = {
  component: (args) => <Carousel {...args} />,
  argTypes: {
    intro: {
      defaultValue: {
        cta: {
          href: "/shop",
          label: "View all products",
          target: null,
        },
        subtitle: "Our products",

        text: "Multi Award Winning Spa Manager Clare Pritchard shares the story of Celtic Elements.",
        title: "Premium, handcrafted care",
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
};

productCarousel.story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=926%3A992",
    },
  },
};

export default {
  component: Carousel,
  decorators: [withDesign],
  title: "Organisms/Caoursel",
};
