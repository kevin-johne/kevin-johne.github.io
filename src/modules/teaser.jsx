import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { InlineLink } from "../patterns/link";
import { colorGray75, font } from "../setting/theme";
import Tommy from "../images/icons/tommy.svg";
import { useAnimationFrame } from "framer-motion";
import { debounce } from "lodash";

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
  const targetFrames = 40;
  const oneOffASecond = 1/targetFrames * 1000;
  let oldTime = 0;
  const speed = 0.5;

  const windowResponsive = () => {
    const box = wrapperRef.current.getBoundingClientRect();
    const radius = Math.min(box.width, box.height) / 2 / diagonal;
    canvasRef.current.height = box.height;
    canvasRef.current.width = box.width;
    setRadius(radius);
  };

  useEffect(() => {
    ctx = canvasRef.current.getContext('2d');
    windowResponsive();
  },[]);

  useEffect(() => {
    const debounced = debounce(windowResponsive, 2000);
    window.addEventListener('resize', debounced);

    return () => {
      window.removeEventListener('resize', debounced);
    };
  }, []);

  useAnimationFrame((time) => {
    if(time - oldTime <= oneOffASecond) {
      return;
    }

    const x = Math.sin(time / 1000 * speed) * radius * diagonal;
    if (x <= oldx) {
      switchCircle = -1;
    }

    if (x >= oldx) {
      switchCircle = 1;
    }
    const y = switchCircle * Math.sqrt(Math.pow(radius, 2) - Math.pow(x / diagonal, 2)) - x / diagonal;

    const hypotenuses = x / Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) + 2;
    logoGlobeRef.current.style.transform = `translateY(${y}px) translateX(${x}px) scale(${hypotenuses})`;

    if(!ctx) {
      ctx = canvasRef.current.getContext('2d');
    }
    ctx.fillRect(x+canvasRef.current.width/2,y + canvasRef.current.height /2 ,hypotenuses,hypotenuses);

    oldx = x;
    oldy = y;
    oldTime = time;
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
    </Wrapper>
  );
};
