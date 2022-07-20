import Slider from "../home/hero/Slider";
import ScrollDownArrow from "../home/hero/ScrollDownArrow";
import Information from "./information/Information";

import "./home.css";
import Brands from "./brands/Brands";

const Home = () => {
  return (
    <div>
      <Slider />
      <ScrollDownArrow />
      <div id="main" className="section2">
        <Information />
      </div>

      <h2>TIENDA</h2>
      <div className="container customFloatContainer">
        <a href="/store">
          <button className="btnMain d-block mb-3">
            Ver todos los productos
          </button>
        </a>        
      </div>

      <h2>Marcas</h2>
      <div className="container customFloatContainer mb-5">
        <Brands/>
      </div>
      
    </div>
  );
};

export default Home;
