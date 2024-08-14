import React from "react";
import { Button, Card } from "react-bootstrap";
import "./movieCard.css";
import MovieRate from "../filterByRating/Rating";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="moviecard">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterUrl} className="imgcard" />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <hr />
          <MovieRate rateInput={movie.rate} isRating={true} />
          <br />
          <Link to={`/movie/${movie.id}`}>
            <Button>Description</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
