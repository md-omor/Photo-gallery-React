import { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setfile] = useState(null);
  const [error, seterror] = useState(null);

  const types = ["image/png", "image/jpeg", "image/jpg"];
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    console.log(selected);
    if (selected && types.includes(selected.type)) {
      setfile(selected);
      seterror("");
    } else {
      setfile(null);
      seterror("Please select an image file (png, jpg or jpeg)");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>

      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="">{file.name}</div>}
        {file && <ProgressBar file={file} setfile={setfile} />}
      </div>
    </form>
  );
};

export default UploadForm;
