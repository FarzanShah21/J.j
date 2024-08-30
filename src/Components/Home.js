import React from 'react'
import Slider from './Slider'
import Card from './Card'
import Loadmore from './Loadmore'
import Collection from './Collection'
import Footer from './Footer'
import Bottomcontent from './Bottomcontent'
import '../Styles.css'
import Container1 from './Container1'
import Footwear from './Footwear'
import Container2 from './Container2'
import Cosmtics from './Cosmtics'

const Home = () => {
  return (
    <div>
    <Slider/> 
    <Container1/>
    {/* <Container2/> */}
    <Footwear/>
    <Cosmtics/>

   
    <Loadmore/>
    <Collection/>
    <Card/>
    <Bottomcontent/>
    <Footer/>
    
    </div>
  )
}

export default Home
