import { API_URL } from "../app/(home)/page";

async function getMovieInfo(id: string) {
  console.log("getMovieInfo starts", new Date());
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(API_URL + "/" + id);
  return await response.json();
}

export default async function MovieInfo(props: { id: string }) {
  const info = await getMovieInfo(props.id);
  return <h6>{JSON.stringify(info)}</h6>;
}
