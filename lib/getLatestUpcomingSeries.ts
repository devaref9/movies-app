import { TitleType } from "@/types";
import axios from "axios";

export default async function getLatestUpcomingSeries() {
  const options = {
    method: "GET",
    url: `${process.env.BASE_URL}/x/upcoming?titleType=tvSeries&limit=12&page=1`,
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": process.env.API_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    const results: TitleType[] = await response.data.results;
    return results;
  } catch (error) {
    console.error(error);
  }
}
