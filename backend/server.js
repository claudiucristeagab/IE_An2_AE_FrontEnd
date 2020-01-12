const express = require('express')
const cors = require("cors")
const Sequelize = require('sequelize')

const app = express()
//app.use('/', express.static('frontend'))
app.use(cors())
app.use(express.json()); 
app.use(express.urlencoded())

const sequelize = new Sequelize('catalog_database', 'admin', 'password', {
    dialect: "mysql",
    host: "localhost"
})
sequelize.authenticate().then(() => {
    console.log("Connected to database")
}).catch(() => {
    console.log("Unable to connect to database")
})


// Models
var Categories = sequelize.define('categories', {
    name: Sequelize.STRING,
    description: Sequelize.STRING
})

var Products = sequelize.define('products', {
    name: Sequelize.STRING,
    category_id: Sequelize.INTEGER,
    description: Sequelize.STRING,
    price: Sequelize.REAL,
    image_name: Sequelize.STRING
})

// Model relationships
Products.belongsTo(Categories, {foreignKey: 'category_id', targetKey: 'id'})

//Setup db
app.get('/initdb', (request, response) => {
    sequelize.sync({force:true}).then(() => {
        response.status(200).send('Tables created')
    }).catch((err) => {
        console.log(err)
        response.status(200).send('Could not create tables')
    })
})

// API endpoints
app.get('/products', function(request, response) {
    Products.findAll(
        {
            include: [{
                model: Categories,
                where: { id: Sequelize.col('products.category_id') }
            }]
        }
        
        ).then(
            function(products) {
                response.status(200).send(products)
            }
        )
})

app.get('/products/:id', (request, response) => {
    Products.findByPk(request.params.id).then((result) => {
        if(result) {
            response.status(200).json(result)
        } else {
            response.status(404).send('resource not found')
        }
    }).catch((err) => {
        console.log(err)
        response.status(500).send('db error')
    })
})

app.post('/products', function(request, response) {
    Products.create(request.body).then(function(product) {
        response.status(201).send(product)
    })
})

app.get('/categories', function(request, response) {
    Categories.findAll().then(
        function(categories){
            response.status(200).send(categories)
        }
    )
})

app.get('/categories/:id/products', function(request, response) {
    Products.findAll({
            where:{category_id: request.params.id},
            
            include: [{
                model: Categories,
                where: { id: Sequelize.col('products.category_id') }
            }]
            }).then(
            function(products) {
                response.status(200).send(products)
            }
        )
})

app.post('/categories', function(request, response) {
    Categories.create(request.body).then(function(category) {
        response.status(201).send(category)
    })
})

app.listen(3001)
