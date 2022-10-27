import PropTypes from 'prop-types';
import { InfoBox, MovieBox, AdditionalBox } from './MovieInfo.styled';
import { useParams, Link, useLocation } from 'react-router-dom';

export const MovieInfo = ({ data }) => {
    const location = useLocation();

    const { movieId } = useParams();
    const { poster_path, original_title, vote_average, overview, genres } = data;
    const genresNames = genres.map(genre => genre.name).join(` `);
    const posterUrl = `https://image.tmdb.org/t/p/w200${poster_path}`;
    const rating = vote_average.toFixed(1) * 10;

    return (
        <>
            <MovieBox>
                <img src={posterUrl} alt={original_title} style={{ maxWidth: 800 }} />
                <InfoBox>
                    <h2>{original_title}</h2>
                    <p>User Score: {rating}%</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <p>{genresNames}</p>
                </InfoBox>
            </MovieBox>
            <AdditionalBox>
                Additional information
                <ul>
                    <li>
                        <Link
                            to={`/movies/${movieId}/cast`}
                            state={{ from: location.state?.from ?? '/' }}
                        >
                            Cast
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`/movies/${movieId}/reviews`}
                            state={{ from: location.state?.from ?? '/' }}
                        >
                            Reviews
                        </Link>
                    </li>
                </ul>
            </AdditionalBox>
        </>
    );
};

MovieInfo.propTypes = {
    data: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        original_title: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        overview: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
            })
        ),
    }),
};
