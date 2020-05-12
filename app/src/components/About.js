import React from 'react';
import '../Register.css';

export class About extends React.Component {
  constructor(props) {
    super(props);
  } 
//---------------------------------------------------RENDER FUNCTION------------------------------------------------------------  
  render() {
            return (
              <div class="main">
              <section class="signup">
                  <div class="container">
                      <div class="signup-content">
                      <h2>About CookBook</h2>
        <p>Customize your food
        </p>
                   </div>
            </div>
        </section>

    </div> 
            );
  }
}

export default About;