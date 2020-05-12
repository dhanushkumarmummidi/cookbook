import React from "react";
import {
    Route,
    Switch,
    BrowserRouter as Router,
    Redirect
  } from 'react-router-dom';
import CreateIngredient from '../components/CreateIngredient';
import CreateRecipe from '../components/CreateRecipe';
import Header from '../components/common/Header';
import LoginPage from '../LoginPage';
import Register from "../Register";
  // …
  class AppRouter extends React.Component {
    constructor() {
      super();
      this.setLoginData.bind(this);
      this.loginData = {};
    }

    setLoginData(loginData) {
      console.log("Login data", loginData);
      this.loginData = loginData;
    }


    render() {
      return (
        <Router>  
          <div>
              <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route exact path="/home" component={Header}/>
                <Route exact path="/addIngredient/" component={CreateIngredient} />
                <Route exact path="/register" component={Register}></Route>
                <Route exact path="/addRecipe" component={CreateRecipe}></Route>
                <Route>
                  <Redirect
                      to={{
                          pathname: "/"
                      }}
                  />
                </Route>
              </Switch>
            </div>
        </Router>
      );
    }
  }  
export default AppRouter;