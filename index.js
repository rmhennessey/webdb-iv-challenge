const express = require('express');
const helmet = require('helmet');

const db = require('./data/dbConfig.js');
const Dishes = require('./dishes/dishes-model')
const Recipes = require ('./recipes/recipes-model')

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/dishes', (req, res) => {
    Dishes
        .getDishes()
        .then(dishes => {
            res.status(200).json(dishes);
        })
        .catch(error => {
            res.status(500).json(error);
        })
})


server.get('/api/recipes', (req, res) => {
    Recipes
        .getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(error => {
            res.status(500).json(error);
        })
})

server.get('/api/dishes/:id', (req, res) => {
    const id = req.params.id;

    Dishes
        .getDish(id)
        .then(dishes => {
            res.status(200).json(dishes);
        })
        .catch(error => {
            res.status(500).json(error);
        })
})

server.post('/api/dishes', (req, res) => {
    const { name } = req.body;

    if (!name) {
        res.status(400).json({ errorMessage: 'Please provide a dish name' })
    } else {
        Dishes
            .addDish(req.body)
            .then(dish => {
                res.status(201).json(dish)
            })
            .catch(error => {
                res.json.status(500).json({ error: "Something terrible has happened. Sorry."})
            })

    }
})

server.post('/api/recipes', (req, res) => {
    const { name } = req.body;
    const  id  = req.body.dish_id

    if (!name || !req.body.dish_id ) {
        res.status(400).json({ errorMessage: 'Please provide a recipe name and dish id' })
    } else {
       Recipes
            .addRecipe(req.body)
            .then(recipe => {
                res.status(201).json(recipe)
            })
            .catch(error => {
                res.json.status(500).json({ error: "Something fishy has happened. Sorry."})
            })

    }
})



const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);