import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { InlineLink } from "../patterns/link";
import { colorGray75, font } from "../setting/theme";
import Tommy from "../images/icons/tommy.svg";
import { useAnimationFrame } from "framer-motion";

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
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
`

const Circle = styled.span`
  position: absolute;
  top: 50%;
`

const Canvas = styled.canvas`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const Teaser = ({ title, subtitle }) => {
  const logoGlobeRef = useRef(null);
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  let switchCircle = 1;
  let oldx = 0;
  let oldy = 0;
  let ctx;
  const [radius, setRadius] = useState(0);
  const diagonal = 2.5;

  useEffect(() => {
    const box = wrapperRef.current.getBoundingClientRect();
    const radius = Math.min(box.width, box.height) / 2 / diagonal;
    ctx = canvasRef.current.getContext('2d');
    canvasRef.current.height = box.height;
    canvasRef.current.width = box.width;
    setRadius(radius);
  }, [wrapperRef, canvasRef, setRadius]);

  useAnimationFrame((t) => {

    
    const x = Math.sin(t / 1000) * radius * diagonal;
    if (x <= oldx) {
      switchCircle = -1;
    }

    if (x >= oldx) {
      switchCircle = 1;
    }
    const y = switchCircle * Math.sqrt(Math.pow(radius, 2) - Math.pow(x / diagonal, 2)) - x / diagonal;
    // console.log(x);

    logoGlobeRef.current.style.transform = `translateY(${y}px) translateX(${x}px)`;

    if(!ctx) {
      ctx = canvasRef.current.getContext('2d');
    }
    ctx.fillRect(x+canvasRef.current.width/2,y + canvasRef.current.height /2 ,1,1);

    oldx = x;
    oldy = y;
  });

  return (
    <Wrapper ref={wrapperRef}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>

      <InlineLink to="/work">View my Work</InlineLink>

      <div>
        <Circle ref={logoGlobeRef}><img src={Tommy}/></Circle>
      </div>
      <Canvas id="canvas" ref={canvasRef}></Canvas>

      {/* sqrt(25-(x*0.5)^2)+x/4 */}
      {/* -sqrt(25-(x*0.5)^2)+x/4 */}
    </Wrapper>
  );
};
