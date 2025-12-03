import React from "react";
import Slider from "../../component/Slider";
import PopularToys from "./PopularToys";
import { useLoaderData } from "react-router";
import WhyUs from "./WhyUs";
import Testimonials from "./Testimonials";
import Promotion from "./Promotion";

const Home = () => {
  const toysData = useLoaderData();

  return (
    <div>
      <title>Kids Toy: Home</title>
      <Slider toys={toysData}></Slider>

      <PopularToys toysData={toysData}></PopularToys>
      <div className="divider"></div>
      <Promotion></Promotion>

      <div className="divider"></div>
      <WhyUs></WhyUs>
      <div className="divider"></div>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
