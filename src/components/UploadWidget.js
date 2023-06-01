import React from "react";
import { useEffect, useRef } from "react";
import itemsAPI from "../utils/API/items";

const UploadWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    // console.log("cloudinaryRef:", cloudinaryRef);
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dlnloe77d",
        uploadPreset: "zoosknbg",
      },
      function(error, result) {
        if (result.event === "success") {
          console.log("result secure url?:", result.info.secure_url);
          //TODO: add post route here
          {
            itemsAPI.createItems(
              "test Title",
              "test category",
              10,
              result.info.secure_url,
              "Good Condition Test",
              false
            );
          }
        }
      }
    );
  }, []);
  return <button onClick={() => widgetRef.current.open()}>Upload</button>;
};

export default UploadWidget;
