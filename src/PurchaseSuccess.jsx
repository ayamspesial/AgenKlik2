import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LogoWhite from "./AgenKlik WhiteLogo.png";
export default function PurchaseSuccess (){


    const location = useLocation();
    const navigate = useNavigate();
    const stateData = location.state;

    
    return (<div className="PaymentSuccess">
         <img className="PurchaseLogo" src={LogoWhite} alt="AgenKlik" />
    <h1 className="PaymentSuccess2"> Terimah Kasih!  </h1>
    <h1 className="PaymentSuccess2">Anda sekarang dapat menghubungi orang di bawah ini!</h1>
  
    <div className="PaidInformation">
    <h1 className="PaymentSuccess3">Disinilah rincian tentang "{stateData.firstName}, {stateData.lastName}"</h1>
    <h2 className="PaymentSuccess3">Nomor HP: {stateData.phoneNumber}</h2>
    <h2 className="PaymentSuccess3">Email: {stateData.email}</h2>
    </div>


</div>)



}