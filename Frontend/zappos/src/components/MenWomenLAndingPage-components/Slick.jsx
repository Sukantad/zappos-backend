import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './App.css';
import './slick.css';

const Slick = () => {
    const settings = {
      dots: true,
    //   autoplay: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5
    };
    return (
      <div className="container">
        <Slider {...settings}>
        
        <div><img src="https://images.unsplash.com/photo-1617727553252-65863c156eb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJyYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Credit to Joshua Earle on Unsplash"/>
        <h1 style={{textAlign:"center",marginTop:"10px",fontWeight:"bolder",textTransform:"uppercase"}}>Red Bull</h1> 
        </div>

        
        <div><img src="https://images.unsplash.com/photo-1566657817181-c69e4a8eeb1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJyYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Credit to Joshua Earle on Unsplash"/>
         <h1 style={{textAlign:"center",marginTop:"10px",fontWeight:"bolder",textTransform:"uppercase"}}>Coco cola</h1> 

        </div>
        <div><img src="https://images.pexels.com/photos/12132371/pexels-photo-12132371.jpeg?auto=compress&cs=tinysrgb&w=600"/>
         <h1 style={{textAlign:"center",marginTop:"10px",fontWeight:"bolder",textTransform:"uppercase"}}>Patagonia</h1> 
        </div>

       

        <div><img src="https://images.unsplash.com/photo-1566657817181-c69e4a8eeb1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJyYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Credit to Joshua Earle on Unsplash"/>
         <h1 style={{textAlign:"center",marginTop:"10px",fontWeight:"bolder",textTransform:"uppercase"}}>Coco cola</h1> 
        </div>

        <div><img src="https://images.unsplash.com/photo-1563694983011-6f4d90358083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
         <h1 style={{textAlign:"center",marginTop:"10px",fontWeight:"bolder",textTransform:"uppercase"}}>Max</h1> 
        </div>

        <div><img src="https://img.freepik.com/free-psd/young-woman-wearing-mock-up-hoodie-with-long-sleeve_23-2149067866.jpg?size=338&ext=jpg&ga=GA1.2.1567854150.1665575402"/>
         <h1 style={{textAlign:"center",marginTop:"10px",fontWeight:"bolder",textTransform:"uppercase"}}>Carve life</h1> 
        </div>


        <div><img src="https://images.unsplash.com/photo-1495001258031-d1b407bc1776?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RocyUyMGJyYW5kJTIwcHVtYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
         <h1 style={{textAlign:"center",marginTop:"10px",fontWeight:"bolder",textTransform:"uppercase"}}>Good vibes</h1> 
        </div>

        <div><img src="https://images.pexels.com/photos/7778038/pexels-photo-7778038.jpeg?auto=compress&cs=tinysrgb&w=600"/>
         <h1 style={{textAlign:"center",marginTop:"10px",fontWeight:"bolder",textTransform:"uppercase"}}>Fashion</h1> 
        </div>

        <div><img src="https://img.freepik.com/free-psd/oval-textile-tags-mockup-front-view_1332-9970.jpg?size=338&ext=jpg&ga=GA1.2.1567854150.1665575402"/>
         <h1 style={{textAlign:"center",marginTop:"10px",fontWeight:"bolder",textTransform:"uppercase"}}>Deco</h1> 
        </div>

        <div><img src="https://img.freepik.com/free-psd/2-oz-tube-mockup_1332-5136.jpg?size=338&ext=jpg"/>
         <h1 style={{textAlign:"center",marginTop:"10px",fontWeight:"bolder",textTransform:"uppercase"}}>Ayurveda</h1> 
        </div>
       
        
        </Slider>
      </div>
    );
  }



export default Slick;

