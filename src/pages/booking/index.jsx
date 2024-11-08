import React, { useState } from "react";
import axios from "axios";
import api from "../../config/axios";

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
    setError(null); // Clear any previous errors

    try {
      const response = await api.get(`coffeeshops/searchByAddress`, {
        params: { address }
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
    <div style={{ marginTop: "135px" }}>
      <h1>Search for Coffee Shops</h1>
      <input
        type="text"
        placeholder="Enter address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button onClick={handleSearch} style={{ padding: "8px" }}>Search</button>
      
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        {results.length > 0 ? (
          results.map((shop) => (
            <div key={shop.id} style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ccc" }}>
              <h2>{shop.name}</h2>
              <img src={shop.image} alt={shop.name} />
              <p>Address: {shop.address}</p>
              <p>Phone: {shop.phone}</p>
              <p>Open Time: {shop.openTime}</p>
              <p>Close Time: {shop.closeTime}</p>
            </div>
          ))
        ) : (
          !loading && <p>No coffee shops found for this address.</p>
        )}
      </div>
    </div>
  );
};

export default BookPage;
