import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from './components/notFound/notFound'
import { SingleCard } from './layouts'
import ChangePassword from './pages/loginPage/components/cambiarContraseña'
import Login from './pages/loginPage/login'
/* import {
  LoginForm,
  ResetPasswordForm,
  ChangePasswordForm,
  CreateAccountForm,
} from "./components";  */

export default function UnauthenticatedContent() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          {/*  <SingleCard title="" description=""> */}
          <Login />
          {/* </SingleCard> */}
        </Route>
        <Route exact path="/">
          {/*  <SingleCard title="" description=""> */}
          <Login />
          {/* </SingleCard> */}
        </Route>

        {/*  <Route exact path="/create-account">
        <SingleCard title="Sign Up" description="">
          <Login />
        </SingleCard>
      </Route> */}
        <Route exact path="/ResetPassword">
          <SingleCard title="" description="">
            <ChangePassword />
          </SingleCard>
        </Route>
        {/*   <Route exact path="/change-password/:recoveryCode">
        <SingleCard title="Change Password" description="">
          <ChangePasswordForm />
        </SingleCard>
      </Route> */}
        <Route component={Login} />
        {/*  <Redirect to={'/login'} /> */}
      </Switch>
    </Router>
  )
}
