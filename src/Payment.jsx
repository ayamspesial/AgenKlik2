import React, { useEffect, useState } from "react";
import "./MaidHome.css";
import "./contactkilk.css";
import { useLocation } from "react-router-dom";
import axios from "axios"





export default function Payment() {

  




 
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [token, setToken] = useState('')
  const location = useLocation();
  const stateData = location.state;
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);



  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    setQuantity((prevState) => (quantity > 1 ? prevState - 1 : null));
  };

  const increaseQuantity = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const checkout = async () => {
    
const data = {
id: stateData.id,
firstname:stateData.firstName,
lastname:stateData.lastName,
price:stateData.price,
}


const config = {
  headers: {
    "Content-Type":"application/json"
  }
}

const baseURL = 'https://plum-nice-ant.cyclic.app';

const axiosInstance = axios.create({
  baseURL,

});


const response = await axiosInstance.post("/api/payment/process-transactions", data, config);
setToken(response.data.token)
  };

  useEffect(()=>{
if(token){
  window.snap.pay(token,{
onSuccess:(result) =>{
  localStorage.setItem("Purchase", JSON.stringify(result))
  setToken("")
  setPurchaseSuccess(true)
},
onPending:(result) => {
  localStorage.setItem("Purchase", JSON.stringify(result))
  setToken("")
},
onError:(error) =>{
  console.log(error)
  setToken("")
},
onClose:() =>{
  console.log("Anda belum menyelesaikan pembayaran")
  setToken("")
}
  })
}
setEmail("")
setPhoneNumber("")
  },[token]);

  useEffect(() => {
    const midtransURL = "https://app.midtrans.com/snap/v1/transactions";
    let scriptTag = document.createElement("script");
    scriptTag.src = midtransURL;
  
    const midtransClientKey = "SB-Mid-client-NxtFho1e1so1Wr04";
    scriptTag.setAttribute("data-client-key", midtransClientKey);
  
    document.body.appendChild(scriptTag); 
  
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  useEffect(() => {
    if (purchaseSuccess) {

      history.push('/purchase-success');
    }
  }, [purchaseSuccess]);




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
     <button onClick={(e) => { 
    e.preventDefault();  // Prevent the default behavior

    if (email === "" || phoneNumber === "") {
        // Do nothing or handle the case where email or phoneNumber is empty
       alert("Email or Phone Number is empty");
    } else {
        // Call the checkout function
        checkout();
    }
}}>Pay Now</button>
        </div>
      </div>
    </div>
  );
}