import axios from "axios";

const url =
  "https://suggestions.dadata.ru/suggestions/api/4_1/rs";
const token = "b0fe2ca10d3ba53095a0b2fcc86b4489173365ff";

export const $api = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Token " + token,
  },
});
