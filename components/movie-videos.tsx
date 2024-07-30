import { API_URL } from "../app/(home)/page";

async function getMovieVideos(id: string) {
  console.log("getMovieVideos starts", new Date());
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(API_URL + "/" + id + "/videos");
  // return await response.json();
  throw new Error("getMovieVideos failed");
}

export default async function MovieVideos(props: { id: string }) {
  const videos = await getMovieVideos(props.id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
