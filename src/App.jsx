//  import { Route } from "react-router-dom";

// HOC
import DefaultHOC from "./HOC/Default.HOC";

// pages
import Homepage from "./pages/Home.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={Homepage } />
    </>
  );
}

export default App;
