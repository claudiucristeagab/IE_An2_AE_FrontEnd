{"filter":false,"title":"Product.js","tooltip":"/frontend/src/components/Product.js","undoManager":{"mark":20,"position":20,"stack":[[{"start":{"row":0,"column":0},"end":{"row":2,"column":52},"action":"insert","lines":["import React, { Component } from 'react';","","export default class ProductList extends Component {"],"id":1}],[{"start":{"row":2,"column":52},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"insert","lines":["    "]},{"start":{"row":3,"column":4},"end":{"row":4,"column":0},"action":"insert","lines":["",""]},{"start":{"row":4,"column":0},"end":{"row":4,"column":4},"action":"insert","lines":["    "]},{"start":{"row":4,"column":4},"end":{"row":4,"column":5},"action":"insert","lines":["}"]},{"start":{"row":4,"column":0},"end":{"row":4,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":3,"column":4},"end":{"row":3,"column":14},"action":"insert","lines":["render() {"],"id":3}],[{"start":{"row":3,"column":14},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":4},{"start":{"row":4,"column":0},"end":{"row":4,"column":8},"action":"insert","lines":["        "]},{"start":{"row":4,"column":8},"end":{"row":5,"column":0},"action":"insert","lines":["",""]},{"start":{"row":5,"column":0},"end":{"row":5,"column":8},"action":"insert","lines":["        "]},{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"insert","lines":["}"]},{"start":{"row":5,"column":0},"end":{"row":5,"column":8},"action":"remove","lines":["        "]},{"start":{"row":5,"column":0},"end":{"row":5,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":4,"column":4},"end":{"row":4,"column":5},"action":"remove","lines":[" "],"id":5}],[{"start":{"row":4,"column":4},"end":{"row":4,"column":8},"action":"insert","lines":["    "],"id":6}],[{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":["r"],"id":7},{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":["e"]},{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"insert","lines":["t"]},{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"insert","lines":["u"]},{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"insert","lines":["r"]},{"start":{"row":4,"column":13},"end":{"row":4,"column":14},"action":"insert","lines":["n"]}],[{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"insert","lines":[" "],"id":8}],[{"start":{"row":4,"column":15},"end":{"row":4,"column":17},"action":"insert","lines":["()"],"id":9}],[{"start":{"row":4,"column":16},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":10},{"start":{"row":5,"column":0},"end":{"row":5,"column":12},"action":"insert","lines":["            "]},{"start":{"row":5,"column":12},"end":{"row":6,"column":0},"action":"insert","lines":["",""]},{"start":{"row":6,"column":0},"end":{"row":6,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"remove","lines":["    "],"id":11}],[{"start":{"row":5,"column":12},"end":{"row":14,"column":22},"action":"insert","lines":["<div className = \"col-sm-3 col-lg-3\" key={product.id}>","                    <div className = \"card h-100 text-center shadow-sm\">","                        <img src={`products/${product.image_name}`} className=\"card-img-top\" alt={product.image_name} />","                        <div className=\"card-body\">","                            <h5 className=\"card-title\">{product.name}</h5>","                            <p className=\"card-text\">${product.price}</p>","                        </div>","                        <button type=\"button\" className=\"btn btn-lg btn-block btn-outline-primary\">Details</button>","                    </div>","                </div>"],"id":12}],[{"start":{"row":3,"column":14},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":13},{"start":{"row":4,"column":0},"end":{"row":4,"column":8},"action":"insert","lines":["        "]},{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":["c"]},{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":["o"]},{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"insert","lines":["n"]},{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"insert","lines":["s"]},{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"insert","lines":["t"]}],[{"start":{"row":4,"column":13},"end":{"row":4,"column":14},"action":"insert","lines":[" "],"id":14},{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"insert","lines":["p"]},{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"insert","lines":["r"]},{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"insert","lines":["o"]},{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"insert","lines":["d"]},{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"insert","lines":["c"]}],[{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"remove","lines":["c"],"id":15}],[{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"insert","lines":["u"],"id":16},{"start":{"row":4,"column":19},"end":{"row":4,"column":20},"action":"insert","lines":["c"]},{"start":{"row":4,"column":20},"end":{"row":4,"column":21},"action":"insert","lines":["t"]}],[{"start":{"row":4,"column":21},"end":{"row":4,"column":22},"action":"insert","lines":[" "],"id":17},{"start":{"row":4,"column":22},"end":{"row":4,"column":23},"action":"insert","lines":["="]}],[{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"insert","lines":[" "],"id":18},{"start":{"row":4,"column":24},"end":{"row":4,"column":25},"action":"insert","lines":["t"]},{"start":{"row":4,"column":25},"end":{"row":4,"column":26},"action":"insert","lines":["h"]},{"start":{"row":4,"column":26},"end":{"row":4,"column":27},"action":"insert","lines":["i"]},{"start":{"row":4,"column":27},"end":{"row":4,"column":28},"action":"insert","lines":["s"]},{"start":{"row":4,"column":28},"end":{"row":4,"column":29},"action":"insert","lines":["."]},{"start":{"row":4,"column":29},"end":{"row":4,"column":30},"action":"insert","lines":["p"]},{"start":{"row":4,"column":30},"end":{"row":4,"column":31},"action":"insert","lines":["r"]},{"start":{"row":4,"column":31},"end":{"row":4,"column":32},"action":"insert","lines":["o"]},{"start":{"row":4,"column":32},"end":{"row":4,"column":33},"action":"insert","lines":["p"]},{"start":{"row":4,"column":33},"end":{"row":4,"column":34},"action":"insert","lines":["s"]}],[{"start":{"row":4,"column":34},"end":{"row":4,"column":35},"action":"insert","lines":["."],"id":19},{"start":{"row":4,"column":35},"end":{"row":4,"column":36},"action":"insert","lines":["p"]},{"start":{"row":4,"column":36},"end":{"row":4,"column":37},"action":"insert","lines":["r"]},{"start":{"row":4,"column":37},"end":{"row":4,"column":38},"action":"insert","lines":["o"]},{"start":{"row":4,"column":38},"end":{"row":4,"column":39},"action":"insert","lines":["d"]}],[{"start":{"row":4,"column":35},"end":{"row":4,"column":39},"action":"remove","lines":["prod"],"id":20},{"start":{"row":4,"column":35},"end":{"row":4,"column":42},"action":"insert","lines":["product"]}],[{"start":{"row":2,"column":21},"end":{"row":2,"column":32},"action":"remove","lines":["ProductList"],"id":21},{"start":{"row":2,"column":21},"end":{"row":2,"column":32},"action":"insert","lines":["ProductCard"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":2,"column":32},"end":{"row":2,"column":32},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1578760966898,"hash":"e3737b1d9b6b6598a3b57d62754b70774da17b7f"}