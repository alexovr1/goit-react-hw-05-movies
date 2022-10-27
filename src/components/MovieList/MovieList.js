import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { MoviesList } from './MovieList.styled';
export const MovieList = ({ moviesData }) => {
    const location = useLocation();

    return (
        <MoviesList>
            {moviesData.map(movie => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                        {movie.title || movie.name}
                    </Link>
                </li>
            ))}
        </MoviesList>
    );
};

MovieList.propTypes = {
    moviesData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        })
    ),
};