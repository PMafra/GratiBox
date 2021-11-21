/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import styled from 'styled-components';
import { StyledButton } from '../assets/styles/ButtonStyle';
import {
  StyledForm,
  StyledInput,
  StyledFormMessage,
} from '../assets/styles/SignStyle';

export default function SubscriptionPlan() {
  const [fullName, setFullName] = useState('');
  const [cep, setCep] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('oi');

  const addPlanRequest = () => {
    console.log('oi');
    setLoading(false);
    setMessage('to');
  };

  return (
    <StyledInfoBox>
      <StyledForm onSubmit={(e) => addPlanRequest(e)}>
        <StyledInput
          className="address-input"
          placeholder="Full name"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          maxLength="100"
          required
          disabled={loading}
        />
        <StyledInput
          placeholder="CEP"
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          required
          disabled={loading}
        />
        <StyledInput
          placeholder="Number"
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
          disabled={loading}
        />
        <StyledInput
          placeholder="Address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
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
