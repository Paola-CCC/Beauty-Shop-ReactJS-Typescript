import React from 'react';
import RatingStars from '../ui/RatingStars/RatingStars';

interface reviewCardProps  { 
    pseudo: string,
    rating: number | undefined,
    commentText: string | undefined,
    createdAt: string | undefined,
}
const ReviewCard = ({
    pseudo,
    rating,
    commentText,
    createdAt
} : reviewCardProps ) => {
  return (
    <div className="reviewItem">
    <div className="top">
        <div className="clientImage">
            <span>{pseudo}</span>
        </div>
        <ul>
            <RatingStars ratingScore={rating}/>
        </ul>
    </div>
    <article>
        <p className="review">
        {commentText}
        </p>
        <small>{createdAt} </small>
    </article>
</div>
  )
}

export default ReviewCard ;