import { TitleType } from "@/types";
import axios from "axios";

export default async function getSearchResults(
  keyword: string,
  limit: number | string
) {
  const options = {
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/search/keyword/${keyword}`,
    params: { limit: limit.toString(), info: "base_info" },
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    const results: TitleType[] = await response.data.results;
    const hasNext: boolean = await response.data.next;
    return { results: results, hasNext: hasNext };
  } catch (error) {
    console.error(error);
  }
}
