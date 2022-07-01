import React, { useEffect, useState } from "react";
import { fetchImage } from "../fetchers/fetch";
import { useDebounce } from "../hooks/useDebounce";
import { Grid, Pagination } from "@mui/material";
import { Container } from "@mui/system";

export function NasaImage() {
  const [image, setImage] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const debouncedSearch = useDebounce(search, 1000);

  useEffect(() => {
    fetchImage({ page: page, q: debouncedSearch }).then((data) => {
      setPage(page);
      setTotalPages(Math.min(100, Math.ceil(data.collection.metadata.total_hits / 100)));
      setImage(data.collection.items);
    });
  }, [debouncedSearch, page]);

  if (!image) return <div>Error</div>;
  function handlePageChange(page) {
    // window.scrollTo(0, 0);
    fetchImage(page, search);
  }

  return (
    <div>
      <input
        style={{ width: "150px", height: "29px" }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      

      <Container>
        <Grid container spacing={2}>
          {image.map((item) => (
            <Grid item xs={8 / 3}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  maxHeight: "150px",
                  width: "200px",
                  margin: "40px",
                }}
              >
                <img
                  src={item.links[0].href}
                  alt="/"
                  style={{
                    borderRadius: "10px",
                    maxHeight: "140px",
                    width: "200px",
                  }}
                />
                <p>{item.data[0].title}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
      <div style={{ display: "flex", margin: "20px auto" }}>
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
