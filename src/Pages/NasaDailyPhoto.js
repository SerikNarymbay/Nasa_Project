import React, { useEffect, useState } from "react";
import { fetchPhoto } from "../fetchers/fetch";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Container } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetchPhoto().then((data) => {
      setPhotoData(data);
    });
  }, []);

  if (!photoData) return <div />;

  return (
    <Container>
      <div>
        <Button
          style={{
            marginLeft: "150px",
            marginTop: "40px",
            color: "white",
            backgroundColor: "blue",
          }}
          onClick={handleOpen}
        >
          Info about
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Photo of the day
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 1 }}>
              This section shows an image and the information, this corresponds
              to today, every day the image is updated
            </Typography>
          </Box>
        </Modal>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "40px",
          color: "white",
        }}
        className="block"
      >
        <div>
          <h3>{photoData.date}</h3>
          <img
            src={photoData.url}
            alt={photoData.title}
            style={{
              width: "600px",
              objectFit: "cover",
              objectPosition: "center center",
              boxSizing: "border-box",
            }}
          />
        </div>
        <div style={{ width: "400px" }}>
          <h3>{photoData.title}</h3>
          <p>{photoData.explanation}</p>
        </div>
      </div>
    </Container>
  );
}
