import { useEffect, useState } from "react";
import { projectStorage } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setprogress] = useState(0);
  const [error, seterror] = useState(null);
  const [url, seturl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytestTransferred / snap.totalBytes) * 100;
        setprogress(percentage);
      },
      (err) => {
        seterror(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        seturl(url);
      }
    );
  }, [file]);
  return { progress, error, url };
};

export default useStorage;
