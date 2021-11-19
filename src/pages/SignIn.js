/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  StyledPageContainer,
  StyledForm,
  StyledInput,
  StyledFormMessage,
} from '../assets/styles/SignStyle';
import { StyledButton, StyledLinkButton } from '../assets/styles/ButtonStyle';
import { StyledGreetings } from '../assets/styles/SharedStyle';
import { signIn } from '../services/api';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const initialMessage = 'Sign-in with your account!';
  const [message, setMessage] = useState(initialMessage);
  const passwordRegex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
  const history = useHistory();
  const [userInfoControl, setUserInfoControl] = useState(false);
  const [lastLogin, setLastLogin] = useState('');

  useEffect(() => {
    if (userInfoControl) {
      if (localStorage.getItem('gratiBoxSession') !== null) {
        setLastLogin(JSON.parse(localStorage.getItem('gratiBoxSession')));
      }
    }
  }, [userInfoControl]);

  setTimeout(() => setUserInfoControl(true), 1500);

  function signInRequest(event) {
    event.preventDefault();
    setLoading(true);

    const signInBody = {
      email,
      password,
    };
    signIn(signInBody)
      .then((res) => {
        localStorage.setItem('gratiBoxSession', JSON.stringify(res.data));
        setLoading(false);
        history.push('/');
      })
      .catch((err) => {
        setMessage(err.response?.data);
        setTimeout(() => setMessage(initialMessage), 6000);
        setLoading(false);
      });
  }

  return (
    <StyledPageContainer>
      <StyledGreetings>
        Welcome to GratiBox
      </StyledGreetings>
      <StyledForm onSubmit={(e) => signInRequest(e)}>
        <StyledInput
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxLength="100"
          required
          disabled={loading}
        />
        <StyledInput
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          pattern={passwordRegex}
          required
          disabled={loading}
        />
        <StyledFormMessage>{message}</StyledFormMessage>
        <StyledButton type="submit" loading={loading} disabled={loading}>
          {loading ? 'Loading...' : 'Log-in'}
        </StyledButton>
        <StyledLinkButton>
          <Link to="/sign-up" className="swapLink">
            Still not grateful? Sign-up!
          </Link>
        </StyledLinkButton>
      </StyledForm>
      {lastLogin !== '' ? (
        <DirectLoginBox>
          <DirectLoginAsk>
            {`${lastLogin.name}, do you want to directly login with your previous account?`}
          </DirectLoginAsk>
          <DirectLoginButton>
            <Link to="/" className="yesLink">
              Yes!
            </Link>
          </DirectLoginButton>
        </DirectLoginBox>
      ) : ('')}
    </StyledPageContainer>
  );
}

const DirectLoginBox = styled.div`
    align-self: center;
    width: 100%;
    max-width: 400px;
    background-color: #505caa;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px 20px;
    margin-top: 40px;
    gap: 15px;
`;
const DirectLoginButton = styled.button`
    width: 100px;
    height: 50px;
    background-color: #505caa;
    border: none;
    align-self: center;
    border-right: 2px solid #ffffff;
    border-left: 2px solid #ffffff;
    .yesLink {
      color: #ffffff;
      text-decoration: none;
      font-size: 18px;
      font-weight: 700;
      padding: 15px 27px;
    }
    :active {
        border: none;
        border-top: 2px solid #ffffff;
        border-bottom: 2px solid #ffffff;
    }
`;
const DirectLoginAsk = styled.p`
    color: #ffffff;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
`;
