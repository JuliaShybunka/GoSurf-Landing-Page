import React from "react";

class HeaderSliderBottom extends React.Component {
  state = {
    name: ["Hi", "Hello", "By", "None"]
  };

  render() {
    return (
      <div className="slider-dots">
        <div className="slider-dots__item">
          <div className="dots-box__number">01</div>
          <div className="dots-box__name">{this.state.name} Shore</div>
        </div>
      </div>
    );
  }
}

export default HeaderSliderBottom;
