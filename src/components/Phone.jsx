import React, { useState } from "react";
import OtpLogin from "./OtpLogin";

const Phone = () => {
  const [phone, setPhone] = useState("0123456789");
  const [showotp, setShowotp] = useState(false);

  function handleChange(e) {
    setPhone(e.target.value);
  }

  function validateNumber() {
    if (phone.length === 10) {
      setShowotp(true);
    } else {
      alert("Please enter a valid 10-digit phone number.");
    }
  }

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  };

  const inputStyle = {
    padding: "10px",
    fontSize: "18px",
    margin: "10px 0",
    width: "200px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    outline: "none",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#007bff",
    color: "#fff",
    margin: "10px 0",
  };

  const titleStyle = {
    marginBottom: "20px",
    fontSize: "24px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Phone Login System</h1>
      <input
        type="number"
        value={phone}
        onChange={handleChange}
        style={inputStyle}
        placeholder="Enter phone number"
      />
      <button onClick={validateNumber} style={buttonStyle}>
        Validate
      </button>
      {showotp && <OtpLogin />}
    </div>
  );
};

export default Phone;
