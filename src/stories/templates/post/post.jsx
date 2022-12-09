import React from "react";

import StyledPost from "./post.styles";

import PostContent from "../../molecules/post/postContent";

import Banner from "../../organisms/banner/banner";
import Footer from "../../organisms/footer/Footer";
import Header from "../../organisms/header/Header";
import Related from "../../organisms/related/related";
import { object, string } from "prop-types";

const PostTemplate = ({ banner, content, footer, header, related }) => (
  <StyledPost>
    <Header {...header} />
    <PostContent content={content} />
    <Banner {...banner} />
    <Related {...related} />
    <Footer {...footer} />
  </StyledPost>
);

PostTemplate.propTypes = {
  banner: object,
  content: string,
  footer: object,
  header: object,
  related: object,
  // category: object,
  // description: string,
  // image: shape({
  // 	altText: string,
  // 	mediaItemUrl: string.isRequired
  // }),
  // productCategories: object,
  // shortDescription: string,
  // title: string.isRequired
};

export default PostTemplate;
