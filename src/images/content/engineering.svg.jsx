import { motion } from "framer-motion";
import * as React from "react";

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 238.12 185.21">
    <g strokeWidth=".94" strokeMiterlimit="4.04" fill="none">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={{
          pathLength: {
            repeat: Infinity,
            duration: 40,
            ease: "linear",
            times: [0, 0.025, 0.75, 0.76],
          },
        }}
        d="M44.84 31.5h61.76"
        stroke="#15ff9d"
        strokeWidth="2.65"
      />
      <motion.path
        d="M44.84 36.5h35.6"
        stroke="#15ff9d"
        strokeWidth="2.65"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={{
          pathLength: {
            repeat: Infinity,
            duration: 40,
            ease: "linear",
            times: [0.025, 0.05, 0.74, 0.75],
          },
        }}
      />
      <motion.path
        d="M57.3 41.5h24.24"
        stroke="#15ff9d"
        strokeWidth="2.65"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={{
          pathLength: {
            repeat: Infinity,
            duration: 40,
            ease: "linear",
            times: [0.05, 0.075, 0.73, 0.74],
          },
        }}
      />
      <motion.path
        d="M68.88 46.5h34.23"
        stroke="#15ff9d"
        strokeWidth="2.65"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={{
          pathLength: {
            repeat: Infinity,
            duration: 40,
            ease: "linear",
            times: [0.075, 0.1, 0.72, 0.73],
          },
        }}
      />
      <motion.path
        d="M68.88 51.5h22.88"
        stroke="#15ff9d"
        strokeWidth="2.65"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={{
          pathLength: {
            repeat: Infinity,
            duration: 40,
            ease: "linear",
            times: [0.1, 0.125, 0.71, 0.72],
          },
        }}
      />
      <motion.path
        d="m57.3 56.5h4.1"
        stroke="#15ff9d"
        strokeWidth="2.65"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={{
          pathLength: {
            repeat: Infinity,
            duration: 40,
            ease: "linear",
            times: [0.125, 0.1375, 0.71, 0.72],
          },
        }}
      />
      <motion.path
        d="M45 61.5h4.9"
        stroke="#15ff9d"
        strokeWidth="2.65"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={{
          pathLength: {
            repeat: Infinity,
            duration: 40,
            ease: "linear",
            times: [0.1375, 0.15, 0.7, 0.71],
          },
        }}
      />

      <path
        d="M31.6 13.46c-4.7 0-5.56.4-5.56 4.05v123s120.2.27 177.66.27c4.86 0 7.15-1.97 7.15-6.85V17.5c0-2.45-2.02-4.04-4.67-4.04z"
        stroke="#343434"
        strokeWidth="1.32"
      />
      <path d="M25.38 123.78h184.65" stroke="#343434" strokeWidth=".66" />
      <path
        d="M100.28 140.23c0 15.16 1.9 19.63-10.12 26.57h57.06c-12.06-6.96-10.25-9.9-10.25-26.57"
        stroke="#343434"
        strokeWidth=".66"
        strokeLinejoin="round"
      />
      <motion.path
        d="M117.92 18.63v95.28"
        stroke="#343434"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          opacity: {
            repeat: Infinity,
            duration: 40,
            ease: "linear",
            times: [0.15, 0.175, 0.675, 0.7],
          },
        }}
      />
    </g>
    <g strokeWidth="1.32" strokeMiterlimit="4.04">
      <path
        d="M37.2 134.94H6.78l2.64 42.33h25.14z"
        fill="#fff"
        stroke="#343434"
      />
      <path
        d="M37.2 146.84l10.54 1.22c4.02 15.98-1.46 20.1-12.08 23.78"
        fill="none"
        stroke="#343434"
        strokeWidth=".66"
      />
      <motion.path
        initial={{ pathLength: 0, pathOffset: 0 }}
        animate={{ pathLength: [0, 1], pathOffset: [0, 1] }}
        transition={{
          pathLength: {
            repeat: Infinity,
            duration: 5,
            repeatDelay: 1,
            ease: "linear",
          },
          pathOffset: { repeat: Infinity, duration: 6, ease: "linear" },
        }}
        d="M20.27 127.8c31.18-17.74-14.55-19.85 0-51.6"
        fill="transparent"
        stroke="#13ff9d"
        stroke-dasharray="10.58 1.32"
      />
    </g>
    <path
      d="M174.77 167s1.2-28.4-49.7-4.28"
      fill="none"
      stroke="#13ff9d"
      strokeWidth=".66"
      strokeLinejoin="bevel"
      strokeMiterlimit="4.04"
      strokeDashoffset="50"
    />
    <g strokeWidth="1.32" strokeMiterlimit="4.04">
      <path
        d="M175.2 167s-1.2-28.4 49.7-4.28"
        fill="none"
        stroke="#13ff9d"
        strokeWidth=".66"
        strokeLinejoin="bevel"
        strokeDashoffset="50"
      />
      <path
        d="M227.7 170.66s-49.1-18.52-52.33-3.66c0 .07-.65 0-.65 0-1.42-14.86-52.36 3.9-52.36 3.9v7.8H227.7z"
        fill="#fff"
        stroke="#343434"
        strokeLinejoin="round"
        strokeDashoffset="50"
      />
      <motion.path
        d="M175.02 167v8.36"
        stroke="#343434"
        strokeWidth=".66"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={{
          pathLength: {
            repeat: Infinity,
            duration: 40,
            ease: "linear",
            times: [0.175, 0.2, 0.78, 0.8],
          },
        }}
      />
      <motion.path
        d="M25.06 86c12.1-19.32-9.56-8.85 0-34.4"
        animate={{ pathLength: [0, 1], pathOffset: [0, 1] }}
        transition={{
          pathLength: {
            repeat: Infinity,
            duration: 5,
            repeatDelay: 1,
            delay: 1,
          },
          pathOffset: { repeat: Infinity, duration: 6, delay: 1 },
        }}
        fill="transparent"
        stroke="#14ff9d"
        strokeLinejoin="bevel"
        stroke-dasharray="10.58 1.32"
      />
    </g>
    <motion.path
      d="M135.2 31.5h33.07"
      stroke="#14ff9d"
      strokeWidth="2.65"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1, 1, 0] }}
      transition={{
        pathLength: {
          repeat: Infinity,
          duration: 40,
          ease: "linear",
          times: [0.2, 0.225, 0.7, 0.7],
        },
      }}
    />
    <motion.path
      d="M147.1 36.5h13.24"
      stroke="#14ff9d"
      strokeWidth="2.65"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1, 1, 0] }}
      transition={{
        pathLength: {
          repeat: Infinity,
          duration: 40,
          ease: "linear",
          times: [0.225, 0.25, 0.7, 0.7],
        },
      }}
    />
    <motion.path
      d="M147.1 41.5h19.86"
      stroke="#14ff9d"
      strokeWidth="2.65"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1, 1, 0] }}
      transition={{
        pathLength: {
          repeat: Infinity,
          duration: 40,
          ease: "linear",
          times: [0.25, 0.275, 0.7, 0.7],
        },
      }}
    />
    <motion.path
      d="M147.1 46.5h9.27"
      stroke="#14ff9d"
      strokeWidth="2.65"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1, 1, 0] }}
      transition={{
        pathLength: {
          repeat: Infinity,
          duration: 40,
          ease: "linear",
          times: [0.275, 0.3, 0.7, 0.7],
        },
      }}
    />
    <motion.path
      d="M159 51.5h31.76"
      stroke="#14ff9d"
      strokeWidth="2.65"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1, 1, 0] }}
      transition={{
        pathLength: {
          repeat: Infinity,
          duration: 40,
          ease: "linear",
          times: [0.3, 0.325, 0.7, 0.7],
        },
      }}
    />
    <motion.path
      d="M159 56.5h25.15"
      stroke="#14ff9d"
      strokeWidth="2.65"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1, 1, 0] }}
      transition={{
        pathLength: {
          repeat: Infinity,
          duration: 40,
          ease: "linear",
          times: [0.325, 0.35, 0.7, 0.7],
        },
      }}
    />
    <motion.path
      d="M159 61.5h9.27"
      stroke="#14ff9d"
      strokeWidth="2.65"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1, 1, 0] }}
      transition={{
        pathLength: {
          repeat: Infinity,
          duration: 40,
          ease: "linear",
          times: [0.35, 0.375, 0.7, 0.7],
        },
      }}
    />
    <motion.path
      d="M159 66.5h29.12"
      stroke="#14ff9d"
      strokeWidth="2.65"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1, 1, 0] }}
      transition={{
        pathLength: {
          repeat: Infinity,
          duration: 40,
          ease: "linear",
          times: [0.375, 0.4, 0.7, 0.7],
        },
      }}
    />
    <motion.path
      d="M147.1 71.5h3.98"
      stroke="#14ff9d"
      strokeWidth="2.65"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1, 1, 0] }}
      transition={{
        pathLength: {
          repeat: Infinity,
          duration: 40,
          ease: "linear",
          times: [0.4, 0.425, 0.7, 0.7],
        },
      }}
    />
    <motion.path
      d="M147.1 76.5h31.76"
      stroke="#14ff9d"
      strokeWidth="2.65"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1, 1, 0] }}
      transition={{
        pathLength: {
          repeat: Infinity,
          duration: 40,
          ease: "linear",
          times: [0.425, 0.45, 0.7, 0.7],
        },
      }}
    />
    <motion.path
      d="M147.1 81.5h6.62"
      stroke="#14ff9d"
      strokeWidth="2.65"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1, 1, 0] }}
      transition={{
        pathLength: {
          repeat: Infinity,
          duration: 40,
          ease: "linear",
          times: [0.45, 0.475, 0.7, 0.7],
        },
      }}
    />
    <motion.path
      d="M135.2 86.5h3.97"
      stroke="#14ff9d"
      strokeWidth="2.65"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1, 1, 0] }}
      transition={{
        pathLength: {
          repeat: Infinity,
          duration: 40,
          ease: "linear",
          times: [0.475, 0.5, 0.7, 0.7],
        },
      }}
    />
  </svg>
);

export default SvgComponent;
