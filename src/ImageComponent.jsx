import { MOVIES } from "./mocks/movies";
import "./imageComponent.css";

const ImageComponent = () => {
  return (
    <div className="img-box">
      {MOVIES.results.map((img) => (
        <img
          className="img-img"
          key={img.id}
          src={"https://image.tmdb.org/t/p/w500" + img.poster_path}
          alt={img.title}
        />
      ))}
    </div>
  );
};

export default ImageComponent;
