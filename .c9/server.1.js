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

app.get('/initdb', (request, response) => {
    sequelize.sync({force:true}).then(() => {
        response.status(200).send('Tables created')
    }).catch((err) => {
        console.log(err)
        response.status(200).send('Could not create tables')
    })
})

// API endpoints
async function getProducts(request, response) {
    try {
        let products = Products.findAll(
        {
            include: [{
                model: Categories,
                where: { id: Sequelize.col('products.category_id') }
            }]
        })
        response.status(200).json(products)
    } catch(err) {
        response.status(500).send('Server failure for getProducts')
    }
}
app.get('/products', getProducts)

app.listen(3001)
