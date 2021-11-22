/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import GlobalStyle from './assets/styles/GlobalStyle';
import TransitionStyle from './assets/styles/TransitionStyle';
import UserContext from './store/UserContext';

export default function App() {
  const [userName, setUserName] = useState('');
  const [userPlanInfo, setUserPlanInfo] = useState('');

  return (
    <UserContext.Provider value={{
      userName, setUserName, userPlanInfo, setUserPlanInfo,
    }}
    >
      <Router>
        <GlobalStyle />
        <TransitionStyle />
        <AppRoutes />
      </Router>
    </UserContext.Provider>
  );
}
