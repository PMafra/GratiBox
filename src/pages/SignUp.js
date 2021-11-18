import styled from 'styled-components';
import { StyledGreetings, StyledSubGreetings } from '../assets/styles/SharedStyle';
import womanMeditating from '../assets/images/initial-background.png';
import { StyledButton, StyledLinkButton } from '../assets/styles/ButtonStyle';

export default function SignUp() {
  return (
    <StyledFirstPageContainer>
      <StyledGreetingsContainer>
        <StyledGreetings>
          Bem vindo ao GratiBox
        </StyledGreetings>
        <StyledSubGreetings>
          Receba em casa um box com chás, produtos orgânicos, incensos e muito mais...
        </StyledSubGreetings>
      </StyledGreetingsContainer>
      <StyledImg>
        <img src={womanMeditating} alt="" />
      </StyledImg>
      <StyledButtonsBox>
        <StyledButton>Quero começar</StyledButton>
        <StyledLinkButton>Já sou grato</StyledLinkButton>
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
