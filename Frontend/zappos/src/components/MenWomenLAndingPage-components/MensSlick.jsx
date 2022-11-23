import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './App.css';
import './mensSlick.css';

const MensSlick = () => {
    const settings = {
      dots: true,
    //   autoplay: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 6
    };
    return (
      <div className="container" style={{cursor:"pointer"}}>
        <h1 style={{marginTop:"5px",fontWeight:"bolder",textTransform:"uppercase",fontSize:"30px"}}>Our Product</h1>
        
        <Slider {...settings}>
      
        <div   className="card box" style={{width: "13rem",cursor:"pointer"}}>
            <img style={{height: "18rem"}}  src="https://m.media-amazon.com/images/I/61hjDKNSSYL._AC_SR255,340_.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h2 className="card-title" style={{textAlign:"center"}}>CeCe</h2>
              <h2>Model Tee Blend Racer T-Shirt</h2>
              <h2 className="card-title" >$102.38</h2>
            </div>
           </div>
        <div   className="card box" style={{width: "13rem",cursor:"pointer"}}>
            <img style={{height: "18rem"}}  src="https://m.media-amazon.com/images/I/71OL+zOndQL._AC_SR255,340_.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h2 className="card-title" style={{textAlign:"center"}}>Nic+Zoe</h2>
              <h2>Short sleves Round Neck Tees</h2>
              <h2 className="card-title" >$200.05</h2>
            </div>
           </div>
        <div   className="card box" style={{width: "13rem",cursor:"pointer"}}>
            <img style={{height: "18rem"}}  src="https://m.media-amazon.com/images/I/71er1W7Df5L._AC_SR255,340_.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h2 className="card-title" style={{textAlign:"center"}}>Henes</h2>
              <h2>Round Neck Plain White  T-Shirt</h2>
              <h2 className="card-title" >$120.22</h2>
            </div>
           </div>
        <div   className="card box" style={{width: "13rem",cursor:"pointer"}}>
            <img style={{height: "18rem"}}  src="https://m.media-amazon.com/images/I/71fAPkW49fL._AC_SR255,340_.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h2 className="card-title" style={{textAlign:"center"}}>Alternative</h2>
              <h2>Round Neck Plain Black  T-Shirt</h2>
              <h2 className="card-title" >$29.29</h2>
            </div>
           </div>
        <div   className="card box" style={{width: "13rem",cursor:"pointer"}}>
            <img style={{height: "18rem"}}  src="https://m.media-amazon.com/images/I/71QdUTlawTL._AC_SR255,340_.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h2 className="card-title" style={{textAlign:"center"}}>Armour</h2>
              <h2>Step Herm PopoVern In Layers With a color neck</h2>
              <h2 className="card-title" >$29.29</h2>
            </div>
           </div>
        <div   className="card box" style={{width: "13rem",cursor:"pointer"}}>
            <img style={{height: "18rem"}}  src="https://m.media-amazon.com/images/I/71QdUTlawTL._AC_SR255,340_.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h2 className="card-title" style={{textAlign:"center"}}>Madewell</h2>
              <h2>Color Neck Comfortable Cotton Mix T-Shirt</h2>
              <h2 className="card-title" >$89.09</h2>
            </div>
           </div>
        <div   className="card box" style={{width: "13rem",cursor:"pointer"}}>
            <img style={{height: "18rem"}}  src="https://m.media-amazon.com/images/I/61LD0gck1DL._AC_SR255,340_.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h2 className="card-title" style={{textAlign:"center"}}>Free People</h2>
              <h2>UA-Tech VNeck T-Shirt With A Good Fabric</h2>
              <h2 className="card-title" >$229.19</h2>
            </div>
           </div>
        <div   className="card box" style={{width: "13rem",cursor:"pointer"}}>
            <img style={{height: "18rem"}}  src="https://m.media-amazon.com/images/I/71YKqYLNA7L._AC_SR255,340_.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h2 className="card-title" style={{textAlign:"center"}}>AberCrombia &Fitch</h2>
              <h2>American Rino T-Shirt</h2>
              <h2 className="card-title" >$76.23</h2>
            </div>
           </div>
        <div   className="card box" style={{width: "13rem",cursor:"pointer"}}>
            <img style={{height: "18rem"}}  src="https://m.media-amazon.com/images/I/61SFAqf9EDL._AC_SR255,340_.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h2 className="card-title" style={{textAlign:"center"}}>Salty Crew@</h2>
              <h2>Fether Weight Cotton Shirt Casual Wear</h2>
              <h2 className="card-title" >$109.1</h2>
            </div>
           </div>
        <div   className="card box" style={{width: "13rem",cursor:"pointer"}}>
            <img style={{height: "18rem"}}  src="https://m.media-amazon.com/images/I/81ALpSfIiOL._AC_SR255,340_.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h2 className="card-title" style={{textAlign:"center"}}>Levies</h2>
              <h2>BoyFriend Shirt With Good Fitness</h2>
              <h2 className="card-title" >$76.23</h2>
            </div>
           </div>
        <div   className="card box" style={{width: "13rem",cursor:"pointer"}}>
            <img style={{height: "18rem"}}  src="https://m.media-amazon.com/images/I/81EFawko13L._AC_SR255,340_.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h2 className="card-title" style={{textAlign:"center"}}>Armour</h2>
              <h2>Marlie London Paris T-Shirt</h2>
              <h2 className="card-title" >$150.23</h2>
            </div>
           </div>

       
        
        </Slider>
      </div>
    );
  }



export default MensSlick;

