import React  from 'react'
import './MoviesCard.css'
import '../SearchMovie/Rate'
import Rate from '../SearchMovie/Rate'
function MoviesCard({el :{rating,image,Name,story}}) {
  
  return (
    <div className="all">
    {/* Rating */}
    <div className="Rating"> <h3>{rating} </h3>
   <div className="najma"> <p><Rate rating={rating}/></p></div>
    </div>
    {/* img */}
   <div className="imgg">  <img src={image}/> </div> 
   {/* Name */}
    <div className="name"><h5>{Name}</h5></div>
   
    <div className="storyy"> 
    <h5>Storie:</h5><p>{story}</p>  
    </div>
    
    </div>
  );
}


export default MoviesCard;
