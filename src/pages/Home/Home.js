import { useState, useEffect } from 'react';
import { getTrends } from '../../components/API/API_themoviedb';
import { MovieList } from 'components/MovieList/MovieList';
import { HomeTitle, HomeWrapper } from './Home.styled';

const Home = () => {
    const [moviesData, setMoviesData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getFilms() {
            try {
                setIsLoading(true);
                const { results } = await getTrends();
                setMoviesData(results);
            } catch (error) {
                console.log(error);
                // return alert(`Sorry, please try again`);
            } finally {
                setIsLoading(false);
            }
        }
        getFilms();
    }, []);

    return (
        <HomeWrapper>
            <HomeTitle>Trending today</HomeTitle>
            {isLoading && <div>...Loading</div>}
            {moviesData && <MovieList moviesData={moviesData} />}
        </HomeWrapper>
    );
};

export default Home;