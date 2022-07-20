import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

import "swiper/swiper.min.css";
import "swiper/modules/autoplay/autoplay.min.css";
import "./brands.css";

const brandsArray = [
  {
    img: "https://www.geralgeek.com.br/images/marcas/ironstudios.png",
    text: "Logo Iron Studios",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0268/4112/0815/collections/DC_Comics_logo.svg_4626617d-4e4a-4bb0-8d5c-e48ee36ab301_1024x1024.png",
    text: "DC Collectibles",
  },
  {
    img: "https://segaretro.org/images/4/42/Kotobukiya_logo.svg",
    text: "Kotobukiya",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Hasbro-brand.svg/2048px-Hasbro-brand.svg.png",
    text: "Hasbro",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/BANDAI.svg/2034px-BANDAI.svg.png",
    text: "Bandai",
  },
  {
    img: "https://www.starwarscali.co/wp-content/uploads/2013/05/sideshow-collectibles-logo.jpg",
    text: "SideShow",
  },
  {
    img: "https://iconape.com/wp-content/files/ki/277237/svg/277237.svg",
    text: "Neca",
  },
  {
    img: "https://seeklogo.com/images/F/funko-logo-5B82C5739E-seeklogo.com.png",
    text: "Funko",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Banpresto_logo.svg/1200px-Banpresto_logo.svg.png",
    text: "Banpresto",
  },
  {
    img: "https://criticalhit.com.au/wp-content/uploads/2019/02/1518139404.png",
    text: "ichiban Kuji",
  },
  ];

const Brands = () => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      modules={[ Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      className="mySwiper"
    >
      {brandsArray.map((brand, index) => {
        return (
          <SwiperSlide key={index} className="brand__swiper-slide">
            <img src={brand.img} alt={brand.text} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Brands;
