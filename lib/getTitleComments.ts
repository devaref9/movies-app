import axios from "axios";

export default async function getTitleComments(titleId: string) {
  const options = {
    method: "GET",
    url: `http://localhost:3000/api/titles/comments/${titleId}`,
  };

  try {
    const response = await axios.request(options);
    const data = await response.data;
    const comments = data.title.comments.sort(
      (a: any, b: any) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
    );

    return comments as {
      id: string;
      text: string;
      createdAt: Date;
    }[];
  } catch (error) {
    console.error(error);
  }
}
