import React from "react";
// import { array, object, text } from "@storybook/addon-knobs";
import { withDesign } from "storybook-addon-designs";
import Homepage from "./homepage";

// import knobData from "./homepage.knobs.json";
// const { banner, carousel, footer, header } = knobData;

export const homepageExample = {
  component: (args) => <Homepage {...args} />,
  argTypes: {
    footer: {
      defaultValue: {
        menus: [
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
    header: {
      defaultValue: {
        navigation: [
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
    banner: {
      defaultValue: {
        content: "Creating a Positive Day",
        cta: {
          href: "#",
          label: "Call to action",
          target: null,
        },
        title: "Creating a Positive Day",
      },
    },
    carousel: {
      defaultValue: {
        intro: {
          cta: {
            href: "/shop",
            label: "View all products",
            target: null,
          },
          subtitle: "Our products",

          text: "Multi Award Winning Spa Manager Clare Pritchard shares the story of Celtic Elements.",
          title: "Premium, handcrafted care",
        },
        items: [
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
  },
};

homepageExample.story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/uihfnI2u5KSj2LuAVZR7lt/Celtic-Elements?node-id=16%3A858",
    },
  },
};

export default {
  component: Homepage,
  decorators: [withDesign],
  title: "Pages/Homepage",
};
