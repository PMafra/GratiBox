/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-constant-condition */
import { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  StyledGreetings, StyledSubGreetings, StyledPageContainer, StyledTopContainer,
} from '../assets/styles/SharedStyle';
import PlansOptions from '../components/PlansOptions';
import AccountDetails from '../components/AccountDetails';
import { getUserPlan } from '../services/api';
import UserContext from '../store/UserContext';

export default function MainPage() {
  const {
    userName, setUserName, userPlanInfo, setUserPlanInfo,
  } = useContext(UserContext);
  const history = useHistory();

  const requestUserPlan = () => {
    const userSession = JSON.parse(localStorage.getItem('gratiBoxSession'));
    if (!userSession) {
      return history.push('/welcome');
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
        <AccountDetails />
      )}
    </StyledPageContainer>
  );
}
