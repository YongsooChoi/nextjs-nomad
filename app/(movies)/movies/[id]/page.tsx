import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface MovieDetailProps {
  params: {
    id: string;
  };
}

// async function getMovieDetails(id: string) {
//   console.log("getMovieDetails starts", new Date());
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const response = await fetch(API_URL + "/" + id);
//   return await response.json();
// }

// async function getMovieVideos(id: string) {
//   console.log("getMovieVideos starts", new Date());
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const response = await fetch(API_URL + "/" + id);
//   return await response.json();
// }

export default async function MovieDetail(props: MovieDetailProps) {
  const {
    params: { id },
  } = props;

  // const details = await getMovieDetails(id);
  // console.log("MovieDetail : details:", details);
  // const videos = await getMovieVideos(id);
  // console.log("MovieDetail : videos:", videos);

  // console.log("====== start ======");
  // const [details, videos] = await Promise.all([
  //   getMovieDetails(id),
  //   getMovieVideos(id),
  // ]);
  // console.log("======  end  ======");
  // console.log("MovieDetail : details, videos:", details, videos);

  return (
    <>
      {/* <h1>{details?.title}</h1> */}
      <div>
        <Suspense fallback={<h1>Loading movie info</h1>}>
          <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading movie videos</h1>}>
          <MovieVideos id={id} />
        </Suspense>
      </div>
    </>
  );
}
