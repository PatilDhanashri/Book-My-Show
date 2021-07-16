import React from 'react';
//components
//slider
import Slider from "react-slick";

import Poster from "../../Poster/poster.component";
//Configs
import Postercarousalsettins from "../../Config/PosterCarousel.config";
export const PosterSlider = (props) => {
    return (
        <>
          <div className="flex flex-col items-start my-2">
            <h3
            className={` text-2xl font-bold ${
                props.isDark ? "text-white" : "text-gray-800" }`}>
            {props.title}</h3>

            <p
            className={` text-sm ${
                props.isDark ? "text-white" : "text-gray-800"}`}>
            {props.Subtitle}</p>
       </div>

      <Slider {...Postercarousalsettins}>
        {props.images.map((image) => (
          <Poster {...image} isDark={props.isDark}/>
        ))}
      </Slider>  
        </>
    )
}
export default PosterSlider;
