import styled from 'styled-components';

const StyledSignContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 13px;
  margin-top:70px;
`;
const StyledInput = styled.input`
  height: 35px;
  width: 100%;
  max-width: 700px;
  background-color: #6D7CE4;
  border: none;
  border-bottom: 2px solid #ffffff;
  font-size: 20px;
  color: #ffffff;
  outline: none;
  ::placeholder {
      color: #bfc7fc;
      opacity: 0.7;
  }
  :not(:placeholder-shown):invalid {
    border-bottom: 2px solid #e28c8c;
    color: #e28c8c;
  }
  :disabled {
    opacity: 0.4;
  }
`;
const StyledFormMessage = styled.span`
  color: ${({ isSignUpSucess }) => (isSignUpSucess ? '#7fd192' : '#ffffff')};
  font-size: 16px;
  width: 100%;
  text-align: left;
  line-height: 20px;
  margin-top: 20px;
  margin-bottom: 60px;
`;
export {
  StyledSignContainer,
  StyledForm,
  StyledInput,
  StyledFormMessage,
};
