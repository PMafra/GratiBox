import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledSignContainer,
  StyledForm,
  StyledInput,
  StyledFormMessage,
} from '../assets/styles/SignStyle';
import { StyledButton, StyledLinkButton } from '../assets/styles/ButtonStyle';
import { StyledGreetings } from '../assets/styles/SharedStyle';
import { signUp } from '../services/api';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [loading, setLoading] = useState(false);
  const passwordRules = 'Your password must contain at least 8 characters, 1 upper case letter, 1 lower case letter, 1 number and 1 special character.';
  const [message, setMessage] = useState(passwordRules);
  const passwordRegex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
  const [isSignUpSucess, setIsSignUpSucess] = useState(false);

  const validateRepeatedPassword = () => {
    if (password !== passwordConfirmation) {
      setLoading(false);
      setMessage('Sua confirmação de senha está errada!');
      setTimeout(() => setMessage(passwordRules), 6000);
      return false;
    }
    return true;
  };

  function signUpRequest(event) {
    event.preventDefault();
    setLoading(true);

    const isRepeatedPasswordValid = validateRepeatedPassword();
    if (!isRepeatedPasswordValid) return;

    const signUpBody = {
      name,
      email,
      cpf,
      password,
    };
    signUp(signUpBody)
      .then(() => {
        setLoading(false);
        setIsSignUpSucess(true);
        setMessage('Conta criada com sucesso!');
        setTimeout(() => {
          setMessage(passwordRules);
          setIsSignUpSucess(false);
        }, 10000);
      })
      .catch((err) => {
        setMessage(err.response?.data);
        setTimeout(() => setMessage(passwordRules), 6000);
        setLoading(false);
      });
  }

  return (
    <StyledSignContainer>
      <StyledGreetings>
        Welcome to GratiBox
      </StyledGreetings>
      <StyledForm onSubmit={(e) => signUpRequest(e)}>
        <StyledInput
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          minLength="1"
          maxLength="30"
          required
          disabled={loading}
        />
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
          placeholder="CPF"
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          maxLength="11"
          minLength="11"
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
        <StyledInput
          placeholder="Password confirmation"
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          required
          disabled={loading}
        />
        <StyledFormMessage isSignUpSucess={isSignUpSucess}>{message}</StyledFormMessage>
        <StyledButton type="submit" loading={loading} disabled={loading}>
          {loading ? 'Loading...' : 'Sign-up'}
        </StyledButton>
        <StyledLinkButton>
          <Link to="/sign-in" className="swapLink">
            Already grateful? Log-in!
          </Link>
        </StyledLinkButton>
      </StyledForm>

    </StyledSignContainer>
  );
}
