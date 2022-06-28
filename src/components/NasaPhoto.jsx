import React, { useEffect, useState } from "react";
import { fetchPhoto } from "../fetchers/fetch";

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState("");

  useEffect(() => {
    fetchPhoto().then((data) => {
      setPhotoData(data);
    });
  }, []);

    if (!photoData) return <div />;

  return (
    <div>
      <img src={photoData.url} alt={photoData.title} />
      <p>{photoData.explanation}</p>
    </div>
  );
}
