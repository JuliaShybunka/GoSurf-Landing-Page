import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import HeaderSliderItem from "./HeaderSliderItem";

class HeaderSlider extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true
    };
    return (
      <div>
        <Slider {...settings}>
          <HeaderSliderItem name={"North"} />
          <HeaderSliderItem name={"South"} />
          <HeaderSliderItem name={"West"} />
          <HeaderSliderItem name={"East"} />
        </Slider>
      </div>
    );
  }
}

export default HeaderSlider;
