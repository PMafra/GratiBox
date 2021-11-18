import { Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import SignUp from './pages/SignUp';

export default function AppRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition timeout={300} classNames="fade-drop" key={location.key}>
        <Switch location={location}>
          <Route exact path="/sign-up" component={SignUp} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}
