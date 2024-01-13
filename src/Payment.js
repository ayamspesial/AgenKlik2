import React, { useState } from "react";
import "./MaidHome.css";
import "./contactkilk.css";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import Midtrans from "midtrans-client";




export default function Payment() {
    const [transactionToken, setTransactionToken] = useState(null);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const location = useLocation();
  const stateData = location.state;

  function generateOrderId(prefix = 'ORDER') {
    const timestamp = new Date().getTime();
    const uniqueIdentifier = Math.floor(Math.random() * 1000000); // You can use a more robust method for uniqueness
    return `${prefix}-${timestamp}-${uniqueIdentifier}`;
  }

  const orderId = generateOrderId();

  const snap = new Midtrans.Snap({
    isProduction: false,
    serverKey: 'Mid-server-7fN8M3PZO45E0UC1WdpHzT9V',
    clientKey: 'Mid-client-0_w4bKYtqT-4HOeP'
  });

  const handlePayNowClick = async () => {
    try {
      let parameter = {
        transaction_details: {
          order_id: orderId,
          gross_amount: 20000
        },
        credit_card: {
          secure: true
        },
        customer_details: {
          email: email,
          phone: phoneNumber
        }
      };

      const transaction = await snap.createTransaction(parameter);
      setTransactionToken(transaction.token);

      // Perform additional steps if needed (e.g., saving transaction details)

      // Redirect the user to the Midtrans payment page
      if (transaction.token) {
        window.location.href = `https://app.sandbox.midtrans.com/snap/v1/pay/${transaction.token}`;
      }
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };




  return (
    <div className="Payment">
      <h1 style={{ fontWeight: 100 }}>Checkout untuk Contact Informasi {stateData.firstName} {stateData.lastName}</h1>
      <div className="FillIn">
        <h2 style={{ fontWeight: 100 }}>Tolong isi Email dan Nomor HP </h2>
        <h3  style={{ fontWeight: 100 }}>Informasi {stateData.firstName} nanti di kirim ke kalian via Email dan SMS </h3>
        <div>
          <input
            className="InputRecepient"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="InputRecepient"
            placeholder="Nomor HP"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button onClick={handlePayNowClick}>Pay Now</button>
        </div>
      </div>
    </div>
  );
}