import React from "react";
import { list } from "./Data";
import Slider from "react-slick"

const Carousel = () => {
  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay:true,
    autoplaySpeed: 4000
  };
  return (
    <section className="slick-container">
 <Slider {...settings}>
      {
        list.map((each)=>{
            const {id, image, title, quote, name} = each
            return <article>
                <img src={image} alt={name} className="person-img"  />
                <h5 className="name">{name}</h5>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
            </article>
        })
      }
    </Slider>
    </section>
   
  );
};

export default Carousel;
