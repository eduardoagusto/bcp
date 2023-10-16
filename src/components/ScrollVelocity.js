'use client'

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 1 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 5,
    stiffness: 5,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2045], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(0, -25, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 2500);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    if (velocityFactor.get() !== 0) {
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    }
  });
  
  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-wrap">
      <motion.div className="uppercase text-6xl md:text-9xl flex whitespace-nowrap flex-nowrap" style={{ x }}>
        <motion.span className="block mr-8 font-black text-[#00EA75]">{children} </motion.span>
        <motion.span className="block mr-8 font-black text-[#00EA75]">{children} </motion.span>
        <motion.span className="block mr-8 font-black text-[#00EA75]">{children} </motion.span>
        <motion.span className="block mr-8 font-black text-[#00EA75]">{children} </motion.span>
      </motion.div>
    </div>
  );
}

export default function TextScroll() {
  return (
    <section className="relative mb-20">
      <ParallaxText baseVelocity={1}>CELO DIGITAL SOLUTIONS </ParallaxText>
      <ParallaxText  baseVelocity={-1}>CELO DIGITAL SOLUTIONS</ParallaxText>
    </section>
  );
}