import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './LogoSlider.css'; 

const LogoSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000, 
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, 
    cssEase: 'linear', 
      arrows: false,
        responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const logos = [
    'https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png',
    'https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/2560px-Accenture.svg.png',
    'https://i.pinimg.com/736x/9c/b0/bc/9cb0bc7cab743ffccd22c07719ec9ba3.jpg',
    'https://www.sap.com/dam/application/shared/logos/partner/yash-technologies-logo.png',
    'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=608,fit=crop,q=95/Aq20eV79zLfpXV6b/logo-png-mnl7npnlXjHPl9KV.png',
  ];

  return (
    <div className="logo-slider">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="logo-slide">
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default LogoSlider;
