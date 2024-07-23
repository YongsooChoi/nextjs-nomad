interface MovieDetailProps {
  params: {
    id: string;
  };
}

export default function MovieDetail(props: MovieDetailProps) {
  console.log("MovieDetail : props:", props);
  const {
    params: { id },
  } = props;

  return <h1>Movie Details {props.params.id}</h1>;
}
