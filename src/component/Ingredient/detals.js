import React,{useEffect,useState} from "react";
import {useParams} from "react-router";
import ingredientService from "../../repository/integrantes";
import {Link} from "react-router-dom";

const IngredientDetails = () =>{
    const {id} = useParams();
    const [ingredient,setIngredient] = useState({});
    const [pizzas,setPizzas] = useState([]);
    useEffect(()=> {
        debugger;
        ingredientService.fetchIngredient(id).then((data) => {
            setIngredient(data.data);
        })
    },[]);
    useEffect(()=> {
        ingredientService.fetchIngredientPizzas(id).then((data) => {
            const pizzas = data.data.map(pizza => pizza.name)
            setPizzas(pizzas);
        })
    },[]);
    const listPizzas = pizzas.map((pizza,index)=> <li key={index}>{pizza}</li>);

    const ingredientDetails = () =>{
        return (
            <div className="col-6">
                <h4>Characteristics: </h4>
                <hr/>
                <ul className="w-50">
                    <li>Amount: {ingredient.amount}g</li>
                    <li>Spicy:
                        <i className={ingredient.spicy ? "fa fa-check text-success ml-2" : "fa fa-times text-dark ml-2"}> </i>
                    </li>
                    <li>Veggie:
                        <i className={ingredient.veggie ? "fa fa-check text-success ml-2" : "fa fa-times text-dark ml-2"}> </i>
                    </li>
                </ul>
            </div>
        );
    }

    const pizzaIn = () =>{
        return (
            <div className="col-6">
                <h4>Pizzas in:</h4>
                <hr/>
                <ol>{listPizzas}</ol>
            </div>

        );

    }

    const backButton = () =>{
        return (
            <Link to={"/ingredients"} className="btn btn-outline-secondary">
                <span><strong>Back</strong></span>
            </Link>
        );
    }
    return (
              <div className="container text-left">
                  <h1>ASDADDDS</h1>
                  <h3 className="text-centre">Ingredient {ingredient.name}</h3>
                  <hr/>

                  <div className="row">
                      {ingredientDetails()}
                      {pizzaIn()}
                  </div>
                  {backButton()}
              </div>

    )
}
export default IngredientDetails;