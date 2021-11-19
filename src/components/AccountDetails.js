import styled from 'styled-components';
import womanAndPlant from '../assets/images/details-background.png';
import { StyledButton } from '../assets/styles/ButtonStyle';

export default function AccountDetails() {
  return (
    <StyledAccountDetailsContainer>
      <StyledImgContainer>
        <img src={womanAndPlant} alt="" />
      </StyledImgContainer>
      <StyledPlanInfoBox>
        <span className="line-container">
          <h2>Plan</h2>
          <p>PlanType</p>
        </span>
        <span className="line-container">
          <h2>Subscription date</h2>
          <p>date</p>
        </span>
        <span className="line-container">
          <h2>Next deliveries</h2>
          <ul className="items-box">
            <li>dates</li>
            <li>dates</li>
            <li>dates</li>
          </ul>
        </span>
        <span className="line-container">
          <h2>Products</h2>
          <ul className="items-box">
            <li>product</li>
            <li>product</li>
            <li>product</li>
          </ul>
        </span>
        <ButtonContainer>
          <StyledButton>
            Review deliveries
          </StyledButton>
        </ButtonContainer>
      </StyledPlanInfoBox>
    </StyledAccountDetailsContainer>
  );
}

const StyledAccountDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 0;
    width: 100%;
    height: 450px;
    position: relative;
`;
const StyledImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 280px;
    overflow: hidden;
    border-radius: 50%;
    img {
      width: 600px;
      opacity: 0.2;
    }
`;
const StyledPlanInfoBox = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    color: #ffffff;
    font-size: 18px;
    .line-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      border-bottom: 1px solid #ffffff;
      padding: 10px 0;
      h2 {
        font-weight: 700;
      }
    }
    .items-box {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
`;
const ButtonContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
