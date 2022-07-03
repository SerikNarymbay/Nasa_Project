import axios from "axios";

export function fetchPhoto() {
  return axios
    .get(
      `https://api.nasa.gov/planetary/apod?api_key=eIK9Y1aUGbXZvEn3xZvAEJuRoqGRtaBoKnYSDMLT`
    )
    .then((res) => res.data);
}

export function fetchImage({ page, q }) {
  return axios
    .get(`https://images-api.nasa.gov/search`, {
      params: { page, media_type: "image", q },
    })
    .then((res) => res.data);
}

export function fetchVideo({ page, q }) {
  return axios
    .get(`https://images-api.nasa.gov/search`, {
      params: { page, media_type: "video", q },
    })

    .then((res) => res.data);
}
