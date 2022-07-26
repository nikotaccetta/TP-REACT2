import { NavLink } from "react-router-dom";
import "./category.css";

const Category = ({ div_class }) => {
  const categorias = [
    {
      url: "/category/Marvel",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png",
      texto: "Marvel",
    },
    {
      url: "/category/DC",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg",
      texto: "DC",
    },
    {
      url: "/category/StarWars",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png",
      texto: "StarWars",
    },
    {
      url: "/category/Anime",
      img: "https://seeklogo.com/images/F/Fullmetall_Alchemist_anime-logo-59840B9E1F-seeklogo.com.png",
      texto: "Anime",
    },
    {
      url: "/category/Funko",
      img: "https://seeklogo.com/images/F/funko-logo-5B82C5739E-seeklogo.com.png",
      texto: "Funko",
    },
    {
      url: "/category/Ropa",
      img: "http://cdn.onlinewebfonts.com/svg/img_136814.png",
      texto: "Ropa",
    },
  ];
  div_class = div_class || "cat_container";

  return (
    <div className={div_class}>
      <div className="cat_radius">
        <div className="categories">
          {categorias.map((categoria, index) => {
            return (
              <NavLink key={index} to={categoria.url}>
                <div>
                  <h3>{categoria.texto}</h3>
                  <img
                    src={categoria.img}
                    alt={categoria.texto}
                  ></img>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
