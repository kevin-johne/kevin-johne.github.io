import { useAnimationFrame } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colorBrand, colorGray93 } from "../../setting/theme";

const moonSize = 40;
const targetFrames = 40;
const oneOffASecond = (1 / targetFrames) * 1000;
const speed = 0.3;

const MoonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  height: ${moonSize}px;
  width: ${moonSize}px;
  background-color: ${colorGray93};
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

const MoonTitle = styled.div`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 6px;
  padding: 2px;
  white-space: nowrap;
  background-color: ${colorGray93};
  border-radius: 2px;
`;

export const Moon = ({
  title,
  link,
  icon,
  radius,
  diagonal,
  startPosition,
  canvas,
  shouldStop: shouldPause,
}) => {
  const objectRef = useRef(null);
  const [ctx, setCtx] = useState(null);
  const startPositionRad = (startPosition * Math.PI) / 180;
  const switchCircle = useRef(1);
  const oldX = useRef(0);
  const startTime = useRef(undefined);
  const animationTime = useRef(0);
  let lastAnimationFrame = 0;

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

  useEffect(() => {
    if (!objectRef.current) return;
    const mouseenter = () => {
      if (shouldPause.current === null) return;
      shouldPause.current = true;
    };
    const mouseleave = () => {
      if (shouldPause.current === null) return;
      shouldPause.current = false;
    };

    objectRef.current.addEventListener("mouseenter", mouseenter);
    objectRef.current.addEventListener("mouseleave", mouseleave);

    return () => {
      objectRef.current.removeEventListener("mouseenter", mouseenter);
      objectRef.current.removeEventListener("mouseleave", mouseleave);
    };
  }, [objectRef]);

  const calculateLogoPosition = (time) => {
    const x = Math.sin(time / 1000 + startPositionRad) * radius * diagonal;
    if (x <= oldX.current) {
      switchCircle.current = -1;
    }

    if (x >= oldX.current) {
      switchCircle.current = 1;
    }

    const y =
      switchCircle.current *
        Math.sqrt(Math.pow(radius, 2) - Math.pow(x / diagonal, 2)) -
      x / diagonal;

    const hypotenuses = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    const sinus = x / hypotenuses;
    const scaleFactor = Math.sin(Math.asin(sinus)) + 1.1;

    const centerX = x - moonSize / 2;
    const centerY = y - moonSize / 2;

    if (objectRef.current) {
      objectRef.current.style.transform = `translateY(${centerY}px) translateX(${centerX}px) scale(${scaleFactor})`;
      objectRef.current.style.zIndex = `${switchCircle}`;
    }

    oldX.current = x;

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
    // require delta, so that the delta is only added to the time should animation continue
    const delta = time - lastAnimationFrame;
    lastAnimationFrame = time;

    if (startTime.current === undefined) {
      startTime.current = time;
    }

    // frames are too fast or animation is paused
    if (time - startTime.current <= oneOffASecond || shouldPause.current) {
      return;
    }

    animationTime.current = animationTime.current + delta;

    calculateLogoPosition((startTime.current - animationTime.current) * speed);
  });

  return (
    <MoonWrapper ref={objectRef}>
      <a href={link}>
        <img src={icon} alt={title} />
      </a>
      <MoonTitle>{title}</MoonTitle>
    </MoonWrapper>
  );
};
