import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { list } from "../data";
import { FaQuoteRight } from "react-icons/fa";

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // fade: true,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
  };
  return (
    <div className="slick-container">
      <h2
        style={{
          marginBottom: "1rem",
        }}
      >
        Same carousel using slick Library{" "}
      </h2>
      <Slider {...settings}>
        {list.map((person) => {
          const { id, image, name, quote, title } = person;
          return (
            <article key={id}>
              {/* {console.log(100 * (ind - currentPerson))} */}
              <img className="person-img" src={image} alt={name} />
              <h5 className="name">{name}</h5>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon"></FaQuoteRight>
            </article>
          );
        })}
      </Slider>
    </div>
  );
};

export default SlickCarousel;
