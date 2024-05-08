import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CongratPage = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const timerId = setTimeout(() => {
      
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);

   
    return () => clearTimeout(timerId);
  }, [timer]); 

  
  useEffect(() => {
    if (timer === 0) {
      navigate('/'); 
    }
  }, [timer, navigate]);

  return (
    <div>
      <h1>Congratulations!</h1>
      <p>This page will automatically navigate in {timer} seconds...</p>
    </div>
  );
};

export default CongratPage;
