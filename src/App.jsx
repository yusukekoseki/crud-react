import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import AuthUserProvider, { useAuthUser } from './AuthUserContext';
import LogoutPage from './LogoutPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';

const UnAuthRoute = ({ ...props }) => {
  const authUser = useAuthUser()
  const isAuthenticated = authUser != null
  const { from } = useLocation().state
  
  if (isAuthenticated) {
    console.log(`ログイン済みのユーザーは${props.path}へはアクセスできません`)
    return <Redirect to={from ?? "/"} />
  } else {
    return <Route {...props} />
  }
}

const PrivateRoute = ({...props}) => {
  const authUser = useAuthUser()
  const isAuthenticated = authUser != null
  if (isAuthenticated) {
    return <Route {...props}/>
  }else{
    console.log(`ログインしていないユーザーは${props.path}へはアクセスできません`)
    return <Redirect to={{pathname: "/login", state: { from: props.location?.pathname }}}/>
  }
}


const App = () => {
  return (
    <AuthUserProvider>
      <Router>
        <Switch>
          <UnAuthRoute exact path="/login" component={LoginPage}/>
          <UnAuthRoute exact path="/logout" component={LogoutPage}/>
          <PrivateRoute exact path="/" component={HomePage} />
          <PrivateRoute exact path="/profile/:userId" component={ProfilePage}/>
          <Redirect to="/"/>
        </Switch>
      </Router>
    </AuthUserProvider>
  );
}

export default App;