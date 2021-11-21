/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { IoArrowDownCircleSharp as BottomArrow, IoArrowUpCircleSharp as TopArrow } from 'react-icons/io5';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import womanAndPlant from '../assets/images/details-background.png';
import { StyledButton } from '../assets/styles/ButtonStyle';
import {
  StyledGreetings, StyledSubGreetings, StyledPageContainer, StyledTopContainer,
} from '../assets/styles/SharedStyle';
import UserContext from '../store/UserContext';

export default function Subscription() {
  const { userName } = useContext(UserContext);
  const [isPlanOpen, setIsPlanOpen] = useState(false);
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [planType, setPlanType] = useState('');
  const [planDay, setPlanDay] = useState('');
  const [planProducts, setPLanProducts] = useState('');

  return (
    <StyledPageContainer>
      <StyledTopContainer>
        <StyledGreetings>
          {`Good to see you here, ${userName}`}
        </StyledGreetings>
        <StyledSubGreetings>
          <i>
            "Giving thanks is the art of attracting good things"
          </i>
        </StyledSubGreetings>
      </StyledTopContainer>
      <StyledSubscriptionContainer>
        <StyledImgContainer>
          <img src={womanAndPlant} alt="" />
        </StyledImgContainer>
        <StyledInfoBox>
          <span className="choices-container">
            <h2>Plan</h2>
            {isPlanOpen ? (
              <>
                <TopArrow className="arrow-icon" onClick={() => setIsPlanOpen(false)} />
                <DropDownBox>
                  <span className="option">
                    Weekly
                  </span>
                  <span className="option">
                    Monthly
                  </span>
                </DropDownBox>
              </>
            ) : (
              <BottomArrow className="arrow-icon" onClick={() => setIsPlanOpen(true)} />
            )}
          </span>
          <span className="choices-container">
            <h2>Delivery</h2>
            {isDeliveryOpen ? (
              <>
                <TopArrow className="arrow-icon" onClick={() => setIsDeliveryOpen(false)} />
                <DropDownBox>
                  oi
                </DropDownBox>
              </>
            ) : (
              <BottomArrow className="arrow-icon" onClick={() => setIsDeliveryOpen(true)} />
            )}
          </span>
          <span className="choices-container">
            <h2>Products</h2>
            {isProductsOpen ? (
              <>
                <TopArrow className="arrow-icon" onClick={() => setIsProductsOpen(false)} />
                <DropDownBox>
                  oi
                </DropDownBox>
              </>
            ) : (
              <BottomArrow className="arrow-icon" onClick={() => setIsProductsOpen(true)} />
            )}
          </span>
          <ButtonContainer>
            <StyledButton>
              Next
            </StyledButton>
          </ButtonContainer>
        </StyledInfoBox>
      </StyledSubscriptionContainer>
    </StyledPageContainer>
  );
}

const StyledSubscriptionContainer = styled.div`
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
const StyledInfoBox = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    color: #ffffff;
    font-size: 18px;
    .choices-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ffffff;
      padding: 10px 0;
      position: relative;
      h2 {
        font-weight: 700;
      }
      .arrow-icon {
        font-size: 35px;
        cursor: pointer;
      }
    }
`;
const DropDownBox = styled.div`
    background-color: #ffffff;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    width: 100%;
    position: absolute;
    bottom: -48px;
    color: #6D7CE4;
    font-weight: 700;
    padding: 15px;
    display: flex;
    justify-content: center;
    gap: 70px;
    z-index: 1;
    .option {
        display: flex;
        align-items: center;
        gap: 10px;
        opacity: 0.8;
        cursor: pointer;
        :hover {
            opacity: 100%;
        }
    }
`;
const ButtonContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
