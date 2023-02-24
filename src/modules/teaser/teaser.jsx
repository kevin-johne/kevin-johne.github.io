import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { InlineLink } from "../../patterns/link";
import { colorGray75, font } from "../../setting/theme";
import Tommy from "../../images/icons/tommy.svg";
import Stroer from "../../images/icons/stroer.svg";
import DocMorris from "../../images/icons/docmorris.svg";
import Condor from "../../images/icons/condor.svg";
import Skylark from "../../images/icons/skylark.svg";
import Calvin from "../../images/icons/calvin-klein.svg";
import { debounce } from "lodash";
import { Moon } from "./moon";
import { breakpoint, breakpointsMap } from "../../utils/breakpoints";

const Wrapper = styled.div`
  position: relative;
  min-height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const TeaserContent = styled.div`
  h1 {
    font-size: 24px;
    margin: 0 0 20px;
  }

  h2 {
    font-family: ${font.copy};
    font-size: 18px;
    color: ${colorGray75};

    margin: 0 0 20px;
  }

  @media ${breakpoint(breakpointsMap.default, breakpointsMap.small)} {
    margin-bottom: 50px;

    h1 {  
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin: auto 0;
      height: 70vh;
      width: 100%;
    }
  }

  @media ${breakpoint(breakpointsMap.small)} {
    padding-left: 20%;
    width: 70%;

    h1 {
      font-size: 36px;
      padding-top: 0;
      padding-bottom: 0;
    }

    h2 {
      font-size: 20px;
    }
  }
`;

const Canvas = styled.canvas`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Globe = styled.div`
  position: absolute;
  pointer-events: none;
  width: 80%;
  height: 70%;
  top: 0;
  right: 0;

  @media ${breakpoint(breakpointsMap.medium)} {
    width: 80%;
    height: 100%;
  }
`;

export const Teaser = ({ title, subtitle }) => {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const [radius, setRadius] = useState(0);
  const [diagonal, setDiagonal] = useState(2);

  /**
   * calculate new radius so Moon newer goes out of box
   */
  const windowResponsive = () => {
    const box = wrapperRef.current.getBoundingClientRect();
    const diagonal = box.width / box.height;
    const radius = Math.min(box.width, box.height) / (2 + diagonal);
    canvasRef.current.height = box.height;
    canvasRef.current.width = box.width;
    setRadius(radius);
    setDiagonal(diagonal);
  };

  /**
   * mount effect
   */
  useEffect(() => {
    windowResponsive();
  }, []);

  /**
   * window resize listener
   */
  useEffect(() => {
    const debounced = debounce(windowResponsive, 2000);
    window.addEventListener("resize", debounced);

    return () => {
      window.removeEventListener("resize", debounced);
    };
  }, []);

  return (
    <Wrapper>
      <TeaserContent>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>

        <InlineLink to="/work">View my Work</InlineLink>
      </TeaserContent>

      <Globe ref={wrapperRef}>
        <Canvas ref={canvasRef}></Canvas>
        <Moon
          radius={radius}
          diagonal={diagonal}
          startPosition="135"
        >
          <img src={DocMorris} />
        </Moon>
        <Moon
          radius={radius}
          diagonal={diagonal}
          startPosition="180"
        >
          <img src={Skylark} />
        </Moon>
        <Moon
          radius={radius}
          diagonal={diagonal}
          startPosition="225"
        >
          <img src={Tommy} />
        </Moon> 
        <Moon
          radius={radius}
          diagonal={diagonal}
          startPosition="270"
        >
          <img src={Calvin} />
        </Moon>
        <Moon
          radius={radius}
          diagonal={diagonal}
          startPosition="315"
        >
          <img src={Stroer} />
        </Moon>
        <Moon
          radius={radius}
          diagonal={diagonal}
          startPosition="360"
        >
          <img src={Condor} />
        </Moon>
      </Globe>
    </Wrapper>
  );
};
