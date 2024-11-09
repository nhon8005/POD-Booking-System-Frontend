// PopularLocations.js
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import api from '../../config/axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.scss';
import { Link, useNavigate } from 'react-router-dom';

const PopularLocations = () => {
  const [locations, setLocations] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCoffeeShops = async () => {
      try {
        const response = await api.get('/coffeeshops');
        setLocations(response.data);
      } catch (error) {
        console.error('Error fetching coffee shops:', error);
      }
    };

    fetchCoffeeShops();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section className="popular-locations">
      <h2>Our Popular Locations</h2>
      <p>
        The website provides detailed information on POD workspace
        locations, including addresses, amenities, availability, and user
        reviews to help users choose the best fit for their needs.
      </p>
      <Slider {...sliderSettings}>
        {locations.map(location => (
          <div key={location.id} className="location-slide" onClick={() => navigate(`/coffee-shops/${location.id}`)}>
            <div className="location-image">
              <img src={location.image} alt={location.name} />
            </div>
            <div className="location-info" >
                <h3>{location.name}</h3>
                <p>{location.price}</p>
                <p>{location.address}</p>
                <p>Open: {location.openTime} - {location.closeTime}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default PopularLocations;
