// src/components/LiveClock.js

import React, { useState, useEffect } from 'react';
import { format, endOfDay, differenceInSeconds } from 'date-fns';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ClockWrapper = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  text-align: right;
  min-width: 280px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const TimeDisplay = styled.h1`
  font-family: 'Roboto Mono', monospace;
  font-size: 3rem;
  color: #fff;
  letter-spacing: 2px;
  margin: 0;
  text-shadow: 0 0 10px rgba(0, 245, 160, 0.7);
`;

const InfoText = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 5px 0 0 0;
  min-height: 30px; /* Reserve space to prevent layout shift */
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const quotes = [
  "Believe you can and you're halfway there.",
  "The secret of getting ahead is getting started.",
  "The journey of a thousand miles begins with a single step.",
  "Don't watch the clock; do what it does. Keep going.",
];

const LiveClock = () => {
  const [time, setTime] = useState(new Date());
  const [isHovered, setIsHovered] = useState(false);
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    if (isHovered) {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }
  }, [isHovered]);


  const timeLeft = differenceInSeconds(endOfDay(time), time);
  const hoursLeft = String(Math.floor(timeLeft / 3600)).padStart(2, '0');
  const minutesLeft = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
  const secondsLeft = String(timeLeft % 60).padStart(2, '0');
  
  return (
    <ClockWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <TimeDisplay>{format(time, 'HH:mm:ss')}</TimeDisplay>
      <InfoText>
        {isHovered 
          ? `"${quote}"` 
          : `Time left: ${hoursLeft}:${minutesLeft}:${secondsLeft}`
        }
      </InfoText>
    </ClockWrapper>
  );
};

export default LiveClock;
