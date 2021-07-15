import React from "react";

//components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import Premier from "../components/Premier/Premier.components";
const Homepage=()=>{

    return (
       <> 
        <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 my-3">
                 best of Enterainment 
             </h1>
            <EntertainmentCardSlider/>
            <Premier/>
        </div>
       </>
         
    );
        
};
export default Homepage;