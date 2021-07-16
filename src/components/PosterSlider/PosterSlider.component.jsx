import React from 'react';
//components
import Poster from "../../Poster/poster.component";
//Configs
import Postercarousalsettins from "../../Config/PosterCarousel.config";
export const PosterSlider = (props) => {
    return (
        <>
          <div className="flex flex-col items-start">
      <h3 className="text-white text-xl font-bold">{props.title}</h3>
      <p  className="text-white text-sm ">{props.title}</p>
    </div>

      <Slider {...Postercarousalsettins}>
        {props.images.map((image) => (
          <Poster {...image} isDark/>
        ))}
      </Slider>  
        </>
    )
}
export default PosterSlider;
