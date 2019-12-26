import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import Header from "./component/heder/heder";
//import Ingredients from "./component/Ingredient/Ingredient";
import ingredientService from "./repository/integrantes";
import {Redirect} from "react-router";
import AllIngedent from "./component/Ingredient/IntegentList/ingedinets";
import IngredientDetails from "./component/Ingredient/detals";





class App extends Component{

  constructor(props) {
        super(props);
        this.state = {
            ingredients:[]
        };
  }
    componentDidMount() {
        this.getIngredients();
    }

    getIngredients = () => {


        ingredientService.fetchIngredients().then(response => {
            this.setState((prevState)=> {
                return {
                    ingredients: response.data
                }
            });

        });
    };
    addIngredient = (ingredient) =>{
        ingredientService.fetchAddIngredientPizzas(ingredient).then(result=>{
            const newIngredient = result.data;
            this.setState((prevState) => {
                const ingredients = [...prevState.ingredients, newIngredient];
                return {
                    "ingredients": ingredients
                }
            });
        });
    };
    onEdit = (ingredient) =>{
        ingredientService.updateIngredient(ingredient).then(result=>{
            const newIngredient = result.data;
            this.state((prevState) => {
                const ingredients = prevState.ingredients.map(i => i.id === newIngredient.id ? newIngredient : i);
                return {
                   ingredients : ingredients
                };
             });
        });
    };
    onDelete = (id) => {
        ingredientService.deleteIngredient(id).then(() => {
            this.setState((prevState) => {
                const ingredients = prevState.ingredients.filter(i => i.id !== id);
                return {
                    "ingredients": ingredients
                }
            });
        });
    };






    render() {

     const routing =(
         <Router>
         <Header />

        <main role="main" className="mt-3">

            <div className="container">

                <Switch>
                    <Route path={"/"} exact><h2>Home page</h2></Route>
                    <Route path={"/ingredients"} exact>
                        <AllIngedent ingredients={this.state.ingredients} onDelete={this.onDelete}/>
                    </Route>
                    <Route path={"/ingredients/:id/details"}>
                        <IngredientDetails/>
                    </Route>
                    <Route path={"/ingredients/new"} exact>
                        <ingredientAdd onAddIngredient={this.addIngredient}/>
                    </Route>



                </Switch>
            </div>
        </main>
        </Router>

    );

        return (

            <div className="App">
                {routing}
            </div>
        );

    }
}
export default App;
