import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`
      )
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div>
          <h1>Detail</h1>
          <hr />
          <br />
          <img
            src={movie.large_cover_image}
            alt={movie.title}
          />
          <br />
          <h2>{movie.title_long}</h2>
          <p>{movie.description_full}</p>
          <p> - Rating : {movie.rating}</p>
          <p> - Genres : {movie.genres.join(' / ')}</p>
          <p>
            - More :{' '}
            <a
              href={movie.url}
              target='_blank'
              rel='noreferrer'
            >
              {movie.url}
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default Detail;
