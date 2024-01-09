import React, { useEffect, useState } from "react";
import "./MaidHome.css";
import ProfileBox from "./ProfileBox";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AgenKlikPhoto from "./AgenKlik Blue  Logo.png"

export default function Pembantu(){


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
      
      const { data, Rendered } = FetchData();
      const navigate = useNavigate()
  
      
      
      function handleClick(props, index) {
      
      
      if(Rendered === true ){
          const state = {
            key: index,
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
          } 
      
          // Use navigate to go to the '/Listing' route with the specified state
          navigate('/Listing', { state });}
          else{alert("Oops error occured please try again soon")}
        }


        return(
            
            <div className="Categories" >
              <h1 className="Title">PRT</h1>
              <div className="Slider">
                {data.map((props, index) => {
                  if (props.verified === "TRUE" && props.occupation === "Pembantu") {
                    return (
                      <div onClick={() => handleClick(props,index)}>
                      
                      <ProfileBox 
                        key={index}
                        name={props.name}
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
                      />
                    
                  </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>)






}