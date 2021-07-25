
import axios from "axios";
import React, { useState, useEffect } from "react";
//components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
//congif
//  import TempPoster from "../Config/TempPoster.config";

const Homepage = () => {

  const [popularMovies, setPopularMovies] = useState([]);
   const [topRatedMovies, setTopRatedMovies] = useState([]);
   const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setPopularMovies(getPopularMovies.data.results);
    };

    requestPopularMovies();
  }, []);
 console.log({popularMovies});

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated");
      setTopRatedMovies(getTopRatedMovies.data.results);
    };

    requestTopRatedMovies();
  }, []);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      setUpcomingMovies(getUpcomingMovies.data.results);
    };

    requestUpcomingMovies();
  }, []);


    return (
       <> 
        <div className="flex flex-col gap-10">
        <div className="container mx-auto px-4">
               <h1 className="text-2xl font-bold text-gray-800 my-3">
                    best of Enterainment 
                </h1>
                <EntertainmentCardSlider/>
        </div>
        <div className="bg-bms-800 py-12">
                <div className="container mx-auto px-4 flex flex-col gap-3">
                <div className="hidden  md:flex" >
                    <div >
                    <img 
                        src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                        alt="Premieres"
                        className="w-full h-full"/>
                    </div>
                </div>
                <PosterSlider 
                    images={popularMovies}
                    title="Premieres" 
                    Subtitle="Brand new relases every friday"
                    isDark
                />
                </div>
        </div>
        </div>

       <div className="containex mx-auto px-4 my-8">
         <PosterSlider 
                images={topRatedMovies} 
                title="Online Streaming events" 
                isDark={false}     
            />
       </div>

       <div className="containex mx-auto px-4 my-8">
         <PosterSlider 
                images={upcomingMovies} 
                title="Outdoor events" 
                isDark={false}     
            />
       </div>
         
       </> 
    );
        
};
export default Homepage;