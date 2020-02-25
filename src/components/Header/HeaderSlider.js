import React from "react";
import arrowRight from "../images/arrows-right.svg";

class HeaderSlider extends React.Component {
  render() {
    return (
      <div className="heder__slider-item slider-item">
        <div className="slider-item__info">
          <div className="slider-item__info-suptitle suptitle-left">Surf</div>
          <div className="slider-item__info-title">West Shore</div>
          <div className="slider-item__info-suptext suptitle-left">
            Condition
          </div>
          <div className="slider-item__info-text">Radical</div>
          <a href="#" className="slider-item__info-link">
            <img src={arrowRight} />
          </a>
        </div>
      </div>
    );
  }
}

export default HeaderSlider;
