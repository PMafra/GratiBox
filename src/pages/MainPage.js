/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-constant-condition */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { StyledGreetings, StyledSubGreetings } from '../assets/styles/SharedStyle';
import PlansOptions from '../components/PlansOptions';
import AccountDetails from '../components/AccountDetails';
import { getUserPlan } from '../services/api';

export default function Greetings() {
  const [userPlanInfo, setUserPlanInfo] = useState('');

  const requestUserPlan = () => {
    getUserPlan()
      .then((res) => {
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
    <StyledMainPageContainer>
      <StyledTopContainer>
        <StyledGreetings>
          Good to see you here, user
        </StyledGreetings>
        <StyledSubGreetings>
          {userPlanInfo === '' ? (
            'You haven`t signed a plan yet, how about starting now?'
          ) : (
            <i>
              "Giving thanks is the art of attracting good things"
            </i>
          )}
        </StyledSubGreetings>
      </StyledTopContainer>
      {userPlanInfo === '' ? (
        <PlansOptions />
      ) : (
        <AccountDetails userPlanInfo={userPlanInfo} />
      )}
    </StyledMainPageContainer>
  );
}

const StyledMainPageContainer = styled.div`
  height:100%;
  padding: 0px 25px;
`;
const StyledTopContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  margin-top: 60px;
`;
