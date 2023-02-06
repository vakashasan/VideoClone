import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50"
  },
  headers: {
    "X-RapidAPI-Key": "f942005802msh80cb9472b761032p130e44jsn441aa300baf7",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com"
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
