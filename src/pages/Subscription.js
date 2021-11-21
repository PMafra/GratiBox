/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from 'react';
import styled from 'styled-components';
import womanAndPlant from '../assets/images/details-background.png';
import {
  StyledGreetings, StyledSubGreetings, StyledPageContainer, StyledTopContainer,
} from '../assets/styles/SharedStyle';
import UserContext from '../store/UserContext';
import SubscriptionPlan from '../components/SubscriptionPlan';
import SubscriptionAdress from '../components/SubscriptionAddress';

export default function Subscription() {
  const { userName } = useContext(UserContext);
  const [subscriptionSection, setSubscriptionSection] = useState('plan');
  const [allUserPlanInfo, setAllUserPlanInfo] = useState('');

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
        {subscriptionSection === 'plan' ? (
          <SubscriptionPlan
            setSubscriptionSection={setSubscriptionSection}
            setAllUserPlanInfo={setAllUserPlanInfo}
          />
        ) : (
          <SubscriptionAdress allUserPlanInfo={allUserPlanInfo} />
        )}
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
