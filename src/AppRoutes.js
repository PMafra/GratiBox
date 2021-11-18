import { Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Greetings from './pages/Greetings';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

export default function AppRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition timeout={300} classNames="fade-drop" key={location.key}>
        <Switch location={location}>
          <Route exact path="/" component={Greetings} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/sign-in" component={SignIn} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}
