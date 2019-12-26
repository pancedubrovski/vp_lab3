import React from "react";
import IngredientRow from "../IngredientRow";
import {Link} from "react-router-dom";


const AllIngedent = (props) =>{

    const ingedents = props.ingredients.map((ingredient,index)=>
            <IngredientRow ingredient={ingredient} key={index} />
    );
    const tableIngedient = () =>{
        return (
            <div className="table-responsive">
                <table className="table tr-history table-striped small">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Spicy</th>
                        <th scope="col">Veggie</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>{ingedents}</tbody>
                </table>
            </div>


        );
    }
    return (
        <div className="row">
            <h4 className="text-upper text-left">Ingredients</h4>
            {tableIngedient()}
            <Link to={"/ingredients/new"} className="btn btn-outline-secondary">
                <span><strong>Add new ingredient</strong></span>
            </Link>
        </div>
    );
}
export default AllIngedent;