import React from "react";

const Modal = ({ selectedImage, setselectedImage }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setselectedImage(null);
    }
  };
  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedImage} alt="emlarged pic" />
    </div>
  );
};

export default Modal;
