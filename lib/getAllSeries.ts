import { TitleType } from "@/types";
import axios from "axios";

export default async function getAllSeries(params: object) {
  const options = {
    method: "GET",
    url:  process.env.BASE_URL,
    params: {
      ...params,
      limit: "18",
      titleType: "tvSeries",
      info: "base_info",
    },
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": process.env.API_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    const results  : TitleType[] = await response.data.results;
    return results;
  } catch (error) {
    console.error(error);
  }
}
