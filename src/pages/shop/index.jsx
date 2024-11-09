import React, { useEffect, useState } from 'react';
import styles from './CoffeeShopsPage.module.scss';
import api from '../../config/axios';
import { Button, DatePicker, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const CoffeeShopsPage = () => {
  const [coffeeShops, setCoffeeShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pods, setPods] = useState([]);
  const [showPods, setShowPods] = useState(false); // New state for showing PODs section
  const navigate = useNavigate()

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

  const fetchPods = async () => {
    try {
      const response = await api.get("/PODs");
      setPods(response.data); // Set the fetched PODs data
      setShowPods(true); // Show the PODs section when data is fetched
    } catch (err) {
      setError("Failed to fetch PODs data.");
    } finally {
      setLoading(false); // Stop loading once the request is finished
    }
  };

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const bookingData = {
        start: values.start.toISOString(),
        end: values.end.toISOString(),
        bookId: values.bookId,
      };

      const response = await api.post("/PODBooking/add", bookingData);
      message.success("POD booked successfully!");
      console.log(response.data);
    } catch (error) {
      message.error("Failed to book POD. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.coffeeShopsPage} style={{ marginTop: "135px" }}>
      <h1>Coffee Shops</h1>
      <div className={styles.coffeeShopsGrid}>
        {coffeeShops.map(shop => (
          <div key={shop.id} className={styles.coffeeShopCard}>
            <img src={shop.image} alt={shop.name} />
            <div className={styles.coffeeShopInfo}>
              <h2>{shop.name}</h2>
              <p>Address: {shop.address}</p>
              <p>Phone: {shop.phone}</p>
              <p>Open: {shop.openTime} - {shop.closeTime}</p>
              <div className={styles.bookButton}>
                <Button onClick={fetchPods}>Book</Button>
              </div>
            </div>
          </div>
        ))}
          {showPods && (
            <div className={styles["pods-page"]}>
              <h1>Our Available PODs</h1>
              <div className={styles["pods-container"]}>
                {pods.map((pod) => (
                  <div className={styles["pod-item"]} key={pod.id}>
                    <img src={pod.image} alt={pod.description} className={styles["pod-image"]} />
                    <div className={styles["pod-details"]}>
                      <h3>{pod.description}</h3>
                      <p>{pod.location}</p>
                      <p>Price: {pod.price} vnd</p>
                    </div>
                  </div>
                ))}
                    <div className={styles["booking-page"]}>
                      <h1>Book a POD</h1>
                      <Form
                        layout="vertical"
                        onFinish={handleSubmit}
                        className={styles["booking-form"]}
                      >
                        <Form.Item
                          label="Booking ID"
                          name="bookId" 
                          rules={[{ required: true, message: "Please enter a booking ID" }]}
                        >
                          <Input type="number" placeholder="Enter booking ID" />
                        </Form.Item>

                        <Form.Item
                          label="Start Date and Time"
                          name="start"
                          rules={[{ required: true, message: "Please select a start date and time" }]}
                        >
                          <DatePicker
                            showTime={{ format: "HH:mm" }}
                            format="YYYY-MM-DD HH:mm"
                            style={{ width: "100%" }}
                          />
                        </Form.Item>

                        <Form.Item
                          label="End Date and Time"
                          name="end"
                          rules={[{ required: true, message: "Please select an end date and time" }]}
                        >
                          <DatePicker
                            showTime={{ format: "HH:mm" }}
                            format="YYYY-MM-DD HH:mm"
                            style={{ width: "100%" }}
                          />
                        </Form.Item>

                        <Form.Item>
                          <Button
                            type="primary"
                            htmlType="submit"
                            loading={loading}
                            className={styles["booking-button"]}
                          >
                            Book POD
                          </Button>
                        </Form.Item>
                      </Form>
                    </div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default CoffeeShopsPage;
