import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { moviesData } from "./movieData";
import "./description.css"

const Description = () => {
  const params = useParams();
  const navigate =useNavigate();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    setMovie(moviesData.find((movie) => movie.id === +params.id));
  }, [params.id]);

  return (
    <div className="desc-container">
    <Container className="desc-content">
      <Row>
        <Col sm={8} className="movie-description">
          {movie.description}
        </Col>
        <Col sm={4} className="movie-trailer">
          <iframe src={movie.trailer} title={movie.title} />
        </Col>
      </Row>
      <Button className="go-back-button" onClick={() => navigate(-1)}>Go Back</Button>
    </Container>
  </div>
  
  );
};

export default Description;
