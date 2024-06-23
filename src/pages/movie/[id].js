import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { BASE_URL, API_KEY, IMAGE_BASE_URL } from "@/library";
import VideoTrailer from "@/components/VideoTrailer";

export default function Movie() {

  const router = useRouter();
  const [id, setId] = useState(router.query.id);
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(BASE_URL + `/movie/${id}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data at movie page ", data);
        setMovie(data);
      });
  }, [id]);

  return (
    <Container className="mt-5 d-flex ">
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={
              movie.backdrop_path
                ? IMAGE_BASE_URL + movie.backdrop_path
                : "https://returntofreedom.org/store/wp-content/uploads/default-placeholder.png"
            }
          />
        </Card>
      </div>
      <div style={{ marginLeft: "30px" }}>
        <h1>{movie.title ? movie.title : "Card title"}</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        {/* <Button variant="primary">Watch video</Button> */}
        <VideoTrailer />
      </div>
    </Container>
  );
}
