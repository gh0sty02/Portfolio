import { DURATIONS, easing } from "config/animations";

export const variants = {
  normal: {
    opacity: 0.85,
  },
  hover: {
    scale: 1.05,
    opacity: 1,
    borderRadius: "0",
    transition: {
      duration: DURATIONS.Fast,
      ease: "backOut",
    },
  },
  tap: {
    scale: 0.85,
    opacity: 1,
    transition: {
      duration: DURATIONS.Fast,
      ease: easing,
    },
  },
};
