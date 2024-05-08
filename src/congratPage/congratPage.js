import React, { useState, useEffect } from "react";
import "./congratPage.css";
import { useNavigate } from "react-router-dom";

const CongratPage = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timer]);

  useEffect(() => {
    if (timer === 0) {
      navigate("/");
    }
  }, [timer, navigate]);

  return (
    <div>
      <div className="navContainer">
        <div className="navlogo_">
          <img src="./uploads/logo.png" alt="not found" className="imgRotate" />
        </div>
        <div className="subcontainer"></div>
      </div>

      <div className="congCard">
        <p>
          <i
            className="fa-solid fa-circle-check icondata"
            style={{ color: "#28B246", fontSize: "4em", margin: "20px" }}
          />
        </p>
        <div className="regForm">Success Submitted</div>
        <div className="regTitle">Congratulations</div>
        <div className="request">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </div>
      </div>
      <p className="automat">
        Redirecting you to Homepage in <strong>{timer} Second</strong>
      </p>
    </div>
  );
};

export default CongratPage;
