import React, { useEffect, useState } from "react";
import api from "../../config/axios";; // Adjust the path if needed

const PodsPage = () => {
  const [pods, setPods] = useState([]); // State to store PODs data
  const [loading, setLoading] = useState(true); // State to handle loading status
  const [error, setError] = useState(null); // State to handle error

  useEffect(() => {
    // Fetch the PODs data when the component mounts
    const fetchPods = async () => {
      try {
        const response = await api.get("/PODs");
        setPods(response.data); // Set the fetched PODs data
      } catch (err) {
        setError("Failed to fetch PODs data.");
      } finally {
        setLoading(false); // Stop loading once the request is finished
      }
    };

    fetchPods();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // If loading, show a loading indicator
  if (loading) return <div>Loading...</div>;

  // If there's an error, display the error message
  if (error) return <div>{error}</div>;

  return (
    <div className="pods-page">
      <h1>Our Available PODs</h1>
      <div className="pods-container">
        {pods.map((pod) => (
          <div className="pod-item" key={pod.id}>
            <img src={pod.image} alt={pod.description} className="pod-image" />
            <div className="pod-details">
              <h3>{pod.description}</h3>
              <p>{pod.location}</p>
              <p>Price: ${pod.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PodsPage;
