// EcoRating.js
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Route,Routes } from 'react-router-dom';
import { faCalendar, faTools, faRecycle, faCloud, faTree } from '@fortawesome/free-solid-svg-icons';
import AllProducts from '../pages/AllProducts';

<>
<Routes>
    <Route path="/all-products" element={<AllProducts />} />
</Routes>
</>
const CriteriaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 60px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
    width: 30%;
  }

  h3 {
    margin-top: 10px;
    margin-bottom: 12px;
  }
`;

const EnvironmentalCriteria = () => {
    return (
      <CriteriaContainer>
        <div>
          <FontAwesomeIcon icon={faCalendar} size="2x" />
          <h3>Durability</h3>
          <p>Covers the robustness of the device, the battery life and the guarantee period of the device and its components.</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faTools} size="2x" />
          <h3>Repairability</h3>
          <p>Covers the ease with which the device can be repaired, including mobile phone design and supporting activities that could increase the useful life of the product by improving its repairability, reusability and upgradability potential. A high score indicates how well these aspects are supported.</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faRecycle} size="2x" />
          <h3>Recyclability</h3>
          <p>Covers how well the device components can be recovered and disassembled, the provided information to allow it, and how well its materials can be recycled.</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faCloud} size="2x" />
          <h3>Climate efficiency</h3>
          <p>Assesses the GHG emissions during the whole life cycle; the better the score here, the higher the contribution to climate protection.</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faTree} size="2x" />
          <h3>Resource efficiency</h3>
          <p>Assesses the impact caused by the amount of scarce raw materials required by the device (e.g. gold for the manufacturing of electronic components) towards the resources depletion; the better the score here, the lower the impact is towards the availability of materials.</p>
        </div>
      </CriteriaContainer>
    );
  };
  


const HarmonizedEnvironmentalScoringSystem = () => {
    // Assume progress values are between 0 and 100
    const progressValues = [82, 65, 56, 93, 75];

    return (
        <StyledContainer>
            <div className="categories">
                {progressValues.map((value, index) => (
                    <div className="category" key={index}>
                        <h3>{getCategoryName(index)}</h3>
                        <StyledProgress value={value} max="100" />
                    
                    </div>
                ))}
            </div>
        </StyledContainer>
    );
};

const getCategoryName = (index) => {
    switch (index) {
        case 0:
            return 'Durability';
        case 1:
            return 'Repairability';
        case 2:
            return 'Resource efficiency';
        case 3:
            return 'Climate efficiency';
        case 4:
            return 'Recyclability';
        default:
            return '';
    }
};

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: auto;
  padding: 20px; 

  .categories {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .category {
    width: 50%;
    padding: 20px;
    margin: 10px 0;
  }

  .category h3 {
    margin-top: 0;
    font-size: 1.2rem;
    color: #a9afc3; 
  }

  p {
    font-size: 2rem;
    margin-bottom: 0;
    text-align: justify;
  }

  a {
    text-decoration: none;
    color: red;
  }
`;

// ... Other imports ...

const StyledProgress = styled.progress`
  width: 80%;
  height: 10px;
  margin: 10px 0;
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;

  /* Use linear gradient to set color based on value */
  &::-webkit-progress-value {
    background: linear-gradient(to right, #3498db, #3498db ${props => props.value}%, #e74c3c ${props => props.value}%, #e74c3c);
    border-radius: 10px;
    transition: width 0.5s ease-in-out;
  }

  &::-webkit-progress-bar {
    background-color: #eee;
    border-radius: 10px;
  }
`;


