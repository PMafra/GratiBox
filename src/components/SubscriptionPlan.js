/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import {
  IoArrowDownCircleSharp as BottomArrow,
  IoArrowUpCircleSharp as TopArrow,
  IoRadioButtonOffSharp as NotMarked,
  IoHeartCircleOutline as Marked,
} from 'react-icons/io5';
import styled from 'styled-components';
import { StyledButton } from '../assets/styles/ButtonStyle';

export default function SubscriptionPlan({ setSubscriptionSection, setAllnewPlanInfo }) {
  const [isPlanOpen, setIsPlanOpen] = useState(false);
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [planType, setPlanType] = useState('');
  const [planDay, setPlanDay] = useState('');
  const [isTeas, setIsTeas] = useState(false);
  const [isIncense, setIsIncense] = useState(false);
  const [isOrganic, setIsOrganic] = useState(false);

  const goToAdressSection = () => {
    if (planType !== '' && planDay !== '' && (isTeas || isIncense || isOrganic)) {
      const userProducts = [];
      if (isTeas) {
        userProducts.push('teas');
      }
      if (isIncense) {
        userProducts.push('incense');
      }
      if (isOrganic) {
        userProducts.push('organic products');
      }
      setAllnewPlanInfo({
        planType,
        planDay,
        products: userProducts,
      });
      setSubscriptionSection('address');
    }
  };

  return (
    <StyledInfoBox>
      <span className="choices-container">
        <h2>Plan</h2>
        {isPlanOpen ? (
          <>
            <TopArrow className="arrow-icon" onClick={() => setIsPlanOpen(false)} />
            <DropDownBox>
              <span className="option" onClick={() => setPlanType('weekly')}>
                {planType === 'weekly' ? (
                  <Marked className="heart-circle" />
                ) : (
                  <NotMarked className="empty-circle" />
                )}
                Weekly
              </span>
              <span className="option" onClick={() => setPlanType('monthly')}>
                {planType === 'monthly' ? (
                  <Marked className="heart-circle" />
                ) : (
                  <NotMarked className="empty-circle" />
                )}
                Monthly
              </span>
            </DropDownBox>
          </>
        ) : (
          <BottomArrow className="arrow-icon" onClick={() => setIsPlanOpen(true)} />
        )}
      </span>
      <span className="choices-container">
        <h2>Delivery day</h2>
        {isDeliveryOpen ? (
          <>
            <TopArrow className="arrow-icon" onClick={() => setIsDeliveryOpen(false)} />
            {planType === 'weekly' ? (
              <DropDownBox>
                <span className="option" onClick={() => setPlanDay('monday')}>
                  {planDay === 'monday' ? (
                    <Marked className="heart-circle" />
                  ) : (
                    <NotMarked className="empty-circle" />
                  )}
                  Monday
                </span>
                <span className="option" onClick={() => setPlanDay('wednesday')}>
                  {planDay === 'wednesday' ? (
                    <Marked className="heart-circle" />
                  ) : (
                    <NotMarked className="empty-circle" />
                  )}
                  Wednesday
                </span>
                <span className="option" onClick={() => setPlanDay('friday')}>
                  {planDay === 'friday' ? (
                    <Marked className="heart-circle" />
                  ) : (
                    <NotMarked className="empty-circle" />
                  )}
                  Friday
                </span>
              </DropDownBox>
            ) : ('')}
            {planType === 'monthly' ? (
              <DropDownBox>
                <span className="option" onClick={() => setPlanDay('1')}>
                  {planDay === '1' ? (
                    <Marked className="heart-circle" />
                  ) : (
                    <NotMarked className="empty-circle" />
                  )}
                  Day 01
                </span>
                <span className="option" onClick={() => setPlanDay('10')}>
                  {planDay === '10' ? (
                    <Marked className="heart-circle" />
                  ) : (
                    <NotMarked className="empty-circle" />
                  )}
                  Day 10
                </span>
                <span className="option" onClick={() => setPlanDay('20')}>
                  {planDay === '20' ? (
                    <Marked className="heart-circle" />
                  ) : (
                    <NotMarked className="empty-circle" />
                  )}
                  Day 20
                </span>
              </DropDownBox>
            ) : ('')}
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
              <span className="option" onClick={() => setIsTeas(!isTeas)}>
                {isTeas ? (
                  <Marked className="heart-circle" />
                ) : (
                  <NotMarked className="empty-circle" />
                )}
                Teas
              </span>
              <span className="option" onClick={() => setIsIncense(!isIncense)}>
                {isIncense ? (
                  <Marked className="heart-circle" />
                ) : (
                  <NotMarked className="empty-circle" />
                )}
                Insence
              </span>
              <span className="option" onClick={() => setIsOrganic(!isOrganic)}>
                {isOrganic ? (
                  <Marked className="heart-circle" />
                ) : (
                  <NotMarked className="empty-circle" />
                )}
                Organic Products
              </span>
            </DropDownBox>
          </>
        ) : (
          <BottomArrow className="arrow-icon" onClick={() => setIsProductsOpen(true)} />
        )}
      </span>
      <ButtonContainer>
        <StyledButton onClick={() => goToAdressSection()}>
          Next
        </StyledButton>
      </ButtonContainer>
    </StyledInfoBox>
  );
}

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
    bottom: -55px;
    color: #6D7CE4;
    font-weight: 700;
    padding: 15px;
    display: flex;
    justify-content: center;
    gap: 20px;
    z-index: 1;
    background-color: #ffffff;
    .option {
        display: flex;
        align-items: center;
        cursor: pointer;
        .empty-circle, .heart-circle {
            font-size: 25px;
        }
    }
`;
const ButtonContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
