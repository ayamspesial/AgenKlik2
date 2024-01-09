
import React, { useEffect, useState } from "react";
import "./MaidHome.css";
import ProfileBox from "./ProfileBox";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Listing from "./DetailedProfile";
import { render } from "@testing-library/react";
import Maidphoto from "./maid.png"
import Driver from "./sedan.png"
import babySitter from "./baby-sitter.png"
import caretaker from "./caretaker.png"
import pethelper from "./pawprint.png"
import gardener from "./agriculture.png"
import AgenKlikPhoto from "./AgenKlik Blue  Logo.png"
import Circles from "./Circles.png"
import ClipBoard from "./Blue Clipbaord.jpg"
import Bolt from "./Untitled.png"






function  FetchData() {
  const [data, setData] = useState([]);
  const [Rendered, setRendered] = useState(false);

  useEffect(() => {
    const url = "https://sheetdb.io/api/v1/yc2k6t3iekggk";

    axios.get(url)
      .then(response => {
        setData(response.data);
        setRendered(true);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return { data, Rendered };
}

export default function HomePage() {
  const { data, Rendered } = FetchData();
const navigate = useNavigate()
const location = useLocation();
const currentPath = location.pathname;



function handleClick(props, index) {


if(Rendered === true ){
    const state = {
      key: props.id,
      firstName: props.firstName,
      lastName: props.lastName,
      Age: props.Age,
      occupation: props.occupation,
      qualifications: props.qualifications,
      question1: props.question1,
      question2: props.question2,
      Pets: props.Pets,
      reasoning: props.reasoning,
      profilePic: props.profilePic,
      askingSalary: props.askingSalary,
      salaryNegotiable: props.salaryNegotiable,
      strength1: props.strength1,
      strength2: props.strength2,
      strength3: props.strength3,
      strength4: props.strength4,
      WorkExperience: props.WorkExperience,
      tingkatpendidikan: props.tingkatpendidikan,
      Anak: props.Anak,
      Gender: props.Gender,
      Location: props.Location
    } 

    // Use navigate to go to the '/Listing' route with the specified state
    navigate('/Listing', { state });}
    else{alert("Oops error occured please try again soon")}
  }


  const [searchfirst, setSearchfirst] = useState("")
  const [searchsecond, setSearchsecond] = useState("")


  function searchSend(e){
    
const state={
firstName: searchfirst,
lastName: searchsecond
}






   navigate('/SearchResult', {state} )


e.preventDefault()
  }
 
  return (
    




    
    <div>

 <div className="GreetingInterface">
  <img src={AgenKlikPhoto} id="AgenKlikLogo"/>
  <h1 className="LargeBanner">
  Sampaikan kekhawatiran <br/> Anda kepada kami !</h1>
<h2 className="Secondarybanner">
Kami akan memastikan untuk menemukan orang yang tepat untuk Anda!</h2>
    <div className="JobArrays">
      <div>
        <button className="Buttons" id="Maid" onClick={()=>navigate('/pembantu')}><img src={Maidphoto} width="40" height="40"/></button>
        <h2 className="onHover">PRT</h2>
      </div>
      <div>
      <button className="Buttons"id="Driver" onClick={()=>navigate('/supir')}><img src={Driver} width="40" height="40"/></button>
      <h2 className="onHover">Sopir</h2>
      </div>
      <div>
      <button className="Buttons"id="babySitter "onClick={()=>navigate('/baby-sitter')} ><img src={babySitter} width="40" height="40"/></button>
      <h2 className="onHover">Baby Sitter</h2>
      </div>
      <div>
      <button className="Buttons"id="caretaker" onClick={()=>navigate('/perawat-lansia')}><img src={caretaker} width="40" height="40"/></button>
      <h2 className="onHover">Perawat lansia</h2>
      </div>
      <div>
      <button className="Buttons"id="pethelper" onClick={()=>navigate('/penajak-hewan')}><img src={pethelper} width="40" height="40"/></button>
      <h2 className="onHover">Penajak Hewan</h2>
      </div>
      <div>
      <button className="Buttons"id="gardener" onClick={()=>navigate('/tukang-kebun')}><img src={gardener} width="40" height="40"/></button>
      <h2 className="onHover">Tukang Kebun</h2>
      </div>
</div>

      <div className="Search">
      <h1 className="GiantHeader">Sudah ada namanya bos? Silakan mencariin!</h1>
        <input className="inputarea" type="search" placeholder="Nama Depan" onChange={(e)=>setSearchfirst(e.target.value)} />
        <input className="inputarea" type="search" placeholder="Nama Belakang" onChange={(e)=>setSearchsecond(e.target.value)} />
            <button className="Searchbutton" onClick={()=> searchSend()}>Cari</button>
            </div>
            </div>
<div className="Benefits">
    <div className="BenefitList">
      <img src={Circles} />
  <h1>Banyak pilihan dalam kenyamanan dari perangkat Anda!</h1>
  </div>
  <div className="BenefitList">
  <img src={Bolt}/>
  <h1>
  Cara termurah dan efisien untuk menemukan penolong yang sempurna!</h1>
  </div>
  <div className="BenefitList"> 
  <img src={ClipBoard}/>
<h1>
Transparan dan selalu tersedia kapan saja untuk kebutuhan Anda!</h1>
</div>




</div>





          



      <div className="Categories" id="Pembantu">
        <h1 className="Title">PRT</h1>
        <div className="Slider">
          {data.map((props, index) => {
            if (props.verified === "TRUE" && props.occupation === "Pembantu") {
              return (
                <div key={props.id} onClick={() => handleClick(props,index)}>
                
                <ProfileBox 
                  firstName={props.firstName}
                  lastName={props.lastName}
                  Age={props.Age}
                  occupation={props.occupation}
                  qualifications={props.qualifications}
                  question1={props.question1}
                  question2={props.question2}
                  Pets={props.Pets}
                  reasoning={props.reasoning}
                  profilePic={props.profilePic}
                  askingSalary={props.askingSalary}
                  salaryNegotiable={props.salaryNegotiable}
                  strength1={props.strength1}
                  strength2={props.strength2}
                  strength3={props.strength3}
                  strength4={props.strength4}
                  WorkExperience={props.WorkExperience}
                  tingkatpendidikan={props.tingkatpendidikan}
                  Anak={props.Anak}
                  Gender={props.Gender}
                  Location = {props.Location}
                />
              
            </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>

      <div className="Categories" id="Supir">
        <h1 className="Title">Supir</h1>
        <div className="Slider">
          {data.map((props, index) => {
            if (props.verified === "TRUE" && props.occupation === "Supir") {
              return (
                <div key={props.id}  onClick={() => handleClick(props,index)}>
                
                    <ProfileBox 
                       firstName={props.firstName}
                       lastName={props.lastName}
                       Age={props.Age}
                       occupation={props.occupation}
                       qualifications={props.qualifications}
                       question1={props.question1}
                       question2={props.question2}
                       Pets={props.Pets}
                       reasoning={props.reasoning}
                       profilePic={props.profilePic}
                       askingSalary={props.askingSalary}
                       salaryNegotiable={props.salaryNegotiable}
                       strength1={props.strength1}
                       strength2={props.strength2}
                       strength3={props.strength3}
                       strength4={props.strength4}
                       WorkExperience={props.WorkExperience}
                       tingkatpendidikan={props.tingkatpendidikan}
                       Anak={props.Anak}
                       Gender={props.Gender}
                       Location = {props.Location}
                    />
                  
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>

      <div className="Categories" id="BabySitter">
        <h1 className="Title">BabySitter</h1>
        <div className="Slider">
          {data.map((props, index) => {
            if (props.verified === "TRUE" && props.occupation === "babysitter") {
              return (
                <div  key={props.id} onClick={() => handleClick(props,index)}>
                
                    <ProfileBox 
                     firstName={props.firstName}
                     lastName={props.lastName}
                     Age={props.Age}
                     occupation={props.occupation}
                     qualifications={props.qualifications}
                     question1={props.question1}
                     question2={props.question2}
                     Pets={props.Pets}
                     reasoning={props.reasoning}
                     profilePic={props.profilePic}
                     askingSalary={props.askingSalary}
                     salaryNegotiable={props.salaryNegotiable}
                     strength1={props.strength1}
                     strength2={props.strength2}
                     strength3={props.strength3}
                     strength4={props.strength4}
                     WorkExperience={props.WorkExperience}
                     tingkatpendidikan={props.tingkatpendidikan}
                     Anak={props.Anak}
                     Gender={props.Gender}
                     Location = {props.Location}
                    />
                  
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}
