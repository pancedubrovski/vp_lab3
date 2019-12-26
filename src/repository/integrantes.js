import React from "react";
import axsios from '../axsios/axios'
import qs from 'qs'


const ingredientService = {
    fetchIngredients: () => {
        return axsios.get("/api/ingredients/raboti");
    },
    fetchIngredient: (id) => {
        return axsios.get(`/api/ingredients/${id}`);
    },
    fetchIngredientPizzas: (id)=>{
        return axsios.get(`/api/ingredients/${id}/pizzas`);
    },fetchAddIngredientPizzas: (ingredient)=> {
        return axsios.put(`/api/api/ingredients`);
    },updateIngredient: (ingredient)=>{
      return axsios.patch(`api/ingredients/${ingredient.name}`,ingredient);
    },deleteIngredient: (id)=>{
        return axsios.delete(`/api/ingredients/${id}`);
    }
}
export default ingredientService;