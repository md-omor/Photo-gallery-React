import React from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = ({ setselectedImage }) => {
  // Data come from Firestore
  const { docs } = useFirestore("images");
  console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div
            className="img-wrap"
            key={doc.id}
            onClick={() => setselectedImage(doc.url)}
          >
            <img src={doc.url} alt="Pic uoloaded" />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
