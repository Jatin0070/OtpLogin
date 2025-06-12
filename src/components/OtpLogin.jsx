import React, { useEffect, useRef, useState } from "react";

const OtpLogin = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [activeIndex, setActiveIndex] = useState(0); // Track the active input index
  const ref = useRef([]);

  useEffect(() => {
    if (ref.current[0]) {
      ref.current[0].focus();
    }
  }, []);

  function handleChange(index, e) {
    const val = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = val.substring(val.length - 1);
    setOtp(newOtp);

    // Move to the next input field if the current one has a value
    if (val && index < ref.current.length - 1) {
      ref.current[index + 1].focus();
    }
  }

  const handleFocus = (index) => {
    setActiveIndex(index);
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  };

  const inputContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  };

  const inputStyle = {
    width: "40px",
    height: "40px",
    fontSize: "20px",
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "4px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const activeInputStyle = {
    ...inputStyle,
    borderColor: "#007bff",
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "5px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#007bff",
    color: "#fff",
  };

  const clearButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#6c757d",
  };

  return (
    <div style={containerStyle}>
      <div style={inputContainerStyle}>
        {otp.map((item, index) => (
          <input
            type="text"
            key={index}
            ref={(input) => (ref.current[index] = input)}
            value={item}
            style={index === activeIndex ? activeInputStyle : inputStyle}
            maxLength="1"
            onChange={(e) => handleChange(index, e)}
            onFocus={() => handleFocus(index)}
          />
        ))}
      </div>
      <div>
        <button style={clearButtonStyle} onClick={() => setOtp(["", "", "", ""])}>
          Clear
        </button>
        <button style={buttonStyle} onClick={() => console.log(otp)}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default OtpLogin;
