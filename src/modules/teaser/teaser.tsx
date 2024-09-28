import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { InlineLink } from "../../patterns/link";
import { colorGray75, font } from "../../setting/theme";
import { debounce } from "lodash";
import { Moon } from "./moon";
import { breakpoint, breakpointsMap } from "../../utils/breakpoints";
import { Project } from "./Project";

const Wrapper = styled.div`
  position: relative;
  min-height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const TeaserContent = styled.div`
  z-index: 1;

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

  width: 80%;
  height: 70%;
  top: 0;
  right: 0;

  @media ${breakpoint(breakpointsMap.medium)} {
    width: 80%;
    height: 100%;
  }
`;

type TeaserProps = {
  title: string;
  subtitle: string;
  projects: Project[];
};

export default function Teaser({ title, subtitle, projects }: TeaserProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const isPlay = useRef(true);
  const [radius, setRadius] = useState(0);
  const [tilt, setTilt] = useState(2);

  function mouseenter() {
    if (isPlay.current === null) return;
    isPlay.current = false;
  }

  function mouseleave() {
    if (isPlay.current === null) return;
    isPlay.current = true;
  }
  /**
   * calculate new radius so Moon newer goes out of box
   */
  const windowResponsive = () => {
    if (
      !wrapperRef ||
      !wrapperRef.current ||
      !canvasRef ||
      !canvasRef.current
    ) {
      return;
    }
    const box = wrapperRef.current.getBoundingClientRect();
    const diagonal = box.width / box.height;
    const radius = Math.min(box.width, box.height) / (2 + diagonal);
    canvasRef.current.height = box.height;
    canvasRef.current.width = box.width;
    setRadius(radius);
    setTilt(diagonal);
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
        {projects &&
          projects.map((moon, index) => (
            <Moon
              key={index}
              radius={radius}
              diagonal={tilt}
              startPosition={300 - (index * 360) / (projects.length + 1)}
              title={moon.title}
              play={isPlay}
              path={"work/" + moon.path}
              alternativeLogo={moon.alternativeLogo}
              brandColor={moon.brandColor}
              onMouseEnter={mouseenter}
              onMouseLeave={mouseleave}
            />
          ))}
      </Globe>
    </Wrapper>
  );
}
