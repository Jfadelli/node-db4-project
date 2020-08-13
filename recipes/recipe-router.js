const express = require('express');
const recipes = require('./recipe-model');
const { getRecipes } = require('./recipe-model');


const router = express.Router({
  mergeParams: true
});

// router.get('/', (req, res, next) => {
//   const recipe = recipes.getRecipes()
//   res.json(recipe)
// })

router.get('/', async(req,res,next)=>{
  try{
    const recipe = await recipes.getRecipes()
    res.json(recipe)
  }
  catch(err){
    next(err)
  }
})
module.exports = router;