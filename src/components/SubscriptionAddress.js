/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import cep from 'cep-promise';
import { IoSearchCircleOutline as SearchIcon } from 'react-icons/io5';
import { useState } from 'react';
import styled from 'styled-components';
import { StyledButton } from '../assets/styles/ButtonStyle';
import {
  StyledForm,
  StyledInput,
  StyledFormMessage,
} from '../assets/styles/SignStyle';
import { addUserPlan } from '../services/api';

export default function SubscriptionPlan({ allnewPlanInfo }) {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [userCep, setUserCep] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [loading, setLoading] = useState(false);
  const initialMessage = 'Please, type your address information!';
  const [message, setMessage] = useState(initialMessage);
  const stringWithOnlyNumbers = '^[0-9]+$';

  const addPlanRequest = (event) => {
    event.preventDefault();
    const userSession = JSON.parse(localStorage.getItem('gratiBoxSession'));
    if (!userSession) {
      return;
    }
    setLoading(true);
    const { token } = userSession;
    const addPlanBody = {
      plan: {
        planType: allnewPlanInfo.planType,
        planDay: allnewPlanInfo.planDay,
        products: allnewPlanInfo.products,
      },
      address: {
        fullName,
        cep: userCep,
        address,
        city,
        state,
      },
    };

    addUserPlan(addPlanBody, token)
      .then((res) => {
        console.log(res.status);
        setMessage('Congratulations! Your plan subscription has been confirmed! We thruly hope you like it ;)');
        setTimeout(() => setMessage(initialMessage), 6000);
        setLoading(false);
      })
      .catch((err) => {
        setMessage(err.response?.data);
        setTimeout(() => setMessage(initialMessage), 6000);
        setLoading(false);
      });
  };

  const findUserAdressByCep = () => {
    if (userCep.length === 8) {
      cep(userCep)
        .then((res) => {
          setCity(res.city);
          setState(res.state);
          setAddress(`${res.neighborhood}, ${res.street.split('-')[0]}`);
        })
        .catch(() => {
          setMessage('It wasn`t possible to consult the server! Please make sure you typed the CEP code correctly.');
          setTimeout(() => setMessage(initialMessage), 6000);
        });
    }
  };

  return (
    <StyledInfoBox>
      <StyledForm onSubmit={(e) => addPlanRequest(e)}>
        <StyledInput
          placeholder="Full name"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          maxLength="100"
          required
          disabled={loading}
        />
        <StyledCepInputContainer>
          <StyledInput
            placeholder="CEP"
            type="text"
            value={userCep}
            onChange={(e) => setUserCep(e.target.value)}
            minLength="8"
            maxLength="8"
            required
            pattern={stringWithOnlyNumbers}
            disabled={loading}
          />
          <SearchIcon className="check-cep" onClick={() => findUserAdressByCep()} />
        </StyledCepInputContainer>
        <StyledInput
          placeholder="Address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          disabled={loading}
        />
        <StyledInput
          placeholder="City"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
          disabled={loading}
        />
        <StyledInput
          placeholder="State"
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
          disabled={loading}
        />
        <StyledFormMessage>{message}</StyledFormMessage>
        <StyledButton type="submit" loading={loading} disabled={loading}>
          {loading ? 'Loading...' : 'Confirm'}
        </StyledButton>
      </StyledForm>
    </StyledInfoBox>
  );
}

const StyledInfoBox = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    color: #ffffff;
    font-size: 18px;
    .choices-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ffffff;
      padding: 10px 0;
      position: relative;
      h2 {
        font-weight: 700;
      }
      .arrow-icon {
        font-size: 35px;
        cursor: pointer;
      }
    }
`;
const StyledCepInputContainer = styled.div`
  width: 100%;
  display: flex;
  .check-cep {
    height: 35px;
    width: 35px;
    background-color: #6D7CE4;
    border-bottom: 2px solid #ffffff;
  }
`;
