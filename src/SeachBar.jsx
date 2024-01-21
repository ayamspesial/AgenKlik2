import React, { useEffect, useState } from "react";
import "./MaidHome.css";
import ProfileBox from "./ProfileBox";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AgenKlikPhoto from "./AgenKlik Blue  Logo.png";

export default function SearchResult() {
  const location = useLocation();
  const stateData = location.state;
  const navigate = useNavigate();

  function FetchData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const url = "https://sheetdb.io/api/v1/yc2k6t3iekggk";

      axios
        .get(url)
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);

    return { data, loading, error };
  }

  const { data, loading, error } = FetchData();

  function handleClick(props, index) {
    if (!loading && !error) {
      const state = {
        key: index,
        name: props.name,
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
      };

      // Use navigate to go to the '/Listing' route with the specified state
      navigate('/Listing', { state });
    } else {
      alert("Oops, an error occurred. Please try again soon");
    }
  }

  return (
    <div className="Categories">
      <h1 className="Title"> Hasil untuk: {stateData.firstName} {stateData.lastName} </h1>
      <div className="Slider">
        {loading && <p>Loading...</p>}
        {error && <p>Error loading data. Please try again later.</p>}
        {!loading &&
          data.map((props, index) => {
            if (props.verified.toLowerCase() === "true" &&
            props.firstName.toLowerCase() === stateData.firstName.toLowerCase() &&
            props.lastName.toLowerCase() === stateData.lastName.toLowerCase()) {
              return (
                <div onClick={() => handleClick(props, index)} key={index}>
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
                  />
                </div>
              );
            } else {
              return null;
            }
          })}

v


      </div>



 
    </div>
  );
}



  
  

