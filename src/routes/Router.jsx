import {Routes,Route,Navigate} from "react-router-dom"
import About from "../pages/About/About";
import Home from "../pages/Home/Home";

const Router = () => {

    return (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>}/>
          </Routes>
      );
}

export default Router;