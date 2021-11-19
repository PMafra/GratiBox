import styled from 'styled-components';
import womanAndPlants from '../assets/images/plan-option-background.png';
import womanAndPlants2 from '../assets/images/plan-option2.png';

export default function PlansOptions() {
  return (
    <StyledPlansContainer>
      <StyledPlanOptionContainer>
        <img src={womanAndPlants} alt="" />
        <p>
          You receive one box per week. Ideal for anyone who wants to exercise gratitude every day.
        </p>
        <span>
          Subscribe
        </span>
      </StyledPlanOptionContainer>
      <StyledPlanOptionContainer>
        <img src={womanAndPlants2} alt="" />
        <p>
          You receive one box per month. Ideal for those just starting out.
        </p>
        <span>
          Subscribe
        </span>
      </StyledPlanOptionContainer>
    </StyledPlansContainer>
  );
}

const StyledPlansContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 40px 0;
`;
const StyledPlanOptionContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    opacity: 10px;

    img {
        width: 100%;
        height: 220px;
        object-fit: contain;
        opacity: 0.3;
    }
    p {
        position: absolute;
        text-align: center;
        top: 80px;
        font-weight: 700;
        color: #ffffff;
        font-size: 19px;
        margin: 0 30px;
    }
    span {
        border: none;
        position: absolute;
        font-weight: 700;
        font-size: 21px;
        bottom: 35px;
        color: #ffffff;
        text-decoration: underline;
    }
`;
