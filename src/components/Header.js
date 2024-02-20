import React from "react";
import Slider from "react-slick";
import Data from "../data.json";

const Header = () => {
  function MultipleItems() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      // autoplay: true,
      autoplaySpeed: 3500,
      pauseOnHover: true,
    };

    return (
      <Slider {...settings}>
        {Data.webtoons.map((manga, index) => (
          <div className="slider-item" key={index}>
            <div className="item-wrap">
              <div className="slider-thumb">
                <img src={manga.thumbnail} alt="" />
              </div>
              <div className="info-manga">
                <h3>{manga.title}</h3>
                <div className="post-on">
                  <span>{manga.lastupdatetime}</span>
                </div>
                <div className="last-chap">
                  <button className="btn">
                    Chapitre {manga.chapitres.length - 2}
                  </button>
                  <button className="btn">
                    Chapitre {manga.chapitres.length - 1}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    );
  }

  return (
    <div className="carousel-container">
      <div className="carousel">
        <MultipleItems />
      </div>
    </div>
  );
};

export default Header;
