/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-constant-condition */
import { useEffect, useState, useContext } from 'react';
import {
  StyledGreetings, StyledSubGreetings, StyledPageContainer, StyledTopContainer,
} from '../assets/styles/SharedStyle';
import PlansOptions from '../components/PlansOptions';
import AccountDetails from '../components/AccountDetails';
import { getUserPlan } from '../services/api';
import UserContext from '../store/UserContext';

export default function MainPage() {
  const [userPlanInfo, setUserPlanInfo] = useState('');
  const { userName, setUserName } = useContext(UserContext);

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
        console.log(res.data);
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
    </StyledPageContainer>
  );
}
