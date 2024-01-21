import React, { useState } from "react";
import axios from "axios";



export const Checkout = async () => {
    const data = {
      id:"",
      firstname: "",
      price: "",
      lastname: ""
    };
  
    try {
      const response = await fetch('/route', {
        method: "post",
        headers: {
          Accept: 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const requestData = await response.json();
      window.snap.pay(requestData.token);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };