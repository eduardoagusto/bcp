"use client"
import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
const Teste = () => {
    const constraintsRef = useRef(null);

    return (
        <div className="overflow-hidden fixed top-0">
            <motion.div className=" w-screen h-screen flex place-content-center place-items-center overflow-hidden bg-transparent" ref={constraintsRef}>
                <motion.div className="w-[150px] h-[150px] rounded-full bg-[#00ea7500] backdrop-blur-[2px] backdrop-invert flex items-center justify-center
                " drag dragConstraints={constraintsRef}>
                </motion.div>
            </motion.div>
        </div> 
    );
}

export default Teste;