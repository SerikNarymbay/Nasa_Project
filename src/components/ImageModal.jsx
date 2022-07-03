import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  height: "400px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  overflow: "auto",
};

export default function ImageModal({ nasaPicture, title, description }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div style={{ backgroundColor: "#555555", borderRadius: "6px" }}>
        <img
          src={nasaPicture}
          alt="d"
          onClick={handleOpen}
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "6px",
            objectFit: "cover",
            objectPosition: "center center",
            boxSizing: "border-box",
          }}
        />
        <div style={{ padding: "5px" }}>{title}</div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            src={nasaPicture}
            alt="dd"
            style={{
              width: "300px",
              height: "200px",
              borderRadius: "6px",
              objectFit: "contain",
              objectPosition: "center center",
              boxSizing: "border-box",
            }}
          />
          <div>
            <h1 className="Title_Modal">{title}</h1>
            <p className="description_Modal">{description}</p>
          </div>
        </Box>
      </Modal>
    </>
  );
}
