import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate  } from "react-router-dom";
import axios from "axios";
import emailjs from `@emailjs/browser`
import LogoWhite from "./AgenKlik WhiteLogo.png";



export default function Payment() {
  const [name, setName] = useState ('')
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [token, setToken] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const stateData = location.state;
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const form = useRef();

  const state = {
    firstName : stateData.firstName,
    lastName: stateData.lastName,
    phoneNumber: stateData.phoneNumber,
    email:stateData.email
    }
     
   
    

  function sendEmail(event){
    event.preventDefault();

const templateParams = {
from_name:"AgenKlik",
from_email:"agenklikcs@gmail.com",
to_name:name,
message: `Disinilah rincian tentang ${stateData.firstName}, ${stateData.lastName}
Nomor HP: ${stateData.phoneNumber}
Email: ${stateData.email}`


}
    
    emailjs.send('service_qrfwy59', 'template_fzd05al', templateParams ,'KFSrXHoe4LToEiWnr')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const checkout = async () => {
    const data = {
      firstname: stateData.firstName,
      lastname: stateData.lastName,
      price: stateData.price,
    }

    const config = {
      headers: {
        "Content-Type":"application/json"
      }
    }

    const baseURL = 'https://plum-nice-ant.cyclic.app';
    const axiosInstance = axios.create({ baseURL });

    try {
      const response = await axiosInstance.post("https://plum-nice-ant.cyclic.app/api/payment/process-transactions", data, config);
      setToken(response.data.token);
    } catch (error) {
      console.error("Error during checkout:", error);
      console.log(data)
    }
  };

  useEffect(() => {
    if (token) {
      window.snap.pay(token, {
        onSuccess: (result) => {
          localStorage.setItem("Purchase", JSON.stringify(result))
          setToken("")
          setPurchaseSuccess(true);
        },
        onPending: (result) => {
          localStorage.setItem("Purchase", JSON.stringify(result))
          setToken("")
        },
        onError: (error) => {
          console.log(error)
          setToken("")
        },
        onClose: () => {
          console.log("Anda belum menyelesaikan pembayaran")
          setToken("")
        }
      });
    }
    setEmail("")
    setPhoneNumber("")
  }, [token]);

  useEffect(() => {
    const midtransURL = "https://app.midtrans.com/snap/v1/transactions";
    let scriptTag = document.createElement("script");
    scriptTag.src = midtransURL;

    const midtransClientKey = "Mid-client-0_w4bKYtqT-4HOeP";
    scriptTag.setAttribute("data-client-key", midtransClientKey);

    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  useEffect(() => {
    if (purchaseSuccess) {
      sendEmail(event); 
   

    }
  }, [purchaseSuccess]);
function test (){

  if(setPurchaseSuccess === 'true'){
    setPurchaseSuccess(false)
    console.log(purchaseSuccess)
  }
  else{setPurchaseSuccess(true)
    console.log(purchaseSuccess)}

  console

}
  return (
    <div className="Payment">
      <h1 style={{ fontWeight: 100 }}>Checkout untuk Contact Informasi {stateData.firstName} {stateData.lastName}</h1>
      <div className="FillIn">
        <h2 style={{ fontWeight: 100 }}>Tolong isi Email dan Nomor HP </h2>
        <h3 style={{ fontWeight: 100 }}>Informasi {stateData.firstName} nanti di kirim ke kalian via Email dan SMS </h3>
        <div>
        <input
            className="InputRecepient"
            placeholder="Nama Kalian"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <button 
  className={`PaymentButton ${email === '' || phoneNumber === '' ? 'ButtonRed' : 'ButtonGreen'}`}
  onClick={(e) => {
    e.preventDefault();
    if (email === '' || phoneNumber === '') {
      alert('Email or Phone Number is empty');
    } else {
      checkout();
    }
  }}
>
  Pay Now
</button>
        
        </div>
      </div>
      {purchaseSuccess && (
  <div className="PaymentSuccess">
    <img className="PurchaseLogo" src={LogoWhite} alt="AgenKlik" />
    <h1 className="PaymentSuccess2">Terima Kasih!</h1>
    <h1 className="PaymentSuccess2">Anda sekarang dapat menghubungi orang di bawah ini!</h1>

    <div className="PaidInformation">
      <h1 className="PaymentSuccess3">Disinilah rincian tentang "{stateData.firstName}, {stateData.lastName}"</h1>
      <h2 className="PaymentSuccess3">Nomor HP: {stateData.phoneNumber}</h2>
      <h2 className="PaymentSuccess3">Email: {stateData.email}</h2>
    </div>
  </div>
)}
    </div>
  );
}
