/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-constant-condition */
import styled from 'styled-components';
import { StyledGreetings, StyledSubGreetings } from '../assets/styles/SharedStyle';
import PlansOptions from '../components/PlansOptions';
import AccountDetails from '../components/AccountDetails';

export default function Greetings() {
  return (
    <StyledMainPageContainer>
      <StyledTopContainer>
        <StyledGreetings>
          Good to see you here, user
        </StyledGreetings>
        <StyledSubGreetings>
          {true ? (
            'You haven`t signed a plan yet, how about starting now?'
          ) : (
            <i>
              "Giving thanks is the art of attracting good things"
            </i>
          )}
        </StyledSubGreetings>
      </StyledTopContainer>
      {true ? (
        <PlansOptions />
      ) : (
        <AccountDetails />
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
