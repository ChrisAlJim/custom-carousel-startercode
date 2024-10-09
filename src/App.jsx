import "./App.css";
import { useState } from "react";
import Carousel from "./components/carousel";

const carouselImages = [
  "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  "https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg",
  "https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg",
];

export const App = () => {

  return (
    <Carousel images={carouselImages}/>
  )
};
