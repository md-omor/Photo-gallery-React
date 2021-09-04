import { motion } from "framer-motion";
import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setfile }) => {
  const { progress, url } = useStorage(file);

  // After upload photo url and progress bar remove
  useEffect(() => {
    if (url) {
      setfile(null);
    }
  }, [url, setfile]);
  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};

export default ProgressBar;
