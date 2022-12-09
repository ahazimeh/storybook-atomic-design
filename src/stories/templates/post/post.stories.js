import React from "react";
import { withDesign } from "storybook-addon-designs";
// import { withKnobs, object } from "@storybook/addon-knobs";

import PostTemplate from "./post";

// import knobData from "./post.knobs.json";
// const { banner, footer, header, related } = knobData;

const blogContent =
  "<h1>Post Content</h1><p>You need to have a very firm paint to do this. Didn't you know you had that much power? You can move mountains. You can do anything. This is unplanned it really just happens. Let's make a nice big leafy tree.</p><img src='http://unsplash.it/1000/400?random&gravity=center' alt=''/><p>We don't want to set these clouds on fire. There is immense joy in just watching - watching all the little creatures in nature. And maybe, maybe, maybe...</p><p>All you have to learn here is how to have fun. Don't fiddle with it all day. This piece of canvas is your world. And I will hypnotize that just a little bit. Have fun with it.</p><p>In nature, dead trees are just as normal as live trees. I'm sort of a softy, I couldn't shoot Bambi except with a camera. We want to use a lot pressure while using no pressure at all. Let's do that again.</p><p>We're not trying to teach you a thing to copy. We're just here to teach you a technique, then let you loose into the world. Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. Nice little fluffy clouds laying around in the sky being lazy. Just go out and talk to a tree. Make friends with it.</p><p>We'll play with clouds today. We'll throw some old gray clouds in here just sneaking around and having fun. Anytime you learn something your time and energy are not wasted. Just a little indication.</p><p>If you don't like it - change it. It's your world. Just go back and put one little more happy tree in there. We need a shadow side and a highlight side. It's important to me that you're happy. We spend so much of our life looking - but never seeing. There comes a nice little fluffer.</p>";

export const examplePost = {
  component: (args) => <PostTemplate {...args} />,
  argTypes: {
    banner: {
      defaultValue: {
        content:
          "Multi Award Winning Spa Manager Clare Pritchard shares the story of Celtic Elements.",
        cta: {
          title: "Lowered action",
          url: "/discount",
        },
        title: "Launch discount",
        variant: "primary",
      },
    },
    content: {
      defaultValue: blogContent,
    },
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
    related: {
      defaultValue: {
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
        intro: {
          cta: {
            href: "/posts",
            label: "View all posts",
            target: null,
          },
          subtitle: "Related posts",
          text: "Multi Award Winning Spa Manager Clare Pritchard shares the story of Celtic Elements.",
          title: "Continue reading our beauty insights",
        },
      },
    },
  },
  // 	banner={object(banner.label, banner.default, banner.group)}
  // 	content={blogContent}
  // 	footer={object(footer.label, footer.default, footer.group)}
  // 	header={object(header.label, header.default, header.group)}
  // 	related={object(related.label, related.default, related.group)}
  // />
};

export default {
  component: PostTemplate,
  decorators: [withDesign],
  title: "Templates/Blog Post",
};