// Define a styled component with SCSS-like syntax
const EcoRatingContainer = styled.div`
   max-width: 1300px;
   margin: auto;
   padding: 60px;
   text-align: left;
   line-height: 2; 

   h2 {
      color: #ED1D24; 
   }

   p {
      line-height: 2; 
    text-align: justify;
   }

   ul {
      list-style-type: disc; 
      padding-left: 40px
   }
`;
const StyledTable = styled.table`
  width: 60%;
  margin: auto;
  border-collapse: collapse;
  margin-top: 20px;
  text-align: center;

  th, td {
    border: 1px solid #ddd;
    padding: 10px;
  }

  th {
    background-color: #f2f2f2;
  }
  .black {
    color: black;
  }

`;
const rotateIn = keyframes`
    from {
        transform: perspective(500px) rotateX(90deg);
    }
    to {
        transform: perspective(500px) rotateX(0deg);
    }
`;

const pulse = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`;

// Styled component for the 3D animation button
const StyledButton = styled.button`
    position: relative;
    overflow: hidden;
    padding: 15px 25px;
    font-size: 1.2rem;
    background: linear-gradient(45deg, #ff8a00, #e52e71);
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transform-style: preserve-3d;
    transition: transform 0.5s ease, background 0.3s ease;

    &:hover {
        background: linear-gradient(45deg, #e52e71, #ff8a00);
        transform: perspective(500px) rotateX(360deg);
    }

    span {
        display: inline-block;
        position: relative;
        text-align: center;
        animation: ${rotateIn} 0.5s ease, ${pulse} 2s infinite;
        transform: translateZ(25px);
    }
`;

const CenteredContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;  // Adjust as needed
`;

const EcoRating = () => {

    const navigate = useNavigate();

const navigateToAllProducts = () => {
    navigate('/all-products');
};


    return (
        
       <EcoRatingContainer>
        <br></br>
        
          <h2><b>What is Eco Rating?</b></h2>
          <p>
          Eco Rating evaluates the environmental impact of the entire process of production, transportation, use and disposal of mobile phones.</p>
          <ul>
             <li>Helps customers to make informed and more sustainable choices</li>
             <li>Encourages suppliers to reduce the environmental impact of their devices</li>
             <li>Aligns the industry in improving transparency and reducing its environmental footprint</li>
          </ul>
          <p>
          The Eco Rating evaluation assesses devices’ different environmental indicators (e.g. carbon footprint or resource depletion) and material efficiency criteria, which results in an overall score on a scale from 1 to 100. The closer the score is to 100, the better the sustainability performance of the device.
          </p>
          <br></br>
          <br></br>
          <h2>Harmonized Environmental Scoring System</h2>
          <br></br>
          <StyledTable>
            <thead>
              <tr>
              <th className="black">Eco Rating</th>
                <th className="black">Opinion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0-50</td>
                <td>Worst</td>
              </tr>
              <tr>
                <td>50-65</td>
                <td>Okay</td>
              </tr>
              <tr>
                <td>65-75</td>
                <td>Good</td>
              </tr>
              <tr>
                <td>75-100</td>
                <td>Excellent</td>
              </tr>
            </tbody>
          </StyledTable>
          <br></br>
          
          <HarmonizedEnvironmentalScoringSystem />
          <CenteredContainer>
            <StyledButton onClick={navigateToAllProducts}>
                <span><b>Browse All <br /> Products <BsArrowRight /></b></span>
            </StyledButton>
            </CenteredContainer>
            <br></br>
            <br></br>
          <h2>Why did we introduce Eco Rating?</h2>
          <p>Mobile phone consumers are increasingly aware of how the device choices they make can contribute to minimising climate impact and lead to a more environmentally sustainable industry.</p>
      <p>Building a more sustainable future is our joint responsibility. The consortium behind Eco Rating believes the time is right to have a harmonised, industry-wide Eco Rating that will improve transparency and help raise awareness of the environmental impact of the phones we supply, and our customers choose.</p>
      <p>We are convinced that Eco Rating can motivate and inspire the whole mobile industry to accelerate its transition towards a more circular model for mobile phones.</p>
     <br></br>
      <EnvironmentalCriteria />
       </EcoRatingContainer>
       
     
    );
 };
 
 export default EcoRating;
