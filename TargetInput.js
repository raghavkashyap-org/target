// src/components/TargetInput.js

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const InputWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  text-align: center;
`;

const MainHeading = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  font-weight: 600;
  letter-spacing: 1px;
`;

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 15px 25px;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  width: 100%;
  max-width: 500px;
  backdrop-filter: blur(10px);
  transition: box-shadow 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 15px rgba(0, 245, 160, 0.5);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const FinalizeButton = styled(motion.button)`
  padding: 15px 40px;
  border-radius: 50px;
  border: none;
  font-size: 1.2rem;
  font-weight: 600;
  color: #1a202c;
  cursor: pointer;
  background: linear-gradient(90deg, #00F5A0, #00D9F5);
  transition: transform 0.2s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 245, 160, 0.6);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

const TargetInput = ({ onFinalize }) => {
  const [target, setTarget] = useState('');

  return (
    <InputWrapper initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <MainHeading>What is your next checkpoint?</MainHeading>
      <StyledInput
        type="text"
        placeholder="e.g., Learn React for 30 days"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
      />
      <FinalizeButton
        disabled={!target}
        onClick={() => onFinalize(target)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Finalize
      </FinalizeButton>
    </InputWrapper>
  );
};

export default TargetInput;
