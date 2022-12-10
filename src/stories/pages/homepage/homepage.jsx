import { gql, useQuery } from "@apollo/client";
import React from "react";

import Banner from "../../organisms/banner/banner";
import Carousel from "../../organisms/carousel/carousel";
import Footer from "../../organisms/footer/Footer";
import Header from "../../organisms/header/Header";

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

const Homepage = ({ banner, carousel, footer, header }) => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log("zz", data);
  return (
    <>
      <Header {...header} />
      {data.locations.map(({ id, name, description, photo }) => (
        <div key={id}>
          <h3>{name}</h3>
          <img
            width="400"
            height="250"
            alt="location-reference"
            src={`${photo}`}
          />
          <br />
          <b>About this location:</b>
          <p>{description}</p>
          <br />
        </div>
      ))}
      <Banner {...banner} />
      <Carousel {...carousel} />
      <Footer {...footer} />
    </>
  );
};

export default Homepage;
