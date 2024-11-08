import React, { useEffect, useState } from 'react';
import styles from './CoffeeShopsPage.module.scss';
import api from '../../config/axios';

const CoffeeShopsPage = () => {
  const [coffeeShops, setCoffeeShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoffeeShops = async () => {
      try {
        const response = await api.get('/coffeeshops');
        setCoffeeShops(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchCoffeeShops();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.coffeeShopsPage}>
      <h1>Coffee Shops</h1>
      <div className={styles.coffeeShopsGrid}>
        {coffeeShops.map(shop => (
          <div key={shop.id} className={styles.coffeeShopCard}>
            <img src={shop.image} alt={shop.name} />
            <h2>{shop.name}</h2>
            <p>Address: {shop.address}</p>
            <p>Phone: {shop.phone}</p>
            <p>Open: {shop.openTime} - {shop.closeTime}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeShopsPage;
