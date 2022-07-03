import React, { useState, useEffect } from "react";

export const VideoPreview = ({ video, open, setOpen }) => {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    if (open && video) {
      fetch(video.href)
        .then((res) => res.json())
        .then((links) => setLinks(links));
    }
  }, [open, video]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#555555",
        borderRadius: "6px",
        padding: "5px",
      }}
    >
      {!open || !links[0] ? (
        <img
          onClick={() => setOpen(video.href)}
          height="100%"
          width="100%"
          style={{ objectFit: "cover" }}
          src={video.links[0].href}
          alt={video.data[0].title}
        />
      ) : (
        <>
          <video
            src={links[0]}
            controls={true}
            autoPlay
            style={{ width: "100%", height: "100%" }}
          />
          <button
            onClick={() => {
              setOpen(null);
            }}
          >
            Close video
          </button>
        </>
      )}
      {open && !links[0] && <>Loading...</>}
      <p>{video.data[0].title}</p>
    </div>
  );
};
