import React from "react";

import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useState, useEffect } from "react";
import { fetchVideo } from "../fetchers/fetch";
import { VideoPreview } from "./VideoPreview";

export function NasaVideo() {
  const [video, setVideo] = useState([]);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    fetchVideo().then((data) => setVideo(data.collection.items));
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {video.map((item) => (
          <Grid item xs={8 / 3} key={item.href}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                maxHeight: "150px",
                width: "200px",
                margin: "40px",
              }}
            >
              <VideoPreview
                video={item}
                setOpen={setOpen}
                open={item.href === open}
              />
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
