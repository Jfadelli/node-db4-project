const db = require('../dbconfig')

function getRecipes(){
    return db('recipes')

}

function getShoppingList(recipe_id){
    return db('shopping_list').where({recipe_id})

}

function getInstructions(recipe_id){
    return db('recipe_ingredient').where({recipe_id})
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}
