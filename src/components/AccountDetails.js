/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import {
  nextMonday, nextWednesday, nextFriday, format, addDays, addMonths,
} from 'date-fns';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import womanAndPlant from '../assets/images/details-background.png';
import { StyledButton } from '../assets/styles/ButtonStyle';

export default function AccountDetails({ userPlanInfo }) {
  const [nextDates, setNextDates] = useState([]);

  const calculateNextWeeklyDeliveries = () => {
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

  function getNextWeekday(date) {
    const tomorrow = new Date(date.setDate(date.getDate() + 1));
    return tomorrow.getDay() % 6
      ? (tomorrow)
      : (getNextWeekday(tomorrow));
  }

  const calculateNextMonthDeliveries = () => {
    const initialDate = new Date(userPlanInfo.signatureDate);

    if (userPlanInfo.planDay === '1') {
      initialDate.setMonth(initialDate.getMonth() + 1, 1);
    }
    if (userPlanInfo.planDay === '10') {
      initialDate.setMonth(initialDate.getMonth() + 1, 10);
    }
    if (userPlanInfo.planDay === '20') {
      initialDate.setMonth(initialDate.getMonth() + 1, 20);
    }
    const nextDate1 = initialDate;
    const nextDate2 = addMonths(nextDate1, 1);
    const nextDate3 = addMonths(nextDate2, 1);
    const formatedNextDate1 = format(new Date(Date.parse(nextDate1)), 'yyyy-MM-dd');
    const formatedNextDate2 = format(new Date(Date.parse(nextDate2)), 'yyyy-MM-dd');
    const formatedNextDate3 = format(new Date(Date.parse(nextDate3)), 'yyyy-MM-dd');

    const businessDate1 = getNextWeekday(new Date(formatedNextDate1));
    const businessDate2 = getNextWeekday(new Date(formatedNextDate2));
    const businessDate3 = getNextWeekday(new Date(formatedNextDate3));

    const formatedBusinessDate1 = format(new Date(Date.parse(businessDate1)), 'yyyy-MM-dd');
    const formatedBusinessDate2 = format(new Date(Date.parse(businessDate2)), 'yyyy-MM-dd');
    const formatedBusinessDate3 = format(new Date(Date.parse(businessDate3)), 'yyyy-MM-dd');

    setNextDates([formatedBusinessDate1, formatedBusinessDate2, formatedBusinessDate3]);
  };

  useEffect(() => {
    if (userPlanInfo.planType === 'Weekly') {
      calculateNextWeeklyDeliveries();
    } else {
      calculateNextMonthDeliveries();
    }
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
