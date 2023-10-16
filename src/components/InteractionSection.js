"use client"
import React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

const LazySection = () => {
  const constraintsRef = useRef(null);

  return (
    <div className="overflow-hidden top-0">
        <motion.div className=" w-screen h-screen grid grid-cols-2 grid-rows-2 place-content-center place-items-center overflow-hidden bg-transparent gap-5" ref={constraintsRef}>
            <motion.div className="w-[400px] h-[250px] rounded-2xl bg-[#00ea7500] backdrop-blur-[2px] backdrop-invert flex items-center justify-center
            " drag dragConstraints={constraintsRef}  dragTransition={{ bounceStiffness: 50, bounceDamping: 1000 }}>
            </motion.div>
            <motion.div className="w-[400px] h-[250px] rounded-2xl bg-[#00ea7500] backdrop-blur-[2px] backdrop-invert flex items-center justify-center
            " drag dragConstraints={constraintsRef}  dragTransition={{ bounceStiffness: 50, bounceDamping: 1000 }}>
            </motion.div>
            <motion.div className="w-[400px] h-[250px] rounded-2xl bg-[#00ea7500] backdrop-blur-[2px] backdrop-invert flex items-center justify-center
            " drag dragConstraints={constraintsRef}  dragTransition={{ bounceStiffness: 50, bounceDamping: 1000 }}>
            </motion.div>
            <motion.div className="w-[400px] h-[250px] rounded-2xl bg-[#00ea7500] backdrop-blur-[2px] backdrop-invert flex items-center justify-center
            " drag dragConstraints={constraintsRef}  dragTransition={{ bounceStiffness: 50, bounceDamping: 1000 }}>
            </motion.div>
        </motion.div>
    </div> 
  );
};

export default LazySection;