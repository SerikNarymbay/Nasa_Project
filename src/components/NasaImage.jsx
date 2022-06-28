import React, { useEffect, useState } from "react";
import { fetchImage } from "../fetchers/fetch";
import { useDebounce } from "../hooks/useDebounce";

export function NasaImage() {
  const [image, setImage] = useState([]);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 1000);

  useEffect(() => {
    fetchImage({ page: 3, q: debouncedSearch }).then((data) => {
      setImage(data.collection.items);
    });
  }, [debouncedSearch]);

  if (!image) return <div />;
  console.log(image);
  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      {image.map((item) => (
        <>
          <img src={item.links[0].href} alt="/" width={"500px"} />
          <p>{item.data[0].title}</p>
        </>
      ))}
    </div>
  );
}
