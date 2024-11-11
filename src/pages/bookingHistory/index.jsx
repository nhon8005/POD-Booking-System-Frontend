import React, { useEffect, useState } from 'react';
import api from '../../config/axios';
import { Table, Spin, Alert, notification, Modal, Form, DatePicker, Button } from 'antd';
import styles from './BookingHistoryPage.module.scss';
import moment from 'moment';

const BookingHistoryPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    const fetchBookingHistory = async () => {
      const userId = localStorage.getItem('uid'); // Retrieve userId from localStorage
      console.log(userId);
      try {
        const response = await api.get(`/PODBooking/checkout/${userId}?accountId=${userId}`);
        setBookings(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookingHistory();
  }, []);

  const handleUpdate = async (values) => {
    try {
      await api.put(`/PODBooking/${selectedBooking.id}`, {
        start: values.start.format(),
        end: values.end.format(),
        bookId: selectedBooking.id,
        podId: selectedBooking.pod.id,
      });
      setBookings(bookings.map(booking => booking.id === selectedBooking.id ? { ...booking, startTime: values.start, endTime: values.end } : booking));
      notification.success({
        message: 'Update Successfully',
        description: 'The booking has been updated successfully.',
      });
      setIsModalVisible(false);
    } catch (err) {
      setError(err);
    }
  };

  const columns = [
    {
      title: 'Booking ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'POD Image',
      dataIndex: ['pod', 'image'],
      key: 'podImage',
      render: (text) => <img src={text} alt="POD" className={styles.podImage} />,
    },
    {
      title: 'Description',
      dataIndex: ['pod', 'description'],
      key: 'description',
    },
    {
      title: 'Start',
      dataIndex: 'startTime',
      key: 'startTime',
      render: (text) => moment(text).format('YYYY-MM-DD : HH:mm:ss'),
    },
    {
      title: 'End',
      dataIndex: 'endTime',
      key: 'endTime',
      render: (text) => moment(text).format('YYYY-MM-DD : HH:mm:ss'),
    },
    {
      title: 'Price',
      dataIndex: ['pod', 'price'],
      key: 'price',
      render: (text) => `${text} vnd`,
    },
    {
      title: 'Total Price',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      render: (text) => `${text} vnd`,
    },
    {
      title: 'Edit Booking',
      render: (text, record) => (
        <button
          onClick={() => {
            setSelectedBooking(record);
            setIsModalVisible(true);
          }}
        >
          Edit
        </button>
      ),
      dataIndex: 'updateBooking',
      key: 'updateBooking',
    },
    {
      title: 'Cancel Booking',
      render: (text, record) => (
        <button
          onClick={async () => {
            try {
              await api.delete(`/PODBooking/${record.id}`);
              setBookings(bookings.filter(booking => booking.id !== record.id));
              notification.success({
                message: 'Cancel Successfully',
                description: 'The booking has been canceled successfully.',
              });
            } catch (err) {
              setError(err);
            }
          }}
        >
          Cancel
        </button>
      ),
      dataIndex: 'cancelBooking',
      key: 'cancelBooking',
    }
  ];

  if (loading) return <Spin size="large" />;
  if (error) return <Alert message="Error" description={error.message} type="error" showIcon />;

  return (
    <div className={styles.bookingHistoryPage} style={{ marginTop: "135px" }}>
      <h1>Booking History</h1>
      <Table dataSource={bookings} columns={columns} rowKey="id" />
      <Modal
        title="Edit Booking"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form onFinish={handleUpdate}>
          <Form.Item
            name="start"
            label="Start Time"
            rules={[{ required: true, message: 'Please select start time!' }]}
          >
            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
          </Form.Item>
          <Form.Item
            name="end"
            label="End Time"
            rules={[{ required: true, message: 'Please select end time!' }]}
          >
            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Edit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default BookingHistoryPage;