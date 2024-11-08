const PaymentPage = ({ response }) => {
  const isSuccess = response?.status === 'success';

  return (
    <div>
      <h1>{isSuccess ? 'Payment Successful' : 'Payment Failed'}</h1>
      <p>{response?.message}</p>
      {/* Add more details or actions based on the response */}
    </div>
  );
};

export default PaymentPage;