import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import '../Register.css';
import { Link } from 'react-router-dom';
// import {Helmet} from 'react-helmet';

export class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [], 
            category:[],
            message:"", 
            isLoaded: false, 
            error: null,
            open:false,
            editOpen:false,
            category_id:0
        };
        this.handleSubmit=this.handleSubmit.bind(this);
         this.handleEditClose=this.handleEditClose.bind(this);
    }
    setOpen=(bool)=>{
        this.setState({open:bool});
    }
    handleClickOpen = (id) => {
        this.setState({category_id:id})
        this.setOpen(true);
      };
      handleYesClose = () => {
        this.delete(this.state.category_id);
        this.setOpen(false);
        this.setState({category_id:0});
      };
      handleNoClose = () => {
        this.setOpen(false);
        this.setState({category_id:0});
      };
    //============================DELETE Recipe=============================================================================
    delete=(id)=>{
        fetch("http://158.69.156.182:8085/api/category-management-system/Category/deleteCategory/" + id+'/', {
            method: "DELETE"
        });
    }

    //======================================================EDIT Recipe====================================================
    setEditOpen=(bool)=>{
        this.setState({editOpen:bool});
    }
    handleEditOpen=(id)=>{
        this.searchCategory(id);
        this.setState({category_id:id})
        this.setEditOpen(true);
    }
    handleEditClose(){
        this.setState({category_id:0,category:[]})
        this.setEditOpen(false);
    }
    //---------------------------------------SEARCH AN Recipe---------------------------------------------------------------------
searchCategory=(id)=>{
    const url = 'http://158.69.156.182:8085/api/recipe-management-system/Recipe/searchRecipe/'+id+'/';
    fetch(url)
      .then(res => res.json())
      .then( 
        (result) => {
            if(result===null){
                this.setState({
                    category: [],
                    message:"No Recipe Found..."
                });  
            }
            else{
            this.setState({
                category: result,
            });
        }
        },
        // Note: it's important to handle errors here
        (error) => {
          this.setState({
            isLoaded: true,
            message:error.message
            
          });
        }
    )
}
//-------------------------------------------------UPDATE AN Ingredient-----------------------------------------------------------
handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const formData={
      Ingrd_name:data.get('Ingrd_name'),
      Ingrd_description:data.get('Ingrd_description'),
    };
    console.log(data.get("Ingrd_id"));
    console.log(JSON.stringify(formData));
      const url="http://158.69.156.182:8087/api/recipe-management-system/Recipe/updateRecipe/"+data.get("Ingrd_id")+'/';
        fetch(url, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body:  JSON.stringify(formData)                                           
              })
              .then(res => res.status)
            .then(response => {this.setState({message:"Recipe updated Successfully..."})})
            .catch(error => {this.setState({message:error.message})});
              this.handleEditClose(false);
    }

    //----------------------------------------------Show all Recipe------------------------------------------------------------------- 
showCategories = () => {
    fetch('http://158.69.156.182:8087/api/recipe-management-system/Recipe/getAllRecipe/',{
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }).then(
        response => {
            if (response.ok) {     
                response.json().then(json_response => {
                    console.log(json_response);
                    if(json_response.length===0)
                    {
                        this.setState({
                            categories: json_response,
                            message:"No Data Found",
                            isLoaded: true, 
                            error: null 
                        });
                    }
                    else{
                        this.setState({
                            categories: json_response,
                            message:"",
                            isLoaded: true, 
                            error: null 
                        });
                }
                });
            } 
            else {
                response.json().then(json_response => {
                    this.setState({
                        isLoaded: false,
                        error: json_response, 
                        categories: {},
                        message:"Loading..."
                    });
                });
            }
        },

        error => {
          
            this.setState({
                isLoaded: false,
                error: {
                    message:
                        "AJAX error, URL wrong or unreachable, see console"
                }, 
                message:error.message,
                categories: {}
            });
        }
    );
}
componentDidMount(){
    this.showCategories();
}
    render() {
        const rows=[];
        const h2=[];
        if(this.state.error){
            h2.push(<h2>{this.state.message}</h2>);
        }
        else if(this.state.categories.length===0)
        {
            h2.push(<h2>{this.state.message}</h2>);
        
        }
        else if(this.state.categories.length!==0)
        {    
            for(let i=0;i<this.state.categories.length;i++)
            {
                rows.push(
                    <tr key={this.state.categories[i].cat_id}>
                    <td><i className="fa fa-trash" aria-hidden="true" onClick={()=>this.handleClickOpen(this.state.categories[i].cat_id)}  style={{padding:"10px"}}></i>
                    <i className="fa fa-pencil-square-o" onClick={()=>this.handleEditOpen(this.state.categories[i].cat_id)} aria-hidden="true"></i></td> 
                    <td >{this.state.categories[i].cat_name}</td>
                    <td>{this.state.categories[i].cat_description}</td>
                    </tr>
                )
            }
        }
      
        else{
            h2.push(<h2>{this.state.message}</h2>);
        }
            return(
                <div class="main">
              <section class="signup">
                  <div class="container">
                      <div class="signup-content">
                      <div id="message">{this.state.message}</div>
                            <table>
                                <tbody>
                                <tr>
                                    <th>SLNO</th>
                                    <th>Recipe Name</th>
                                    <th>Description</th>
                                </tr>
                                    {rows}
                                    </tbody>
                            </table>
                      </div>
                      </div>
                      </section>
                      <Dialog open={this.state.open} onClose={this.handleNoClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
      <DialogTitle id="alert-dialog-title">Delete Recipe</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Do you want to delete this Recipe?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={this.handleYesClose} color="primary">
        Yes
      </Button>
      <Button onClick={this.handleNoClose} color="primary" autoFocus>
        No
      </Button>
    </DialogActions>
  </Dialog>
  <Dialog open={this.state.editOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Recipe</DialogTitle>
            <DialogContent>
            <div class="signup-content">
            <form onSubmit={this.handleSubmit} class="signup-form">
                    <div class="form-group">
                   <label htmlFor="Recp_name">Recipe Name</label>
                   <input type="text" class="form-input" id="Recp_name" defaultValue={this.state.category.Recp_name} name="Recp_name" required/>
                   </div>
                   <div class="form-group">
                    <label htmlFor="Recp_description">Recipe Description:</label>
                   <textarea class="form-input" id="Recp_description" name="Recp_description" defaultValue={this.state.category.Recp_description} required></textarea>
                   </div>
                   <input type="hidden" value={this.state.Recp_id} name="Recp_id" id="Recp_id"></input>
                   <div class="form-group">
                   <button type="submit" class="form-submit">Save</button>
                   </div>
                   </form>
                   <div class="form-group">
                   <button type="cancel" onClick={this.handleEditClose} class="form-submit">Cancel</button>
                   </div>
                   </div>
                   </DialogContent>
      </Dialog>
  
                      </div>
            )
            
        
    }


}
export default Recipe;