import React, { useState } from 'react';
import './TransactionForm.css'

import Footer from './Footer';
import Navbar from './Navbar';



const loadScript = (src) => {
  return new Promise((resovle) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => {
      resovle(true);
    };

    script.onerror = () => {
      resovle(false);
    };

    document.body.appendChild(script);
  });
};

const displayRazorpay = async (amount,fullName) => {
  const res = await loadScript(
    "https://checkout.razorpay.com/v1/checkout.js"
  );

  if (!res) {
    alert("Check your Internet Connection. ");
    return;
  }

  const options = {
    key: "rzp_test_Fem4ZB4a2MwGdK",
    currency: "INR",
    amount: amount * 100,
    name: fullName,
    description: "Efforts funded successfully",
    image:"",
      
    handler: function (response) {
      alert(response.razorpay_payment_id);
      alert("Payment Successfully");


    },
    prefill: {
      name: fullName,
    },
    
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};







const TransactionForm = ()=>
{

  const [fullName, setFullName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    displayRazorpay(amount, fullName);
  };
  return (
    <>
    <Navbar/>
    <div className='outerForm'>
   
    <form className= "myForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Name :</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          
        />
      </div>
      
     
      <div>
        <label htmlFor="amount">Amount :</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={amount}
            onChange={(e) => setAmount(e.target.value)}
        
        />
      </div>
      <button className='btnForSub' type="submit" >Submit</button>
    </form>
    </div>
    <Footer/>
    </>
  );
};

export default TransactionForm;
