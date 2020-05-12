import React from "react";
import ReactDOM from "react-dom";
import {
    Route,
    Switch,
    BrowserRouter as Router,
    Redirect
  } from 'react-router-dom'

import LoginPage from "../../LoginPage";
import Register from "../../Register";

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
                <Route exact path="/" render={ () => (
                  <LoginPage onLogin={this.setLoginData}/>)
                  // <Register />)
                } />
                {/* <Route exact path="/stockmain" render={ () => (
                  <StockMain loginData={this.loginData}/>)
                } /> */}
               
               <Route path="/Register" component={Register}/>
                
                {}
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