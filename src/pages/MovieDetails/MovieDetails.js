import { useState, useEffect, Suspense } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { BackButton } from './MovieDetails.styled';
import { getMovieDetails } from 'components/API/API_themoviedb';
import { MovieInfo } from '../../components/MovieInfo/MovieInfo';

const MovieDetails = () => {
    const [movieData, setMovieData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();
    const location = useLocation();

    useEffect(() => {
        async function fetchMovie() {
            try {
                setIsLoading(true);
                const result = await getMovieDetails(movieId);
                setMovieData(result);
            } catch (error) {
                console.log(error);
                return alert(`Sorry, please try again`);
            } finally {
                setIsLoading(false);
            }
        }
        fetchMovie();
    }, [movieId]);
    return (
        <div>
            <BackButton to={location.state?.from ?? '/'}>
                <BiArrowBack />
                Go back
            </BackButton>
            {isLoading && <div>...Loading</div>}
            {movieData && <MovieInfo data={movieData} />}
            <Suspense fallback={<div>...Loading</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default MovieDetails;
