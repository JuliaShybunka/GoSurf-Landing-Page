import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import HeaderSliderItem from "./HeaderSliderItem";
import Previous from "../images/arrows-left.svg";
import Next from "../images/arrows-right.svg";

class HeaderSlider extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false
    };
    return (
      <div className="header__slider">
        <Slider ref={c => (this.slider = c)} {...settings}>
          <HeaderSliderItem key={1} name={"North"} />
          <HeaderSliderItem key={2} name={"South"} />
          <HeaderSliderItem key={3} name={"West"} />
          <HeaderSliderItem key={4} name={"East"} />
        </Slider>
        <div className="slider__button">
          <button className="slider__button-prev" onClick={this.previous}>
            <img src={Previous} />
          </button>
          <button className="slider__button-next" onClick={this.next}>
            <img src={Next} />
          </button>
        </div>
      </div>
    );
  }
}

export default HeaderSlider;
