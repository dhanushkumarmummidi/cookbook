import React from 'react';
import { Link } from 'react-router-dom';
import CreateRecipe from './CreateRecipe';

export class CreateIngredient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Activities:  [],
      categories:[],
      message:"",
      isLoadedCat:false,
      startDate:''
     };
     this.handleSubmit=this.handleSubmit.bind(this);
  }
//-------------------------------------------------CREATE AN Ingredient-----------------------------------------------------------
handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const formData={
    ingrd_name:data.get('ingrd_name'),
    ingrd_description:data.get("ingrd_description"),
    user_id:parseInt("1",10),
    recp_id:parseInt(data.get('cat_id'),10)
  };
  console.log(JSON.stringify(formData));
    const url="http://158.69.156.182:8087/api/ingredient-management-service/Ingredient/addIngredient/";
      fetch(url, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body:  JSON.stringify(formData)                                           
            })
            .then(res => res.status)
            .then(response => {this.setState({message:"Ingredient added Successfully..."})})
            .catch(error => {this.setState({message:error.message})});
  }
//----------------------------------------TO SHOW ALL Recipes----------------------------------------------------------------
  componentDidMount = () => {
    const url = 'http://158.69.156.182:8087/api/recipe-management-system/Recipe/getAllRecipe/';
    fetch(url)
      .then(res => res.json())
      .then( 
        (result) => {
            this.setState({
                categories: result,
                isLoadedCat: true
            });
        },
        // Note: it's important to handle errors here
        (errorCat) => {
          this.setState({
            isLoadedCat: false,
            errorCat
          });
        }
    )
  }  

  
//---------------------------------------------------RENDER FUNCTION------------------------------------------------------------  
  render() {
        const { errorCat, isLoadedCat } = this.state
        if (errorCat) {
            return <div>Error: {errorCat.message}</div>;
        } 
        else if (!isLoadedCat) {
            return <div>Loading...</div>;
        }
        else {
            let options = this.state.categories.map(function(val, index){ 
                return (
                <option key={val.cat_id} value={val.cat_id}>{val.cat_name}</option>
                ); 
            }) 
            return (
              <div class="main">
              <section class="signup">
                  <div class="container">
                      <div class="signup-content">
                    <form onSubmit={this.handleSubmit} class="signup-form">
                    <h2 class="form-title">Add Ingredient</h2>
                    
                    <div class="form-group">
                    <label htmlFor="Ingrd_name">Ingredient Name:</label>
                   <input type="text" class="form-input" id="Ingrd_name" name="Ingrd_name" placeholder="Ingredient Name" required/>
                   </div>
                   <div class="form-group">
                    <label htmlFor="Ingrd_description">Ingredient Description:</label>
                   <textarea class="form-input" id="Ingrd_description" name="Ingrd_description" placeholder="Ingredient Description" required></textarea>
                   </div>
                   <div class="form-group">
                   <label htmlFor="Recp_id">Recipe:</label>
                   <select id="Recp_id" class="form-input" name="Recp_id">
                     <option defaultChecked value="0">------Recipe-------</option>
                       {options}
                   </select>
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
}

export default CreateRecipe;