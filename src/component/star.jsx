import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Star() {
    const [rating , setRating] = useState(null);

    return (
      <>
      {[...Array(5)].map((star , index) =>{
       const currentRate = index + 1;
       return (
        <label key={index}> 
          <input 
            type="radio" 
            name="rate"
            value={currentRate}
            onClick={() => setRating(currentRate)}
            style={{ display: 'none' }} 
          />
          <FaStar 
            size={30}
            color={currentRate <= rating ? "yellow" : "grey"} 
            onMouseEnter={() => setRating(currentRate)} 
            onMouseLeave={() => setRating(null)} 
          />
        </label>
      )})}
      </>
    );
}
