import React from "react";
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
        {data.webtoons.map((manga, index) => (
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
                    Chapitre {manga.chapitres.length - 1}
                  </button>
                  <button className="btn">
                    Chapitre {manga.chapitres.length}
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
