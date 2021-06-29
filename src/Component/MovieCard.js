import { Rate } from "antd";
import "antd/dist/antd.css";

export const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <img src={movie.posterUrl} alt={movie.title}></img>
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <Rate value={movie.rate} style={{ fontSize: 25 }} disabled />
      </div>
      <div>
        <h2>Description :</h2>
        <p>{movie.description}</p>
      </div>
    </div>
  );
};
