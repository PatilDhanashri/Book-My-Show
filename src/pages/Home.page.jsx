import React from "react";

//components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import Premier from "../components/Premier/Premier.components";
//congif
import TempImages from "../Config/TempPoster.config";
const Homepage=()=>{

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
                <Premier/>
                </div>
        </div>
        </div>
       </>
         
    );
        
};
export default Homepage;