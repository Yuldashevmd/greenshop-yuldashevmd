import React from "react";
import { Blog, Container } from "./style";

const PlantCare = () => {
  return (
    <Container>
      <h1 className="headerText">About Plant Care</h1>
      <Blog>
        <h1>House Plants Going Back in Time</h1>
        <p>
          The variety of house plants you can grow indoors is amazing. However,
          this article was written over 50 years ago and shows the true variety
          of houseplants people use to grow indoors and was available to them.
          The question is… do we have that same variety available today? You'll
          notice that these indoor plants.
        </p>
        <a href="http://www.plant-care.com/house-plants-going-back-in-time.html">
          Read full article here...
        </a>
      </Blog>
      <Blog>
        <h1>Garden Landscaping – A Great Way To Update A Backyard</h1>
        <p>
          Garden landscaping is a great way to update a backyard. Giving your
          backyard a makeover will certainly improve your homes appearance and
          add value at the same time. Planting new flowers and updating your
          landscape will add beauty to your home and make a better place for you
          and your family to spend time in.
        </p>
        <a href="http://www.plant-care.com/1526-garden-landscaping.html">
          Read full article here...
        </a>
      </Blog>
      <Blog>
        <h1>Climbing Plants – For Privacy and Beauty</h1>
        <p>
          Amateur gardeners have neglected some of the best climbers that are
          grown quickly in almost any climate. One that is seldom seen, in spite
          of the fact that it was introduced into our country from Japan 100
          years ago, is the climbing hydrangea. It bears splendid tresses of
          white flowers in July and August
        </p>
        <a href="http://www.plant-care.com/climbing-plants-for-privacy-and-beauty.html">
          Read full article here...
        </a>
      </Blog>
    </Container>
  );
};

export default PlantCare;
