import React, { Suspense, useContext } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import SignIn from "./components/SignIn";

import { AuthProvider, AuthContext } from "./context/AuthContext";

const AuthenticatedRoute = ({ children, ...rest }) => {
  const auth = useContext(AuthContext);
  return (
    <Route {...rest} render={() => (auth.isAuthenticated() ? <div>{children}</div> : <Redirect to="/" />)}></Route>
  );
};

const UnauthenticatedRoutes = () => (
  <>
    <Switch>
      <Route path="/">
        <SignIn />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
    </Switch>
  </>
);

const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <AuthenticatedRoute path="/dashboard">
            <p>I'm authentcated</p>
          </AuthenticatedRoute>
          <UnauthenticatedRoutes />
        </Switch>
      </Suspense>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React and Express with Authentication</p>
      </header>
      <Router>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
