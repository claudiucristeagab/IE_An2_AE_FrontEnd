{"filter":false,"title":"server.js","tooltip":"/backend/server.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":64,"column":14},"end":{"row":64,"column":15},"action":"insert","lines":["1"],"id":357}],[{"start":{"row":62,"column":33},"end":{"row":63,"column":0},"action":"insert","lines":["",""],"id":359},{"start":{"row":63,"column":0},"end":{"row":64,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":64,"column":0},"end":{"row":78,"column":33},"action":"insert","lines":["async function getProducts(request, response) {","    try {","        let products = Products.findAll(","        {","            include: [{","                model: Categories,","                where: { id: Sequelize.col('products.category_id') }","            }]","        })","        response.status(200).json(products)","    } catch(err) {","        response.status(500).send('Server failure for getProducts')","    }","}","app.get('/products', getProducts)"],"id":360}],[{"start":{"row":64,"column":25},"end":{"row":64,"column":26},"action":"remove","lines":["s"],"id":361},{"start":{"row":64,"column":24},"end":{"row":64,"column":25},"action":"remove","lines":["t"]},{"start":{"row":64,"column":23},"end":{"row":64,"column":24},"action":"remove","lines":["c"]},{"start":{"row":64,"column":22},"end":{"row":64,"column":23},"action":"remove","lines":["u"]},{"start":{"row":64,"column":21},"end":{"row":64,"column":22},"action":"remove","lines":["d"]},{"start":{"row":64,"column":20},"end":{"row":64,"column":21},"action":"remove","lines":["o"]},{"start":{"row":64,"column":19},"end":{"row":64,"column":20},"action":"remove","lines":["r"]},{"start":{"row":64,"column":18},"end":{"row":64,"column":19},"action":"remove","lines":["P"]}],[{"start":{"row":64,"column":18},"end":{"row":64,"column":19},"action":"insert","lines":["C"],"id":362},{"start":{"row":64,"column":19},"end":{"row":64,"column":20},"action":"insert","lines":["a"]},{"start":{"row":64,"column":20},"end":{"row":64,"column":21},"action":"insert","lines":["t"]},{"start":{"row":64,"column":21},"end":{"row":64,"column":22},"action":"insert","lines":["e"]},{"start":{"row":64,"column":22},"end":{"row":64,"column":23},"action":"insert","lines":["g"]},{"start":{"row":64,"column":23},"end":{"row":64,"column":24},"action":"insert","lines":["p"]},{"start":{"row":64,"column":24},"end":{"row":64,"column":25},"action":"insert","lines":["r"]}],[{"start":{"row":64,"column":24},"end":{"row":64,"column":25},"action":"remove","lines":["r"],"id":363},{"start":{"row":64,"column":23},"end":{"row":64,"column":24},"action":"remove","lines":["p"]}],[{"start":{"row":64,"column":23},"end":{"row":64,"column":24},"action":"insert","lines":["o"],"id":364},{"start":{"row":64,"column":24},"end":{"row":64,"column":25},"action":"insert","lines":["r"]},{"start":{"row":64,"column":25},"end":{"row":64,"column":26},"action":"insert","lines":["i"]},{"start":{"row":64,"column":26},"end":{"row":64,"column":27},"action":"insert","lines":["e"]},{"start":{"row":64,"column":27},"end":{"row":64,"column":28},"action":"insert","lines":["s"]}],[{"start":{"row":66,"column":23},"end":{"row":66,"column":31},"action":"remove","lines":["Products"],"id":365},{"start":{"row":66,"column":23},"end":{"row":66,"column":24},"action":"insert","lines":["C"]},{"start":{"row":66,"column":24},"end":{"row":66,"column":25},"action":"insert","lines":["a"]},{"start":{"row":66,"column":25},"end":{"row":66,"column":26},"action":"insert","lines":["t"]},{"start":{"row":66,"column":26},"end":{"row":66,"column":27},"action":"insert","lines":["e"]}],[{"start":{"row":66,"column":23},"end":{"row":66,"column":27},"action":"remove","lines":["Cate"],"id":366},{"start":{"row":66,"column":23},"end":{"row":66,"column":33},"action":"insert","lines":["Categories"]}],[{"start":{"row":68,"column":0},"end":{"row":71,"column":14},"action":"remove","lines":["            include: [{","                model: Categories,","                where: { id: Sequelize.col('products.category_id') }","            }]"],"id":367},{"start":{"row":67,"column":9},"end":{"row":68,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":67,"column":9},"end":{"row":68,"column":0},"action":"insert","lines":["",""],"id":368},{"start":{"row":68,"column":0},"end":{"row":68,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":66,"column":12},"end":{"row":66,"column":20},"action":"remove","lines":["products"],"id":369},{"start":{"row":66,"column":12},"end":{"row":66,"column":13},"action":"insert","lines":["c"]},{"start":{"row":66,"column":13},"end":{"row":66,"column":14},"action":"insert","lines":["a"]},{"start":{"row":66,"column":14},"end":{"row":66,"column":15},"action":"insert","lines":["t"]},{"start":{"row":66,"column":15},"end":{"row":66,"column":16},"action":"insert","lines":["e"]}],[{"start":{"row":66,"column":12},"end":{"row":66,"column":16},"action":"remove","lines":["cate"],"id":370},{"start":{"row":66,"column":12},"end":{"row":66,"column":22},"action":"insert","lines":["categories"]}],[{"start":{"row":70,"column":34},"end":{"row":70,"column":42},"action":"remove","lines":["products"],"id":371},{"start":{"row":70,"column":34},"end":{"row":70,"column":44},"action":"insert","lines":["categories"]}],[{"start":{"row":75,"column":10},"end":{"row":75,"column":18},"action":"remove","lines":["products"],"id":372},{"start":{"row":75,"column":10},"end":{"row":75,"column":20},"action":"insert","lines":["categories"]}],[{"start":{"row":75,"column":23},"end":{"row":75,"column":34},"action":"remove","lines":["getProducts"],"id":373},{"start":{"row":75,"column":23},"end":{"row":75,"column":36},"action":"insert","lines":["getCategories"]}],[{"start":{"row":62,"column":33},"end":{"row":63,"column":0},"action":"insert","lines":["",""],"id":374},{"start":{"row":63,"column":0},"end":{"row":64,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":64,"column":0},"end":{"row":78,"column":33},"action":"insert","lines":["async function getProducts(request, response) {","    try {","        let products = Products.findAll(","        {","            include: [{","                model: Categories,","                where: { id: Sequelize.col('products.category_id') }","            }]","        })","        response.status(200).json(products)","    } catch(err) {","        response.status(500).send('Server failure for getProducts')","    }","}","app.get('/products', getProducts)"],"id":375}],[{"start":{"row":64,"column":25},"end":{"row":64,"column":26},"action":"remove","lines":["s"],"id":376}],[{"start":{"row":64,"column":25},"end":{"row":64,"column":26},"action":"insert","lines":["B"],"id":377},{"start":{"row":64,"column":26},"end":{"row":64,"column":27},"action":"insert","lines":["y"]},{"start":{"row":64,"column":27},"end":{"row":64,"column":28},"action":"insert","lines":["I"]}],[{"start":{"row":64,"column":28},"end":{"row":64,"column":29},"action":"insert","lines":["d"],"id":378}],[{"start":{"row":78,"column":18},"end":{"row":78,"column":21},"action":"insert","lines":[":id"],"id":382}],[{"start":{"row":78,"column":18},"end":{"row":78,"column":19},"action":"insert","lines":["/"],"id":383}],[{"start":{"row":66,"column":32},"end":{"row":66,"column":39},"action":"remove","lines":["findAll"],"id":384},{"start":{"row":66,"column":32},"end":{"row":66,"column":40},"action":"insert","lines":["findByPk"]}],[{"start":{"row":63,"column":0},"end":{"row":64,"column":0},"action":"insert","lines":["",""],"id":385},{"start":{"row":64,"column":0},"end":{"row":65,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":64,"column":0},"end":{"row":75,"column":2},"action":"insert","lines":["app.get('/messages/:id', (request, response) => {","    Messages.findByPk(request.params.id).then((result) => {","        if(result) {","            response.status(200).json(result)","        } else {","            response.status(404).send('resource not found')","        }","    }).catch((err) => {","        console.log(err)","        response.status(500).send('database error')","    })","})"],"id":386}],[{"start":{"row":65,"column":4},"end":{"row":65,"column":12},"action":"remove","lines":["Messages"],"id":387},{"start":{"row":65,"column":4},"end":{"row":65,"column":12},"action":"insert","lines":["Products"]}],[{"start":{"row":76,"column":0},"end":{"row":91,"column":37},"action":"remove","lines":["","async function getProductById(request, response) {","    try {","        let products = Products.findByPk(","        {","            include: [{","                model: Categories,","                where: { id: Sequelize.col('products.category_id') }","            }]","        })","        response.status(200).json(products)","    } catch(err) {","        response.status(500).send('Server failure for getProducts')","    }","}","app.get('/products/:id', getProducts)"],"id":388},{"start":{"row":75,"column":2},"end":{"row":76,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":64,"column":10},"end":{"row":64,"column":18},"action":"remove","lines":["messages"],"id":389},{"start":{"row":64,"column":10},"end":{"row":64,"column":18},"action":"insert","lines":["products"]}],[{"start":{"row":73,"column":35},"end":{"row":73,"column":43},"action":"remove","lines":["database"],"id":390},{"start":{"row":73,"column":35},"end":{"row":73,"column":36},"action":"insert","lines":["d"]},{"start":{"row":73,"column":36},"end":{"row":73,"column":37},"action":"insert","lines":["b"]}],[{"start":{"row":62,"column":33},"end":{"row":63,"column":0},"action":"insert","lines":["",""],"id":391},{"start":{"row":63,"column":0},"end":{"row":64,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":64,"column":0},"end":{"row":64,"column":44},"action":"insert","lines":["app.get('/products/:id', (request, response)"],"id":392}],[{"start":{"row":64,"column":44},"end":{"row":64,"column":45},"action":"insert","lines":[" "],"id":393},{"start":{"row":64,"column":45},"end":{"row":64,"column":46},"action":"insert","lines":["="]},{"start":{"row":64,"column":46},"end":{"row":64,"column":47},"action":"insert","lines":["{"]}],[{"start":{"row":64,"column":47},"end":{"row":66,"column":1},"action":"insert","lines":["","    ","}"],"id":394}],[{"start":{"row":65,"column":4},"end":{"row":71,"column":9},"action":"insert","lines":["Products.findAll(","        {","            include: [{","                model: Categories,","                where: { id: Sequelize.col('products.category_id') }","            }]","        }"],"id":395}],[{"start":{"row":71,"column":9},"end":{"row":71,"column":10},"action":"insert","lines":[")"],"id":396},{"start":{"row":71,"column":10},"end":{"row":71,"column":11},"action":"insert","lines":["."]},{"start":{"row":71,"column":11},"end":{"row":71,"column":12},"action":"insert","lines":["t"]},{"start":{"row":71,"column":12},"end":{"row":71,"column":13},"action":"insert","lines":["h"]},{"start":{"row":71,"column":13},"end":{"row":71,"column":14},"action":"insert","lines":["e"]},{"start":{"row":71,"column":14},"end":{"row":71,"column":15},"action":"insert","lines":["n"]}],[{"start":{"row":71,"column":15},"end":{"row":71,"column":17},"action":"insert","lines":["()"],"id":397}],[{"start":{"row":71,"column":16},"end":{"row":71,"column":17},"action":"insert","lines":["r"],"id":398},{"start":{"row":71,"column":17},"end":{"row":71,"column":18},"action":"insert","lines":["e"]},{"start":{"row":71,"column":18},"end":{"row":71,"column":19},"action":"insert","lines":["s"]},{"start":{"row":71,"column":19},"end":{"row":71,"column":20},"action":"insert","lines":["u"]}],[{"start":{"row":71,"column":16},"end":{"row":71,"column":20},"action":"remove","lines":["resu"],"id":399},{"start":{"row":71,"column":16},"end":{"row":71,"column":22},"action":"insert","lines":["result"]}],[{"start":{"row":71,"column":23},"end":{"row":71,"column":24},"action":"insert","lines":[" "],"id":400},{"start":{"row":71,"column":24},"end":{"row":71,"column":25},"action":"insert","lines":["="]},{"start":{"row":71,"column":25},"end":{"row":71,"column":26},"action":"insert","lines":[">"]}],[{"start":{"row":71,"column":26},"end":{"row":71,"column":27},"action":"insert","lines":[" "],"id":401},{"start":{"row":71,"column":27},"end":{"row":71,"column":28},"action":"insert","lines":["{"]}],[{"start":{"row":71,"column":28},"end":{"row":73,"column":9},"action":"insert","lines":["","            ","        }"],"id":402}],[{"start":{"row":72,"column":12},"end":{"row":76,"column":9},"action":"insert","lines":["if(result) {","            response.status(200).json(result)","        } else {","            response.status(404).send('resource not found')","        }"],"id":403}],[{"start":{"row":76,"column":8},"end":{"row":76,"column":12},"action":"insert","lines":["    "],"id":404}],[{"start":{"row":48,"column":0},"end":{"row":78,"column":1},"action":"remove","lines":["async function getProducts(request, response) {","    try {","        let products = Products.findAll(","        {","            include: [{","                model: Categories,","                where: { id: Sequelize.col('products.category_id') }","            }]","        })","        response.status(200).json(products)","    } catch(err) {","        response.status(500).send('Server failure for getProducts')","    }","}","app.get('/products', getProducts)","","app.get('/products/:id', (request, response) ={","    Products.findAll(","        {","            include: [{","                model: Categories,","                where: { id: Sequelize.col('products.category_id') }","            }]","        }).then(result) => {","            if(result) {","            response.status(200).json(result)","        } else {","            response.status(404).send('resource not found')","            }","        }","}"],"id":405}],[{"start":{"row":48,"column":0},"end":{"row":66,"column":2},"action":"insert","lines":["app.get('/products', function(request, response) {","    Products.findAll(","        {","            include: [{","                model: Categories,","                where: { id: Sequelize.col('products.category_id') }","            }, {","                model: Reviews,","                where: { id: Sequelize.col('products.id')},","                required: false","            }]","        }","        ","        ).then(","            function(products) {","                response.status(200).send(products)","            }","        )","})"],"id":406}],[{"start":{"row":54,"column":13},"end":{"row":58,"column":13},"action":"remove","lines":[", {","                model: Reviews,","                where: { id: Sequelize.col('products.id')},","                required: false","            }"],"id":407}],[{"start":{"row":37,"column":0},"end":{"row":38,"column":0},"action":"insert","lines":["",""],"id":408},{"start":{"row":38,"column":0},"end":{"row":38,"column":1},"action":"insert","lines":["/"]},{"start":{"row":38,"column":1},"end":{"row":38,"column":2},"action":"insert","lines":["/"]},{"start":{"row":38,"column":2},"end":{"row":38,"column":3},"action":"insert","lines":["S"]},{"start":{"row":38,"column":3},"end":{"row":38,"column":4},"action":"insert","lines":["e"]},{"start":{"row":38,"column":4},"end":{"row":38,"column":5},"action":"insert","lines":["t"]},{"start":{"row":38,"column":5},"end":{"row":38,"column":6},"action":"insert","lines":["u"]},{"start":{"row":38,"column":6},"end":{"row":38,"column":7},"action":"insert","lines":["p"]}],[{"start":{"row":38,"column":7},"end":{"row":38,"column":8},"action":"insert","lines":[" "],"id":409},{"start":{"row":38,"column":8},"end":{"row":38,"column":9},"action":"insert","lines":["d"]},{"start":{"row":38,"column":9},"end":{"row":38,"column":10},"action":"insert","lines":["b"]}],[{"start":{"row":90,"column":0},"end":{"row":91,"column":0},"action":"insert","lines":["",""],"id":410},{"start":{"row":91,"column":0},"end":{"row":92,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":91,"column":0},"end":{"row":99,"column":2},"action":"insert","lines":["app.get('/categories/:id', function(request, response) {","    Categories.findOne({where: {id:request.params.id}}).then(function(category) {","        if(category) {","            response.status(200).send(category)","        } else {","            response.status(404).send()","        }","    })","})"],"id":411}],[{"start":{"row":91,"column":0},"end":{"row":99,"column":2},"action":"remove","lines":["app.get('/categories/:id', function(request, response) {","    Categories.findOne({where: {id:request.params.id}}).then(function(category) {","        if(category) {","            response.status(200).send(category)","        } else {","            response.status(404).send()","        }","    })","})"],"id":412},{"start":{"row":91,"column":0},"end":{"row":109,"column":2},"action":"insert","lines":["app.get('/categories/:id/products', function(request, response) {","    Products.findAll({","            where:{category_id: request.params.id},","            ","            include: [{","                model: Categories,","                where: { id: Sequelize.col('products.category_id') }","            }, {","                model: Reviews,","                where: { id: Sequelize.col('products.id')},","                required: false","            }]","        }","            ).then(","            function(products) {","                response.status(200).send(products)","            }","        )","})"]}],[{"start":{"row":98,"column":13},"end":{"row":102,"column":14},"action":"remove","lines":[", {","                model: Reviews,","                where: { id: Sequelize.col('products.id')},","                required: false","            }]"],"id":413}],[{"start":{"row":98,"column":13},"end":{"row":98,"column":14},"action":"insert","lines":["]"],"id":414}],[{"start":{"row":99,"column":8},"end":{"row":99,"column":12},"action":"insert","lines":["    "],"id":415}],[{"start":{"row":100,"column":8},"end":{"row":100,"column":12},"action":"remove","lines":["    "],"id":416},{"start":{"row":100,"column":4},"end":{"row":100,"column":8},"action":"remove","lines":["    "]},{"start":{"row":100,"column":0},"end":{"row":100,"column":4},"action":"remove","lines":["    "]},{"start":{"row":99,"column":13},"end":{"row":100,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":104,"column":2},"end":{"row":105,"column":0},"action":"insert","lines":["",""],"id":421},{"start":{"row":105,"column":0},"end":{"row":106,"column":0},"action":"insert","lines":["",""]},{"start":{"row":106,"column":0},"end":{"row":106,"column":1},"action":"insert","lines":["a"]},{"start":{"row":106,"column":1},"end":{"row":106,"column":2},"action":"insert","lines":["p"]},{"start":{"row":106,"column":2},"end":{"row":106,"column":3},"action":"insert","lines":["p"]},{"start":{"row":106,"column":3},"end":{"row":106,"column":4},"action":"insert","lines":["."]},{"start":{"row":106,"column":4},"end":{"row":106,"column":5},"action":"insert","lines":["p"]}],[{"start":{"row":106,"column":5},"end":{"row":106,"column":6},"action":"insert","lines":["o"],"id":422},{"start":{"row":106,"column":6},"end":{"row":106,"column":7},"action":"insert","lines":["s"]},{"start":{"row":106,"column":7},"end":{"row":106,"column":8},"action":"insert","lines":["t"]}],[{"start":{"row":106,"column":0},"end":{"row":106,"column":8},"action":"remove","lines":["app.post"],"id":423},{"start":{"row":106,"column":0},"end":{"row":110,"column":2},"action":"insert","lines":["app.post('/reviews', function(request, response) {","    Reviews.create(request.body).then(function(review) {","        response.status(201).send(review)","    })","})"]}],[{"start":{"row":107,"column":4},"end":{"row":107,"column":11},"action":"remove","lines":["Reviews"],"id":424},{"start":{"row":107,"column":4},"end":{"row":107,"column":5},"action":"insert","lines":["C"]},{"start":{"row":107,"column":5},"end":{"row":107,"column":6},"action":"insert","lines":["a"]}],[{"start":{"row":107,"column":4},"end":{"row":107,"column":6},"action":"remove","lines":["Ca"],"id":425},{"start":{"row":107,"column":4},"end":{"row":107,"column":14},"action":"insert","lines":["Categories"]}],[{"start":{"row":106,"column":11},"end":{"row":106,"column":18},"action":"remove","lines":["reviews"],"id":426},{"start":{"row":106,"column":11},"end":{"row":106,"column":12},"action":"insert","lines":["c"]},{"start":{"row":106,"column":12},"end":{"row":106,"column":13},"action":"insert","lines":["a"]},{"start":{"row":106,"column":13},"end":{"row":106,"column":14},"action":"insert","lines":["t"]},{"start":{"row":106,"column":14},"end":{"row":106,"column":15},"action":"insert","lines":["e"]},{"start":{"row":106,"column":15},"end":{"row":106,"column":16},"action":"insert","lines":["g"]}],[{"start":{"row":106,"column":16},"end":{"row":106,"column":17},"action":"insert","lines":["o"],"id":427},{"start":{"row":106,"column":17},"end":{"row":106,"column":18},"action":"insert","lines":["r"]},{"start":{"row":106,"column":18},"end":{"row":106,"column":19},"action":"insert","lines":["i"]},{"start":{"row":106,"column":19},"end":{"row":106,"column":20},"action":"insert","lines":["e"]},{"start":{"row":106,"column":20},"end":{"row":106,"column":21},"action":"insert","lines":["s"]}],[{"start":{"row":77,"column":0},"end":{"row":78,"column":0},"action":"insert","lines":["",""],"id":428}],[{"start":{"row":108,"column":50},"end":{"row":108,"column":56},"action":"remove","lines":["review"],"id":429},{"start":{"row":108,"column":50},"end":{"row":108,"column":51},"action":"insert","lines":["c"]},{"start":{"row":108,"column":51},"end":{"row":108,"column":52},"action":"insert","lines":["a"]},{"start":{"row":108,"column":52},"end":{"row":108,"column":53},"action":"insert","lines":["t"]},{"start":{"row":108,"column":53},"end":{"row":108,"column":54},"action":"insert","lines":["e"]}],[{"start":{"row":108,"column":54},"end":{"row":108,"column":55},"action":"insert","lines":["g"],"id":430},{"start":{"row":108,"column":55},"end":{"row":108,"column":56},"action":"insert","lines":["o"]},{"start":{"row":108,"column":56},"end":{"row":108,"column":57},"action":"insert","lines":["r"]},{"start":{"row":108,"column":57},"end":{"row":108,"column":58},"action":"insert","lines":["y"]}],[{"start":{"row":109,"column":34},"end":{"row":109,"column":40},"action":"remove","lines":["review"],"id":431},{"start":{"row":109,"column":34},"end":{"row":109,"column":42},"action":"insert","lines":["category"]}],[{"start":{"row":77,"column":0},"end":{"row":78,"column":0},"action":"insert","lines":["",""],"id":432}],[{"start":{"row":78,"column":0},"end":{"row":82,"column":2},"action":"insert","lines":["app.post('/categories', function(request, response) {","    Categories.create(request.body).then(function(category) {","        response.status(201).send(category)","    })","})"],"id":433}],[{"start":{"row":78,"column":11},"end":{"row":78,"column":21},"action":"remove","lines":["categories"],"id":434},{"start":{"row":78,"column":11},"end":{"row":78,"column":12},"action":"insert","lines":["p"]},{"start":{"row":78,"column":12},"end":{"row":78,"column":13},"action":"insert","lines":["r"]},{"start":{"row":78,"column":13},"end":{"row":78,"column":14},"action":"insert","lines":["o"]},{"start":{"row":78,"column":14},"end":{"row":78,"column":15},"action":"insert","lines":["d"]},{"start":{"row":78,"column":15},"end":{"row":78,"column":16},"action":"insert","lines":["u"]},{"start":{"row":78,"column":16},"end":{"row":78,"column":17},"action":"insert","lines":["c"]},{"start":{"row":78,"column":17},"end":{"row":78,"column":18},"action":"insert","lines":["t"]}],[{"start":{"row":78,"column":18},"end":{"row":78,"column":19},"action":"insert","lines":["s"],"id":435}],[{"start":{"row":79,"column":4},"end":{"row":79,"column":14},"action":"remove","lines":["Categories"],"id":436},{"start":{"row":79,"column":4},"end":{"row":79,"column":5},"action":"insert","lines":["P"]},{"start":{"row":79,"column":5},"end":{"row":79,"column":6},"action":"insert","lines":["r"]},{"start":{"row":79,"column":6},"end":{"row":79,"column":7},"action":"insert","lines":["o"]},{"start":{"row":79,"column":7},"end":{"row":79,"column":8},"action":"insert","lines":["d"]}],[{"start":{"row":79,"column":4},"end":{"row":79,"column":8},"action":"remove","lines":["Prod"],"id":437},{"start":{"row":79,"column":4},"end":{"row":79,"column":12},"action":"insert","lines":["Products"]}],[{"start":{"row":79,"column":48},"end":{"row":79,"column":56},"action":"remove","lines":["category"],"id":438},{"start":{"row":79,"column":48},"end":{"row":79,"column":49},"action":"insert","lines":["p"]},{"start":{"row":79,"column":49},"end":{"row":79,"column":50},"action":"insert","lines":["r"]},{"start":{"row":79,"column":50},"end":{"row":79,"column":51},"action":"insert","lines":["o"]},{"start":{"row":79,"column":51},"end":{"row":79,"column":52},"action":"insert","lines":["d"]},{"start":{"row":79,"column":52},"end":{"row":79,"column":53},"action":"insert","lines":["u"]}],[{"start":{"row":79,"column":48},"end":{"row":79,"column":53},"action":"remove","lines":["produ"],"id":439},{"start":{"row":79,"column":48},"end":{"row":79,"column":56},"action":"insert","lines":["products"]}],[{"start":{"row":79,"column":55},"end":{"row":79,"column":56},"action":"remove","lines":["s"],"id":440}],[{"start":{"row":80,"column":34},"end":{"row":80,"column":42},"action":"remove","lines":["category"],"id":441},{"start":{"row":80,"column":34},"end":{"row":80,"column":41},"action":"insert","lines":["product"]}],[{"start":{"row":86,"column":44},"end":{"row":89,"column":9},"action":"remove","lines":["","        {","            ","        }"],"id":443}],[{"start":{"row":92,"column":23},"end":{"row":92,"column":36},"action":"remove","lines":["getCategories"],"id":444},{"start":{"row":92,"column":23},"end":{"row":92,"column":24},"action":"insert","lines":["f"]},{"start":{"row":92,"column":24},"end":{"row":92,"column":25},"action":"insert","lines":["u"]},{"start":{"row":92,"column":25},"end":{"row":92,"column":26},"action":"insert","lines":["n"]},{"start":{"row":92,"column":26},"end":{"row":92,"column":27},"action":"insert","lines":["c"]},{"start":{"row":92,"column":27},"end":{"row":92,"column":28},"action":"insert","lines":["t"]},{"start":{"row":92,"column":28},"end":{"row":92,"column":29},"action":"insert","lines":["i"]},{"start":{"row":92,"column":29},"end":{"row":92,"column":30},"action":"insert","lines":["o"]},{"start":{"row":92,"column":30},"end":{"row":92,"column":31},"action":"insert","lines":["n"]}],[{"start":{"row":92,"column":31},"end":{"row":92,"column":49},"action":"insert","lines":["request, response)"],"id":445}],[{"start":{"row":92,"column":31},"end":{"row":92,"column":32},"action":"insert","lines":["("],"id":446}],[{"start":{"row":92,"column":50},"end":{"row":92,"column":51},"action":"insert","lines":[" "],"id":447}],[{"start":{"row":92,"column":51},"end":{"row":92,"column":53},"action":"insert","lines":["{}"],"id":448}],[{"start":{"row":92,"column":52},"end":{"row":94,"column":0},"action":"insert","lines":["","    ",""],"id":449}],[{"start":{"row":93,"column":4},"end":{"row":93,"column":24},"action":"insert","lines":["Categories.findAll()"],"id":450}],[{"start":{"row":93,"column":24},"end":{"row":93,"column":25},"action":"insert","lines":["."],"id":451},{"start":{"row":93,"column":25},"end":{"row":93,"column":26},"action":"insert","lines":["t"]},{"start":{"row":93,"column":26},"end":{"row":93,"column":27},"action":"insert","lines":["h"]},{"start":{"row":93,"column":27},"end":{"row":93,"column":28},"action":"insert","lines":["e"]}],[{"start":{"row":93,"column":25},"end":{"row":93,"column":28},"action":"remove","lines":["the"],"id":452},{"start":{"row":93,"column":25},"end":{"row":93,"column":29},"action":"insert","lines":["then"]}],[{"start":{"row":93,"column":29},"end":{"row":93,"column":30},"action":"insert","lines":["*"],"id":453}],[{"start":{"row":93,"column":29},"end":{"row":93,"column":30},"action":"remove","lines":["*"],"id":454}],[{"start":{"row":93,"column":29},"end":{"row":93,"column":31},"action":"insert","lines":["()"],"id":455}],[{"start":{"row":93,"column":30},"end":{"row":94,"column":0},"action":"insert","lines":["",""],"id":456},{"start":{"row":94,"column":0},"end":{"row":94,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":94,"column":8},"end":{"row":94,"column":9},"action":"insert","lines":["f"],"id":457},{"start":{"row":94,"column":9},"end":{"row":94,"column":10},"action":"insert","lines":["u"]},{"start":{"row":94,"column":10},"end":{"row":94,"column":11},"action":"insert","lines":["n"]},{"start":{"row":94,"column":11},"end":{"row":94,"column":12},"action":"insert","lines":["c"]},{"start":{"row":94,"column":12},"end":{"row":94,"column":13},"action":"insert","lines":["t"]},{"start":{"row":94,"column":13},"end":{"row":94,"column":14},"action":"insert","lines":["i"]},{"start":{"row":94,"column":14},"end":{"row":94,"column":15},"action":"insert","lines":["o"]},{"start":{"row":94,"column":15},"end":{"row":94,"column":16},"action":"insert","lines":["n"]}],[{"start":{"row":94,"column":16},"end":{"row":94,"column":18},"action":"insert","lines":["()"],"id":458}],[{"start":{"row":94,"column":17},"end":{"row":94,"column":18},"action":"insert","lines":["c"],"id":459},{"start":{"row":94,"column":18},"end":{"row":94,"column":19},"action":"insert","lines":["a"]},{"start":{"row":94,"column":19},"end":{"row":94,"column":20},"action":"insert","lines":["t"]},{"start":{"row":94,"column":20},"end":{"row":94,"column":21},"action":"insert","lines":["e"]},{"start":{"row":94,"column":21},"end":{"row":94,"column":22},"action":"insert","lines":["g"]},{"start":{"row":94,"column":22},"end":{"row":94,"column":23},"action":"insert","lines":["o"]},{"start":{"row":94,"column":23},"end":{"row":94,"column":24},"action":"insert","lines":["r"]},{"start":{"row":94,"column":24},"end":{"row":94,"column":25},"action":"insert","lines":["i"]},{"start":{"row":94,"column":25},"end":{"row":94,"column":26},"action":"insert","lines":["e"]},{"start":{"row":94,"column":26},"end":{"row":94,"column":27},"action":"insert","lines":["s"]}],[{"start":{"row":94,"column":28},"end":{"row":94,"column":30},"action":"insert","lines":["{}"],"id":460}],[{"start":{"row":94,"column":29},"end":{"row":96,"column":8},"action":"insert","lines":["","            ","        "],"id":461}],[{"start":{"row":95,"column":12},"end":{"row":95,"column":47},"action":"insert","lines":["response.status(200).send(products)"],"id":462}],[{"start":{"row":95,"column":38},"end":{"row":95,"column":46},"action":"remove","lines":["products"],"id":463},{"start":{"row":95,"column":38},"end":{"row":95,"column":48},"action":"insert","lines":["categories"]}],[{"start":{"row":96,"column":9},"end":{"row":97,"column":0},"action":"insert","lines":["",""],"id":464},{"start":{"row":97,"column":0},"end":{"row":97,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":97,"column":0},"end":{"row":97,"column":4},"action":"remove","lines":["    "],"id":465}],[{"start":{"row":84,"column":0},"end":{"row":91,"column":1},"action":"remove","lines":["async function getCategories(request, response) {","    try {","        let categories = Categories.findAll()","        response.status(200).json(categories)","    } catch(err) {","        response.status(500).send('Server failure for getProducts')","    }","}"],"id":466},{"start":{"row":83,"column":0},"end":{"row":84,"column":0},"action":"remove","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":668.8339157104492,"scrollleft":0,"selection":{"start":{"row":92,"column":10},"end":{"row":92,"column":20},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":3,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1578752608788,"hash":"5f675bc0f5778505a44e5db7f3cb334c9652f63e"}