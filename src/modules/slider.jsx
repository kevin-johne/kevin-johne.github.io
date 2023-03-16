import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { colorBrand, colorGray75, colorWhite } from "../setting/theme";
import "tiny-slider/dist/tiny-slider.css";
import { CssIcon } from "../patterns/icon";
import { ButtonSmallStyle } from "../patterns/button";
import arrow from "../images/icons/arrow-right.svg";
import { breakpoint, breakpointsMap } from "../utils/breakpoints";
import { tns } from "tiny-slider/src/tiny-slider";

const Wrapper = styled.div`
  height: 700px;

  .tns-controls {
    position: absolute;
    bottom: 20px;
    right: 20px;

    &:focus {
      outline: 0;
    }

    button {
      ${ButtonSmallStyle}

      &:focus {
        outline: 0;
      }

      &:first-child {
        display: none;
      }
    }
  }

  .tns-nav {
    position: absolute;
    right: 72px;
    bottom: 30px;

    button {
      width: 20px;
      height: 20px;
      padding: 5px;
      border-radius: 100%;
      background-color: ${colorGray75};
      background-clip: content-box;
      border: 0;

      &:focus {
        outline: 0;
      }

      &.tns-nav-active {
        background-color: ${colorBrand};
      }
    }
  }

  .tns-outer:nth-child(1),
  .image-slider:not(.tns-slider) {
    position: absolute;
    left: 0;
    right: 0;
    height: 700px;
    max-width: 1400px;
    margin: 0 auto;
    overflow: hidden;

    img {
      height: 700px;
      object-fit: cover;
    }
  }

  .tns-outer:nth-child(2),
  .text-slider:not(.tns-slider) {
    position: relative;
    padding: 20px !important;
    width: 300px;
    height: 400px;
    top: 100px;
    background-color: ${colorWhite};
    border-bottom: 3px solid ${colorBrand};
  }

  .text-slider__item {
    h2 {
      margin-top: 0;
    }
  }

  @media ${breakpoint(breakpointsMap.default, breakpointsMap.medium)} {
    height: auto;

    .tns-outer:nth-child(1),
    .image-slider:not(.tns-slider) {
      position: relative;
      height: auto;

      img {
        height: 400px;
      }
    }

    .tns-outer:nth-child(2),
    .text-slider:not(.tns-slider) {
      width: 100%;
      top: 0;
    }
  }
`;

const useTinySlider = (ref, options) => {
  return useCallback(
    (node) => {
      if (node instanceof HTMLElement) {
        ref.current = tns({
          container: node,
          ...options,
        });
      }
    },
    [ref, options]
  );
};

const Slider = ({ slides }) => {
  const imageSliderInstance = useRef(null);
  const imageSliderOptions = {
    items: 1,
    nav: false, // no dots
    controls: false, //no arrows
    lazyload: true,
    rewind: true,
  };
  const imageSliderRef = useTinySlider(imageSliderInstance, imageSliderOptions);

  const textSliderInstance = useRef(null);
  const textSliderOptions = {
    items: 1,
    rewind: true,
    controlsText: [
      "",
      `<span style="${CssIcon} background-image: url(${arrow});"></span>`,
    ],
  };

  const textSliderRef = useTinySlider(textSliderInstance, textSliderOptions);

  const buttonNavigation = () => {
    imageSliderInstance.current.goTo("next");
  };

  const dotNavigation = (event) => {
    const index = event.target.getAttribute("data-nav");
    if (index >= 0) {
      imageSliderInstance.current.goTo(index);
    }
  };

  useEffect(() => {
    if (!textSliderInstance.current) return;
    const textSliderInfo = textSliderInstance.current.getInfo();

    textSliderInfo.nextButton.addEventListener("click", buttonNavigation);
    textSliderInfo.navContainer.addEventListener("click", dotNavigation);

    return () => {
      textSliderInfo.nextButton.removeEventListener("click", buttonNavigation);
      textSliderInfo.navContainer.removeEventListener("click", dotNavigation);
    };
  }, [textSliderInstance]);

  if (!slides || slides.length === 0) {
    return null;
  }
  return (
    <Wrapper>
      <div className="image-slider" ref={imageSliderRef}>
        {slides.map((slide, index) => {
          const image = getImage(slide.image);

          return (
            <div className="image-slider__item" key={index}>
              <GatsbyImage alt={slide.title} image={image} />
            </div>
          );
        })}
      </div>
      <div className="text-slider" ref={textSliderRef}>
        {slides.map((slide, index) => (
          <div className="text-slider__item" key={index}>
            <h2>{slide.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: slide.text }} />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Slider;
