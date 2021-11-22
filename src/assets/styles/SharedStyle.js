import styled from 'styled-components';

const StyledGreetings = styled.h1`
    color: #ffffff;
    font-size: 28px;
    font-weight: 700;
    line-height: 33px;
    text-align: center;
`;
const StyledSubGreetings = styled.h2`
    color: #ffffff;
    font-size: 18px;
    font-weight: 300;
    line-height: 21px;
    text-align: center;
    i {
        font-style: italic;
    }
`;
const StyledPageContainer = styled.div`
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

export {
  StyledGreetings, StyledSubGreetings, StyledPageContainer, StyledTopContainer,
};
