"use client";

import React from "react";
import { useState } from "react";
import css from "./Tooltip.module.scss";
import { AnimatePresence, motion } from "framer-motion";

interface TooltipI {
  children: React.ReactNode;
  text: string;
}
const Tooltip = ({ children, text }: TooltipI) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div
      className={css.container}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <span className={css.tooltip}>{text}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
