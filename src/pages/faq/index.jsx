import React, { useState } from 'react';
import './FAQ.scss';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questionsAndAnswers = [
    { question: "How do I reserve a POD at a coffee shop?", answer: "To reserve a POD, go to the booking page, select your preferred coffee shop, choose an available POD, and complete your booking." },
    { question: "Can I book multiple PODs at once?", answer: "Yes, you can book multiple PODs by adding each to your booking cart before checking out." },
    { question: "How do I update my payment information?", answer: "Go to 'Account Settings' and update your payment information in the billing section." },
    { question: "Is there a cancellation policy for POD bookings?", answer: "Yes, you can cancel your booking up to 24 hours before the reservation time for a full refund. See our cancellation policy for details." },
    { question: "How long can I reserve a POD?", answer: "You can reserve a POD for a minimum of 30 minutes and up to 4 hours in a single booking." },
    { question: "Do all coffee shops offer POD reservations?", answer: "POD availability depends on the coffee shop. You can check available locations on our website." },
    { question: "How do I contact customer support?", answer: "You can reach customer support via the 'Contact Us' page or by email for any booking-related inquiries." },
    { question: "What is the refund policy for POD bookings?", answer: "If you cancel within the allowed time, you’ll receive a full refund. Refunds are processed back to your original payment method." },
    { question: "Can I track my booking history?", answer: "Yes, you can view your past bookings under 'My Bookings' in your account." },
    { question: "What payment methods are accepted?", answer: "We accept all major credit cards, as well as PayPal and Apple Pay." },
    { question: "How do I use a promo code for a booking?", answer: "Enter your promo code at checkout in the designated field to apply any discounts." },
    { question: "Why was my payment declined?", answer: "Your payment may have been declined due to incorrect information or insufficient funds. Please check your details and try again." },
    { question: "Can I change my reservation time after booking?", answer: "You can modify your reservation time if changes are made at least 2 hours before the original booking time." },
    { question: "How do I report a problem with my POD booking?", answer: "For any issues with your booking, please contact support with your booking ID for assistance." },
    { question: "Do you offer a loyalty or rewards program?", answer: "Yes! Earn rewards for each booking, which can be redeemed for discounts on future reservations." }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container" style={{marginTop: '140px'}}>
      <h1 className="faq-title">Customer Support</h1>
      <div className="faq-list">
        {questionsAndAnswers.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAnswer(index)}
          >
            <h2 className="faq-question">{item.question}</h2>
            {activeIndex === index && <p className="faq-answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
