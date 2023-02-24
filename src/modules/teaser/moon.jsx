import { useAnimationFrame } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colorBrand } from "../../setting/theme";

const moonSize = 40;
const targetFrames = 40;
const oneOffASecond = (1 / targetFrames) * 1000;
const speed = 0.3;

const MoonWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: ${moonSize}px;
  width: ${moonSize}px;
  background-color: #f2f2f2;
  border-radius: 100%;
  transform: scale(0);
  user-select: none;

  img {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    width: ${moonSize - 10}px;
  }
`;

export const Moon = ({ children, radius, diagonal, startPosition, canvas }) => {
  const objectRef = useRef(null);
  const [ctx, setCtx] = useState(null);
  const startPositionRad = (startPosition * Math.PI) / 180;
  let switchCircle = 1;
  let oldX = 0;
  let startTime;

  useEffect(() => {
    if (canvas) {
      setCtx(canvas.current.getContext("2d"));
    }
  }, [canvas, setCtx]);

  useEffect(() => {
    if (ctx) {
      ctx.fillStyle = colorBrand;
    }
  }, [ctx]);

  const calculateLogoPosition = (time) => {
    const x = Math.sin(time / 1000 + startPositionRad) * radius * diagonal;
    if (x <= oldX) {
      switchCircle = -1;
    }

    if (x >= oldX) {
      switchCircle = 1;
    }

    const y =
      switchCircle *
        Math.sqrt(Math.pow(radius, 2) - Math.pow(x / diagonal, 2)) -
      x / diagonal;

    const hypotenuses = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    const sinus = x / hypotenuses;
    const scaleFactor = Math.sin(Math.asin(sinus)) + 1.1;

    const centerX = x - moonSize / 2;
    const centerY = y - moonSize / 2;
    
    if(objectRef.current) {
      objectRef.current.style.transform = `translateY(${centerY}px) translateX(${centerX}px) scale(${scaleFactor})`;
      objectRef.current.style.zIndex = `${switchCircle}`;
    }

    oldX = x;

    if (ctx) {
      ctx.fillRect(
        x + canvas.current.width / 2,
        y + canvas.current.height / 2,
        scaleFactor / 2,
        scaleFactor / 2
      );
    }
  };

  useAnimationFrame((time) => {
    if (startTime === undefined) {
      startTime = time;
    }
    if (time - startTime <= oneOffASecond) {
      return;
    }

    calculateLogoPosition((startTime - time) * speed);
  });

  return <MoonWrapper ref={objectRef}>{children}</MoonWrapper>;
};
