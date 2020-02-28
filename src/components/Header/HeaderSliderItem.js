import React from "react";

import arrowRight from "../images/arrows-right.svg";

const HeaderSliderItem = prop => {
  return (
    <div className="header__slider-item slider-item">
      <div className="slider-item__info">
        <div className="slider-item__info-suptitle suptitle-left">Surf</div>
        <div className="slider-item__info-title">{prop.name} Shore</div>
        <div className="slider-item__info-suptext suptitle-left">Condition</div>
        <div className="slider-item__info-text">Radical</div>
        <a href="#" className="slider-item__info-link">
          <img src={arrowRight} />
        </a>
      </div>
    </div>
  );
};

export default HeaderSliderItem;
