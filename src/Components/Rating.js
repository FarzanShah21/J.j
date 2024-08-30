import React from 'react'

const Rating = (props) => {
    const {rating}=props
  return (
    <div className='rating'>
     {
        rating <=2 ? (
       <div>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       <i class="fa-solid fa-star"></i>
       </div>
        ):(   
          <div>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          </div>  

        ) 
     }
      
    </div>
  )
}

export default Rating
