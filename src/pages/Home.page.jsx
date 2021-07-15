import React from "react";

//components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";

const Homepage=()=>{

    return (
       <> 
       <div className="container mx-aut0 px-4">
            <h1 className="text-xl font-bold text-gray-800  my-3">
                 best of Enterainment 
             </h1>
            <EntertainmentCardSlider/>
        </div>
       </>
         
    );
        
};
export default Homepage;