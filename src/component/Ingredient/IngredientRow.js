import React,{Component} from "react";
import {Link} from "react-router-dom";

class IngredientRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.ingredient.name}</td>
                <td>{this.props.ingredient.amount}</td>
                <td>
                    <i className={this.props.ingredient.spicy ? "fa fa-check text-success" : "fa fa-times text-dark"}/>
                </td>
                <td>
                    <i className={this.props.ingredient.veggie ? "fa fa-check text-success" : "fa fa-times text-dark"}/>
                </td>
                <td>
                    {this.edit()}
                    {this.remove()}
                    {this.details()}

                </td>
            </tr>
        );
    }
    edit() {
        return(
            <button className="btn btn-sm btn-secondary">
                <span className="fa fa-edit"/>
                <span><strong>Edit</strong></span>
            </button>
        );
    }
    details(){
        return(
            <Link className="btn btn-sm btn-outline-dark" to={`/ingredients/${this.props.ingredient.name}/details`}>
                <span><strong>Details</strong></span>
            </Link>
        );
    }
    remove() {
        return(
            <button className="btn btn-sm btn-outline-secondary mr-2"
                    onClick={() => this.props.onDelete(this.props.ingredient.id)}>
                <span className="fa fa-remove"/>
                <span><strong>Remove</strong></span>
            </button>
        );
    }
}
export default IngredientRow;