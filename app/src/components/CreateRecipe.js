import React from 'react';

export class CreateRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories:[],
      message:"",
      isLoadedCat:false,
     };
     this.handleSubmit=this.handleSubmit.bind(this);
  }
//-------------------------------------------------CREATE A CATEGORY-----------------------------------------------------------
handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const formData={
    cat_name:data.get('ingrd_name'),
    cat_description:data.get('ingrd_description')
  };
  console.log(JSON.stringify(formData));
    const url="http://158.69.156.182:8087/api/recipe-management-system/Recipe/addRecipe/";
      fetch(url, {
              method: 'POST',
              headers: { 'Access-Control-Allow-Origin': '*',
              'Accept': 'application/json',
              'Content-Type': 'application/json' },
              body:  JSON.stringify(formData)                                           
            })
            .then(res => res.status)
            .then(response => {this.setState({message:"Recipe added Successfully..."})})
            .catch(error => {this.setState({message:error.message})});
  } 
  
//---------------------------------------------------RENDER FUNCTION------------------------------------------------------------  
  render() {
            return (
              <div class="main">
              <section class="signup">
                  <div class="container">
                      <div class="signup-content">
                    <form onSubmit={this.handleSubmit} class="signup-form">
                    <h2 class="form-title">Add Recipe</h2>
                    <div class="form-group">
                    <label htmlFor="recp_name">Recipe:</label>
                   <input type="text" class="form-input" id="recp_name" name="recp_name" placeholder="Recipe Name" required/>
                   </div>
                   <div class="form-group">
                    <label htmlFor="recp_description">Recipe Description:</label>
                   <textarea class="form-input" id="recp_description" name="recp_description" placeholder="Recipe Description" required></textarea>
                   </div>
                   <div class="form-group">
                   <button type="submit" class="form-submit" >Add</button>
                   </div>
                   <div class="form-group">
                   <button type="reset" class="form-submit">Reset</button>
                   </div>
                   <div id="message">{this.state.message}</div>
                   </form>
                   </div>
            </div>
        </section>

    </div>   
            );
          
        }    
    }

export default CreateRecipe;