/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import womanAndPlant from '../assets/images/details-background.png';
import {
  StyledGreetings, StyledSubGreetings, StyledPageContainer, StyledTopContainer,
} from '../assets/styles/SharedStyle';
import UserContext from '../store/UserContext';
import SubscriptionPlan from '../components/SubscriptionPlan';
import SubscriptionAdress from '../components/SubscriptionAddress';
import { getUserPlan } from '../services/api';

export default function Subscription() {
  const {
    userName, setUserName, userPlanInfo, setUserPlanInfo,
  } = useContext(UserContext);
  const [subscriptionSection, setSubscriptionSection] = useState('plan');
  const [allnewPlanInfo, setAllnewPlanInfo] = useState('');

  const requestUserPlan = () => {
    const userSession = JSON.parse(localStorage.getItem('gratiBoxSession'));
    if (!userSession) {
      return;
    }
    const { token, name } = userSession;
    setUserName(name);

    getUserPlan(token)
      .then((res) => {
        if (res.status === 204) {
          return;
        }
        setUserPlanInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    requestUserPlan();
  }, []);

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
      {userPlanInfo !== '' ? (
        <StyledNotAllowedContainer>
          <StyledNotAllowedMessage>
            You've already signed up for a plan!
            Soon enough you will be able to change plan information or cancel it!
          </StyledNotAllowedMessage>
        </StyledNotAllowedContainer>
      ) : (
        <StyledSubscriptionContainer>
          <StyledImgContainer>
            <img src={womanAndPlant} alt="" />
          </StyledImgContainer>
          {subscriptionSection === 'plan' ? (
            <SubscriptionPlan
              setSubscriptionSection={setSubscriptionSection}
              setAllnewPlanInfo={setAllnewPlanInfo}
            />
          ) : (
            <SubscriptionAdress allnewPlanInfo={allnewPlanInfo} />
          )}
        </StyledSubscriptionContainer>
      )}
    </StyledPageContainer>
  );
}

const StyledNotAllowedContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px 0;
    width: 100%;
    height: 450px;
`;
const StyledNotAllowedMessage = styled.p`
    font-size: 23px;
    text-align: center;
    margin-top: 100px;
    width: 260px;
    color: #ffffff;
    line-height: 28px;
`;
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
