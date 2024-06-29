import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import emailjs from 'emailjs-com';

export default function Payment() {
  const [firstname, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [token, setToken] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const stateData = location.state;
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const form = useRef();

  useEffect(() => {
    const handleMessage = (event) => {
      try {
        console.log('Received raw data:', event.data); // Log the raw data
        const data = JSON.parse(event.data);
        setName(data.firstName);
        setLastName(data.lastName);
        console.log('Received user data:', data);

        // Send a message back to React Native to confirm receipt
        window.ReactNativeWebView.postMessage(JSON.stringify({
          message: 'Data received',
          firstName:firstname,
          lastName: lastName
        }));
      } catch (error) {
        console.error('Failed to parse user data:', error);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [name,lastName]);

  useEffect(() => {
    if (token) {
      window.snap.pay(token, {
        onSuccess: (result) => {
          localStorage.setItem("Purchase", JSON.stringify(result));
          setToken("");
          setPurchaseSuccess(true);
          navigate('/success');
        },
        onPending: (result) => {
          localStorage.setItem("Purchase", JSON.stringify(result));
          setToken("");
        },
        onError: (error) => {
          console.log(error);
          setToken("");
        },
        onClose: () => {
          console.log("Anda belum menyelesaikan pembayaran");
          setToken("");
        }
      });
    }
    setEmail("");
    setPhoneNumber("");
  }, [token]);

  useEffect(() => {
    const midtransURL = "https://app.midtrans.com/snap/snap.js";
    let scriptTag = document.createElement("script");
    scriptTag.src = midtransURL;

    const midtransClientKey = import.meta.env.VITE_MIDTRANS_CLIENT_KEY;
    scriptTag.setAttribute("data-client-key", midtransClientKey);

    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  useEffect(() => {
    if (purchaseSuccess) {
      sendEmail();
    }
  }, [purchaseSuccess]);

  function sendEmail(event) {
    const templateParams = {
      from_name: "AgenKlik",
      from_email: "agenklikcs@gmail.com",
      to_name: name,
      message: `Disinilah rincian tentang ${stateData.firstName}, ${stateData.lastName}
        Nomor HP: ${stateData.phoneNumber}
        Email: ${stateData.email}`
    };

    emailjs.send(import.meta.env.VITE_SERVICE_KEY, import.meta.env.VITE_TEMPLATE_KEY, templateParams, import.meta.env.VITE_USER_KEY)
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  function generateRandomId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  const checkout = async () => {
    const id = generateRandomId(10);
    const data = {
      id: id,
      firstname: firstname,
      lastname: lastName,
      price: '100',
    };

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const response = await axios.post(import.meta.env.VITE_REACT_APP_API_URL_TRANSACTION, data, config);
      setToken(response.data.token);
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div className="Payment">
      <h1 style={{ fontWeight: 100 }}>Checkout</h1>
      <div className="FillIn">
        <div>
          <button 
            className={`PaymentButton ${email === '' ? 'ButtonGreen' : 'ButtonGreen'}`}
            onClick={checkout}
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
