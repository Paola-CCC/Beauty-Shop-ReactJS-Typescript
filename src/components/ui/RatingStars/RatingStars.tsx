import './RatingStars.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface RatingStarsProps {
  ratingScore: number | undefined
}


const RatingStars = ({ratingScore} : RatingStarsProps) => {
  
   const tabChoice = [1, 2, 3, 4, 5];

   return (
     <>
       { ratingScore !== undefined && tabChoice.map((value) => (
          <span key={value} >
            <FontAwesomeIcon
              icon={faStar}
              size="sm"
              style={{ color: (value <= ratingScore) ? "black" : "#9999A3" }}
            />
          </span>
        ))
       }
     </>
   );
 };
 
 export default RatingStars;
 