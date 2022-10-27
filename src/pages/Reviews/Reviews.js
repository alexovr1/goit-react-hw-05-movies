import { getMovieReviews } from 'components/API/API_themoviedb';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsItem, ReviewsList } from './Reviews.styled';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { movieId } = useParams();

    useEffect(() => {
        async function fetchReviews() {
            try {
                setIsLoading(true);
                const { results } = await getMovieReviews(movieId);
                setReviews(results);
            } catch (error) {
                console.log(error);
                return alert(`Sorry, please try again`);
            } finally {
                setIsLoading(false);
            }
        }
        fetchReviews();
    }, [movieId]);

    return (
        <div>
            {isLoading && <div>...is Loading</div>}
            {reviews.length > 0 ? (
                <ReviewsList>
                    {reviews.map(review => {
                        return (
                            <ReviewsItem key={review.id}>
                                <h3>{review.author}</h3>
                                <p>{review.content}</p>
                            </ReviewsItem>
                        );
                    })}
                </ReviewsList>
            ) : (
                <p>We don't have any reviews for this movie.</p>
            )}
        </div>
    );
};

export default Reviews;
