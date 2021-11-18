import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import GlobalStyle from './assets/styles/GlobalStyle';
import TransitionStyle from './assets/styles/TransitionStyle';

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <TransitionStyle />
      <AppRoutes />
    </Router>
  );
}
