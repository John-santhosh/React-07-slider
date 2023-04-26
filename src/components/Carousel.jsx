import { useEffect, useState } from "react";
import { list } from "../data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Carousel = () => {
  const [people] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);
  function prevSlide() {
    setCurrentPerson((oldPerson) => {
      return (oldPerson - 1 + people.length) % people.length;
    });
  }
  function nextSlide() {
    setCurrentPerson((oldPerson) => {
      return (oldPerson + 1) % people.length;
    });
  }
  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 2500);

    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);
  return (
    <div className="slider-container">
      {people.map((person, ind) => {
        const { id, image, name, quote, title } = person;
        return (
          <article
            key={id}
            className="slide"
            style={{
              transform: `translate(${100 * (ind - currentPerson)}%)`,
              opacity: ind === currentPerson ? "1" : "0",
              visibility: ind == currentPerson ? "visible" : "hidden",
            }}
          >
            {/* {console.log(100 * (ind - currentPerson))} */}
            <img className="person-img" src={image} alt={name} />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon"></FaQuoteRight>
          </article>
        );
      })}
      <div className="btn-container">
        <button onClick={prevSlide} className="prev">
          <FiChevronLeft />
        </button>
        <button onClick={nextSlide} className="next">
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
