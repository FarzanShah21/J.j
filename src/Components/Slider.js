import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const data = [
    "./images/jslider1.webp",
     "./images/jslider2.webp",
     "./images/jslider3.webp",
     "./images/jslider3.webp"
   
];

const items= data.map((x,i)=>{
    return <img key={i} src={x} alt={'Slide ${i+1}'}
    className='img-fluid'/>
});


const Slider = () => {
  return (
    <div className="container-fluid">

    <AliceCarousel
        items={items}
        autoPlay
        infinite
        disableDotsControls
        disableButtonsControls
        autoPlayInterval={1000}
        
    />
    

      
    </div>
  )
}

export default Slider; 