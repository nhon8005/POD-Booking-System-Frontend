import React, { useState } from "react";
import { HomeOutlined, PhoneOutlined, ClockCircleOutlined } from "@ant-design/icons"; // Import icons
import api from "../../config/axios";
import styles from "./BookPage.module.scss";

const BookPage = () => {
  const [address, setAddress] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!address.trim()) {
      setError("Please enter an address.");
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await api.get(`coffeeshops/searchByAddress`, {
        params: { address },
      });
      const data = Array.isArray(response.data) ? response.data : [response.data];
      setResults(data);
    } catch (err) {
      setError("Unable to fetch results. Please try again.");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.bookPage} style={{marginTop: '135px'}}>
      <h1>Search for Coffee Shops</h1>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Enter address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className={styles.errorMessage}>{error}</p>}
      
      <div className={styles.results}>
        {results.length > 0 ? (
          results.map((shop) => (
            <div key={shop.id} className={styles.resultCard}>
              <h2>{shop.name}</h2>
              <img src={shop.image} alt={shop.name} />
              <div className={styles.shopInfo}>
                <p>
                  <HomeOutlined className={styles.infoIcon} /> Address: {shop.address}
                </p>
                <p>
                  <PhoneOutlined className={styles.infoIcon} /> Phone: {shop.phone}
                </p>
                <p>
                  <ClockCircleOutlined className={styles.infoIcon} /> Open Time: {shop.openTime}
                </p>
                <p>
                  <ClockCircleOutlined className={styles.infoIcon} /> Close Time: {shop.closeTime}
                </p>
              </div>
            </div>
          ))
        ) : (
          !loading && <p className={styles.noResults}>No coffee shops found for this address.</p>
        )}
      </div>
    </div>
  );
};

export default BookPage;
