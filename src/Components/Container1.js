import React from 'react'
import "./Container1.css"
const Container1 = () => {
  return (
    <div className="container py-5">
    <div className="left-image">
      <img src="./images/conl1.webp" alt="Unstitched" />
      <div className="caption">
        <p>Unstitched</p>
        <a href="#">Shop Now</a>
      </div>
    </div>
    <div className="right-images">
      <div className="right-image">
        <img src="./images/conr1.webp" alt="Kurti" />
        <div className="caption">
          <p>Kurti</p>
          <a href="#">Shop Now</a>
        </div>
      </div>
      <div className="right-image">
        <img src="./images/conr1.webp" alt="Stitched" />
        <div className="caption">
          <p>Stitched</p>
          <a href="#">Shop Now</a>
        </div>
      </div>
    </div>
  </div>
  

  )
}

export default Container1
