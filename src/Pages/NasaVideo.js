import React from "react";

import { Grid, Pagination, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { useState, useEffect } from "react";
import { fetchVideo } from "../fetchers/fetch";
import { VideoPreview } from "../components/VideoPreview";
import { useDebounce } from "../hooks/useDebounce";

export function NasaVideo() {
  const [video, setVideo] = useState([]);
  const [open, setOpen] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const debouncedSearch = useDebounce(search, 1000);

  useEffect(() => {
    fetchVideo({ page: page, q: debouncedSearch }).then((data) => {
      setPage(page);
      setTotalPages(
        Math.min(100, Math.ceil(data.collection.metadata.total_hits / 100))
      );
      setVideo(data.collection.items);
    });
  }, [debouncedSearch, page]);

  function handlePageChange(page) {
    // window.scrollTo(0, 0);
    fetchVideo(page, search);
  }
  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <form style={{ textAlign: "center" }}>
        <TextField
          id="outlined-basic"
          label="Search for a video"
          variant="outlined"
          focused
          color="secondary"
          sx={{ m: 1, width: "55ch", input: { color: "white" } }}
          value={search}
          onChange={handleSearch}
        />
      </form>
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
                  color: "white",
                  wordWrap: "break-word",
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
      <div
        style={{
          display: "flex",
          margin: "100px auto",
          width: "348px",
          backgroundColor: "rgba(255 255 255 / 0.7)",
          borderRadius: "10px",
        }}
      >
        <Pagination
          style={{ margin: "0 auto" }}
          count={totalPages}
          page={page}
          onChange={(event, page) => {
            setPage(page);
            handlePageChange(page);
          }}
          variant="outlined"
          shape="rounded"
          color="secondary"
        />
      </div>
    </div>
  );
}
