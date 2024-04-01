import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

const Header = ({ data }) => {
  function MultipleItems() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <Slider {...settings}>
        {data.map((manga, index) => (
          <div className="slider-item" key={index}>
            <div className="item-wrap">
              <div className="slider-thumb">
                <NavLink to={`${manga.title.toLowerCase()}`}>
                  <img src={manga.thumbnail} alt="" />
                </NavLink>
              </div>
              <div className="info-manga">
                <h3>{manga.title}</h3>
                <div className="post-on">
                  <span>{manga.lastupdatetime}</span>
                </div>
                <div className="last-chap">
                  <NavLink
                    to={`${manga.title.toLowerCase()}/${
                      Object.keys(manga.chapitres).length - 1
                    }`}
                    className="main-chap-btn"
                  >
                    <button className="btn">
                      Chapitre {manga.chapitres.length - 1}
                    </button>
                  </NavLink>
                  <NavLink
                    to={`${manga.title.toLowerCase()}/${
                      Object.keys(manga.chapitres).length
                    }`}
                    className="main-chap-btn"
                  >
                    <button className="btn">
                      Chapitre {manga.chapitres.length}
                    </button>
                  </NavLink>
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
