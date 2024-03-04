import './RatingStars.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RatingStars = ({ratingScore}) => {
  
   const tabChoice = [1, 2, 3, 4, 5];

   return (
     <>
       {
        tabChoice.map((value) => (
          <span key={value} >
            <FontAwesomeIcon
              icon={faStar}
              size="sm"
              style={{ color: value <= ratingScore ? "#FDEB6A" : "#9999A3" }}
            />
          </span>
        ))
       }
     </>
   );
 };
 
 export default RatingStars;
 