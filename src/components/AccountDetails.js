/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import {
  nextMonday, nextWednesday, nextFriday, format, addDays,
} from 'date-fns';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import womanAndPlant from '../assets/images/details-background.png';
import { StyledButton } from '../assets/styles/ButtonStyle';

export default function AccountDetails({ userPlanInfo }) {
  const [nextDates, setNextDates] = useState([]);

  const calculateNextDeliveryDates = () => {
    const initialDate = new Date(userPlanInfo.signatureDate);
    let nextDate1;

    if (userPlanInfo.planDay === 'Monday') {
      nextDate1 = nextMonday(initialDate);
    }
    if (userPlanInfo.planDay === 'Wednesday') {
      nextDate1 = nextWednesday(initialDate);
    }
    if (userPlanInfo.planDay === 'Friday') {
      nextDate1 = nextFriday(initialDate);
    }
    const nextDate2 = addDays(nextDate1, 7);
    const nextDate3 = addDays(nextDate2, 7);
    const formatedNextDate1 = format(new Date(Date.parse(nextDate1)), 'yyyy-MM-dd');
    const formatedNextDate2 = format(new Date(Date.parse(nextDate2)), 'yyyy-MM-dd');
    const formatedNextDate3 = format(new Date(Date.parse(nextDate3)), 'yyyy-MM-dd');

    setNextDates([formatedNextDate1, formatedNextDate2, formatedNextDate3]);
  };

  useEffect(() => {
    calculateNextDeliveryDates();
  }, []);

  return (
    <StyledAccountDetailsContainer>
      <StyledImgContainer>
        <img src={womanAndPlant} alt="" />
      </StyledImgContainer>
      <StyledPlanInfoBox>
        <span className="line-container">
          <h2>Plan</h2>
          <p>
            {userPlanInfo.planType === 'Weekly' ? (
              `Weekly - every ${userPlanInfo.planDay}`
            ) : (
              `Monthly - every day ${userPlanInfo.planDay}`
            )}
          </p>
        </span>
        <span className="line-container">
          <h2>Subscription date</h2>
          <p>{userPlanInfo.signatureDate.split('T')[0]}</p>
        </span>
        <span className="line-container">
          <h2>Next deliveries</h2>
          <ul className="items-box">
            {nextDates.map((date) => <li>{date}</li>)}
          </ul>
        </span>
        <span className="line-container">
          <h2>Products</h2>
          <ul className="items-box">
            {userPlanInfo.userProducts.map((product) => <li>{product.name}</li>)}
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
      li {
        text-align: right;
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
