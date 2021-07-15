import React from "react";
import HeroSlider from "react-slick";

//components
import {NextArrow,PrevArrow} from "./Arrows.Componants";


// // Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


const  HeroCarousal   = ()=>{

    const settingsLG={
      arrows:true,
      autplay:true,
      centerMode:true,
      centerPadding:"300px",
      slidesToSho :1,
      infinite: true,
      slidesToScroll: 1,
      nextArrow:<NextArrow/>,
      prevArrow:<PrevArrow/>,
  };
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
    
      };

      const images =[
            "https://images.unsplash.com/photo-1515041219749-89347f83291a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
            "https://images.unsplash.com/photo-1623432532623-f8f1347d954c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            "https://images.unsplash.com/photo-1605217613423-0a61bd725c8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
            "https://images.unsplash.com/photo-1626042060264-e23ecaa9ddbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=336&q=80",
            "https://images.unsplash.com/photo-1626074961596-cab914d9392e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=664&q=80"
      ];
      
      return (
        <> 
          
          <div className="lg:hidden">
          <HeroSlider {...settings}>
            {images.map((image) => (
              <div className="w-full h-56 md:h-80 py-3">
                <img src={image} alt="testing" className="w-full h-full rounded-md" />
              </div>
            ))}
          </HeroSlider>
          </div>

          <div className="hidden lg:block">
          <HeroSlider {...settingsLG}>
            {images.map((image) => (
              <div className="w-full h-96 px-2 py-3">
                <img src={image} alt="testing" className="w-full h-full rounded-md" />
              </div>
            ))}
          </HeroSlider>
          </div>
        </>
      );
    };
export default  HeroCarousal ;