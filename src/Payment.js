import React from "react";
import "./MaidHome.css";
import "./contactkilk.css";
import DefaultPhoto from "./360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg";
import { useLocation } from "react-router-dom";




export default function Payment(){
    const location = useLocation();
    const stateData = location.state;
return (<div className="Payment">

<h1 style={{ fontWeight: 100 }}>Checkout untuk Contact Informasi {stateData.firstName} {stateData.lastName}</h1>
<div className="FillIn">
<h2 style={{ fontWeight: 100 }}>Tolong isi Email dan Nomor HP </h2>
<h3  style={{ fontWeight: 100 }}>Informasi {stateData.firstName} nanti di kirim ke kalian via Email dan SMS </h3>
<div>
<input className="InputRecepient" placeholder="Email"></input>
<input className="InputRecepient" placeholder="Nomor HP"></input>
</div>
</div>









</div>)

}