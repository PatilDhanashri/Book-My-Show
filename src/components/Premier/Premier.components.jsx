import React from "react";
import Slider from "react-slick";

// components
import Poster from "../../Poster/poster.component";
import PremierImages from "../../Config/TempPoster.config";
//configs
import PosterCarousalsettins from "../../Config/PosterCarousel.config";
export const Premier = () => {
  
  return (
    <>
    <div className="flex flex-col items-start">
      <h3 className="text-white text-xl font-bold">Premieres</h3>
      <p  className="text-white text-sm ">Brand new relase every friday</p>
    </div>

      <Slider {...PosterCarousalsettins}>
        {PremierImages.map((image) => (
          <Poster {...image} isDark/>
        ))}
      </Slider>
    </>
  );
};

export default Premier;