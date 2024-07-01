// FallingImage.js
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {Container} from "../../assets";

const FallingContainer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        y: 0,
        opacity: 1,
        transition: { duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="relative h-screen w-[1400px] ml-64 ">
      <motion.img
        src={Container}
        alt="Falling Container"
        initial={{ x: "-100vw", y: "-50vh", opacity: 0 ,duration:25}}
        animate={controls}
        className="absolute top-30 left-[-800px] w-full h-full object-contain"
      />
    </div>
  );
};

export default FallingContainer;
