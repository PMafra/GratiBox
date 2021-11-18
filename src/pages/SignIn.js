/* eslint-disable no-unused-vars */
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
  const initialMessage = 'Faça seu login!';
  const [message, setMessage] = useState(initialMessage);
  const passwordRegex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('userSession') !== null) {
      history.push('/');
    }
  }, []);

  function signInRequest(event) {
    event.preventDefault();
    setLoading(true);

    const signInBody = {
      email,
      password,
    };
    signIn(signInBody)
      .then((res) => {
        localStorage.setItem('userSession', JSON.stringify(res.data));
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
        Bem vindo ao GratiBox
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
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          pattern={passwordRegex}
          required
          disabled={loading}
        />
        <StyledFormMessage>{message}</StyledFormMessage>
        <StyledButton type="submit" loading={loading} disabled={loading}>
          {loading ? 'Carregando...' : 'Logar'}
        </StyledButton>
        <StyledLinkButton>
          <Link to="/sign-up" className="swapLink">
            Ainda não é grato? Cadastre-se!
          </Link>
        </StyledLinkButton>
      </StyledForm>
    </StyledPageContainer>
  );
}
