import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { InlineLink } from "../../patterns/link";
import { colorGray75, font } from "../../setting/theme";
import Tommy from "../../images/icons/tommy.svg";
import Stroer from "../../images/icons/stroer.svg";
import DocMorris from "../../images/icons/docmorris.svg";
import Condor from "../../images/icons/condor.svg";
import Skylark from "../../images/icons/skylark.svg";
import { debounce } from "lodash";
import { Moon } from "./moon";


const Wrapper = styled.div`
  position: relative;
  height: calc(100vh - 90px);
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0 0 20px;
    font-size: 36px;
  }

  h2 {
    font-family: ${font.copy};
    font-size: 20px;
    width: 50%;
    color: ${colorGray75};
    text-align: center;
    margin: 0 0 20px;
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

export const Teaser = ({ title, subtitle }) => {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const [radius, setRadius] = useState(0);
  const diagonal = 2.5;

  /**
   * calculate new radius so Moon newer goes out of box
   */
  const windowResponsive = () => {
    const box = wrapperRef.current.getBoundingClientRect();
    const radius = Math.min(box.width, box.height) / (2 + diagonal / 2);
    canvasRef.current.height = box.height;
    canvasRef.current.width = box.width;
    setRadius(radius);
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
    <Wrapper ref={wrapperRef}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>

      <InlineLink to="/work">View my Work</InlineLink>
      <Canvas ref={canvasRef}></Canvas>

      <div>
        <Moon
          radius={radius}
          diagonal={diagonal}
          startPosition="135"
          canvas={canvasRef}
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
          <img src={Stroer} />
        </Moon>
        <Moon
          radius={radius}
          diagonal={diagonal}
          startPosition="315"
        >
          <img src={Condor} />
        </Moon>
      </div>
    </Wrapper>
  );
};
