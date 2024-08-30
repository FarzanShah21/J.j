import React from 'react'
import "./Container2.css";
const Container2 = () => {
  return (
    <div className="image-container">
      <div className="right-large-image">
        <img src="public/images/con2.1l.webp" alt="Kameez Shalwar" />
        <div className="caption large-caption">
          <p>Kameez Shalwar</p>
          <a href="#">Shop Now</a>
        </div>
      </div>
      <div className="left-images">
        <div className="top-left-image">
          <img src="./images/conn2l.webp" alt="Kurta" />
          <div className="caption">
            <p>Kurta</p>
            <a href="#">Shop Now</a>
          </div>
        </div>
        <div className="bottom-left-image">
          <img src="./images/conr1.webp" alt="Waistcoat" />
          <div className="caption">
            <p>Waistcoat</p>
            <a href="#">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container2
