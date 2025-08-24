// src/pages/HomePage.js

import React from 'react';
import styled from 'styled-components';
import TargetInput from '../components/TargetInput'; // Adjust path if needed

const HomePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: #1A202C; /* A dark, deep-space color */
  padding: 20px;
`;

const HomePage = () => {
  
  const handleFinalize = (target) => {
    // In a real app, you would save this target to your state management
    // (Context API, Redux) and/or backend (Firebase Firestore),
    // then navigate the user to the dashboard.
    console.log("Target finalized:", target);
    alert(`Your target "${target}" has been set! Now redirecting to dashboard...`);
    // Example: history.push('/dashboard');
  };

  return (
    <HomePageWrapper>
      <TargetInput onFinalize={handleFinalize} />
    </HomePageWrapper>
  );
};

export default HomePage;
