import React, { useState } from 'react';
import "./Register.css";
// import "./util.css";
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          categories:[],
          message:"",
          isLoadedCat:false,
         };
         this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const formData={
          userName:data.get('userName'),
          email:data.get('email'),
          password:data.get('password')
        };
        if(data.get('password') === data.get('re_password')) {
            console.log(JSON.stringify(formData));
            const url=" http://158.69.156.182:8087/api/user-managerement-system/users/add_user/";
                fetch(url, {
                        method: 'POST',
                        headers: { 'Access-Control-Allow-Origin': '*',
                        'Accept': 'application/json',
                        'Content-Type': 'application/json' },
                        body:  JSON.stringify(formData)                                           
                    })
                    .then(res => res.status)
                    .then(response => {this.setState({message:"User added Successfully..."})})
                    .catch(error => {this.setState({message:error.message})});
            } else {
                this.setState({message: "Password is not matching"})
            } 
        } 

    render() {
      return (
        <div class="main">
        <section class="signup">
            <div class="container">
                <div class="signup-content">
                    <form onSubmit={this.handleSubmit} id="signup-form" class="signup-form">
                        <h2 class="form-title">Create account</h2>
                        <div class="form-group">
                            <input type="text" class="form-input" name="userName" id="name" placeholder="Your Name"/>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-input" name="email" id="email" placeholder="Your Email"/>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-input" name="password" id="password" placeholder="Password"/>
                            <span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-input" name="re_password" id="re_password" placeholder="Repeat your password"/>
                        </div>
                        <div class="form-group">
                            <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                            {/* <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label> */}
                        </div>
                        <div class="form-group">
                            <button type="submit" class="form-submit">Sign up</button>
                        </div>
                        <h2>{this.state.message}</h2>
                    </form>
                    <p class="loginhere">
                        Have already an account ? <Link to="/"><a href="" class="loginhere-link">Login here</a></Link>
                    </p>
                </div>
            </div>
        </section>

    </div>

    );
}}

export default Register;