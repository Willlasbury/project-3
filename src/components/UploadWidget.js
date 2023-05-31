import React from "react";
import { useEffect, useRef } from "react";

const UploadWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    console.log("cloudinaryRef:", cloudinaryRef);
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dlnloe77d",
        uploadPreset: "zoosknbg",
      },
      function(error, result) {
        console.log("result:", result);
      }
    );
  }, []);
  return <button onClick={() => widgetRef.current.open()}>Upload</button>;
};

export default UploadWidget;
