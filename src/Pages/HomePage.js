import React, { useEffect, useState } from "react";
import { fetchImage } from "../fetchers/fetch";
import { useDebounce } from "../hooks/useDebounce";
import { Grid, Pagination, TextField } from "@mui/material";
import { Container } from "@mui/system";

import ImageModal from "../components/ImageModal";

export function HomePage() {
  const [image, setImage] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const debouncedSearch = useDebounce(search, 1000);

  useEffect(() => {
    fetchImage({ page: page, q: debouncedSearch }).then((data) => {
      setPage(page);
      setTotalPages(
        Math.min(100, Math.ceil(data.collection.metadata.total_hits / 100))
      );
      setImage(data.collection.items);
    });
  }, [debouncedSearch, page]);

  if (!image) return <div>Error</div>;
  function handlePageChange(page) {
    // window.scrollTo(0, 0);
    fetchImage(page, search);
  }
  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <div style={{ textAlign: "center", color: "white" }}>
        <h1>Hello, earthlings!</h1>
        <h3>
          Here you can find photos our planet, the other planets and galaxies
          too!
        </h3>
      </div>
      <form style={{ textAlign: "center" }}>
        <TextField
          id="outlined-basic"
          label="Search for an image"
          variant="outlined"
          focused
          color="secondary"
          sx={{
            m: 1,
            width: "55ch",
            input: { color: "white" },
          }}
          value={search}
          onChange={handleSearch}
        />
      </form>
      <Container>
        <Grid container spacing={4}>
          {image.map((item) => (
            <Grid item xs={8 / 3}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  maxHeight: "150px",
                  width: "200px",
                  margin: "40px",
                  color: "white",
                }}
              >
                <ImageModal
                  key={item.data[0].title}
                  nasaPicture={item.links[0].href}
                  title={item.data[0].title}
                  description={item.data[0].description}
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
