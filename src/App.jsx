import { Route } from "react-router-dom";
 
//  function App(){
//    return(
//     <div className="App p-10">
//      {/* <h1 className="text-6xl">hello people,welcome to tailwind</h1> */}
//      {/* <h1 className="text-8xl hover:text-blue-500">hello people,welcome to tailwind</h1> */}


//      <button className="border-2 px-2 py-1  border-blue-500  md:border-red-500 lg:border-green-500
//      rounded  bg-blue-500 md:bg-red-500 lg:bg-green-500 text-dhanu-500 hover:bg-transparent 
//      hover:border-2  hover:text-blue-500  md:hover-text-red-500 lg:hover-text-green-500  outline-none  focus:ring focus:border-blue-300
//      md:focus:border-red-300 lg:focus:border-green-300">
//        Hello Taiwind  
//      </button>
//      <h1 className="text-dhanu-500">hello Dhanu Color</h1>
//    </div>
//    );
//  }


//  function Name(){
//      return  <h1>hello route</h1>
//  }
//  function Name2(){
//   return  <h1>hello movie</h1>
// }


//    function App(){
//      return(
//        <>
//          <Route path="/" exact component={Name} />
//          <Route path="/movie" exact component={Name2} />
//        </>  
//      );
//    }


//HOC 
import DefaultHOC from "./HOC/Default.HOC";
//
// component
import Temp from "./components/temp"; 

function App()
{
  return(
  <>
<DefaultHOC  path="/" exact component= {Temp} />


  </>
  );
}

export default App;

