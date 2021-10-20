import React from "react";
import styled from "styled-components"
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const Wrapper = styled.div`

`;

const Slider = ({slides}) => {
  return (
    <div className="mod-image-text-slider auto-init" data-module="modules/image-text-slider/image-text-slider">
      <div className="image-slider js-image-slider">
        {slides.map(slide => {
          const image = getImage(slide.image);

          return (
            <div className="image-slider__item">
              <GatsbyImage alt={slide.title} image={image}/>
            </div>
            )
        })}

      </div>
      <div className="text-slider js-text-slider">
        {slides.map(slide => (
          <div className="text-slider__item">
            <h2>{slide.title}</h2>
            <p>{slide.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider;
