import React from 'react';
import RatingStars from '../ui/RatingStars/RatingStars';

interface reviewCardProps  { 
    username: string,
    rating: number,
    commentText: string,
    createdAt: string,
}
const ReviewCard = ({
    username,
    rating,
    commentText,
    createdAt
} : reviewCardProps ) => {
  return (
    <div className="reviewItem">
    <div className="top">
        <div className="clientImage">
            <span>{username}</span>
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