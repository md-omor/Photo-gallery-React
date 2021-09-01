import React from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setfile }) => {
  const { progress, url } = useStorage(file);
  console.log(progress, url);

  return <div className="progress-bar">progress</div>;
};

export default ProgressBar;
