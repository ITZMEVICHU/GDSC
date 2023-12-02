// GraphDisplay.js
import React from 'react';
import styled from 'styled-components';
import one from '../pages/one.png';
import two from '../pages/two.png';
import three from '../pages/three.png';

const GraphContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 50px;
  text-align: center;
`;

const GraphCard = styled.div`
  width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 20px;

  img {
    max-width: 100%;
    height: auto;
  }

  h3 {
    margin-top: 10px;
    font-size: 1.2rem;
    color: #333;
  }
`;

const Heading = styled.h1`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const DashGraphDisplay = () => {
  return (
    <GraphContainer>
      <GraphCard>
        <img src={one} alt="Graph 1" />
        <h3>Graph 1</h3>
      </GraphCard>
      <GraphCard>
        <img src={two} alt="Graph 2" />
        <h3>Graph 2</h3>
      </GraphCard>
      <GraphCard>
        <img src={three} alt="Graph 3" />
        <h3>Graph 3</h3>
      </GraphCard>
      
      <Heading>Sentimental Analysis</Heading>
    </GraphContainer>
  );
};

export default DashGraphDisplay;
