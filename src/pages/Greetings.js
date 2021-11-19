import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledGreetings, StyledSubGreetings } from '../assets/styles/SharedStyle';
import womanMeditating from '../assets/images/initial-background.png';
import { StyledLinkButton } from '../assets/styles/ButtonStyle';

export default function Greetings() {
  return (
    <StyledFirstPageContainer>
      <StyledGreetingsContainer>
        <StyledGreetings>
          Welcome to GratiBox
        </StyledGreetings>
        <StyledSubGreetings>
          Receive a box with teas, organic products, incense and much more at home...
        </StyledSubGreetings>
      </StyledGreetingsContainer>
      <StyledImg>
        <img src={womanMeditating} alt="" />
      </StyledImg>
      <StyledButtonsBox>
        <StyledFirstPageButton>
          <Link to="/sign-up" className="link">
            I want to be grateful
          </Link>
        </StyledFirstPageButton>
        <StyledLinkButton>
          <Link to="/sign-in" className="swapLink">
            I`m already grateful
          </Link>
        </StyledLinkButton>
      </StyledButtonsBox>
    </StyledFirstPageContainer>
  );
}
const StyledFirstPageContainer = styled.div`
  background-color: #4D65A8;
  height: 100vh;
`;
const StyledGreetingsContainer = styled.div`
  background-color: #6D7CE4;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 35px;
  padding: 50px 25px 35px;
`;
const StyledImg = styled.div`
  margin-bottom: -3px;
  img {
    width: 100%;
  }
  @media (min-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 400px;
    }
  }
`;
const StyledButtonsBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
`;
const StyledFirstPageButton = styled.button`
    background-color:#4D65A8;
    border: none;
    border-right: 2px solid #ffffff;
    border-left: 2px solid #ffffff;
    width: 270px;
    height: 55px;
    :active {
        border: none;
        border-top: 2px solid #ffffff;
        border-bottom: 2px solid #ffffff;
    }
    .link {
      color: #ffffff;
      font-weight: 700;
      font-size: 21px;
      padding: 15px 30px;
    }
`;
