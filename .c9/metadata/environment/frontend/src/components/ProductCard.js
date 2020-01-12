{"filter":false,"title":"ProductCard.js","tooltip":"/frontend/src/components/ProductCard.js","undoManager":{"mark":93,"position":93,"stack":[[{"start":{"row":0,"column":0},"end":{"row":2,"column":52},"action":"insert","lines":["import React, { Component } from 'react';","","export default class ProductList extends Component {"],"id":1}],[{"start":{"row":2,"column":52},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"insert","lines":["    "]},{"start":{"row":3,"column":4},"end":{"row":4,"column":0},"action":"insert","lines":["",""]},{"start":{"row":4,"column":0},"end":{"row":4,"column":4},"action":"insert","lines":["    "]},{"start":{"row":4,"column":4},"end":{"row":4,"column":5},"action":"insert","lines":["}"]},{"start":{"row":4,"column":0},"end":{"row":4,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":3,"column":4},"end":{"row":3,"column":14},"action":"insert","lines":["render() {"],"id":3}],[{"start":{"row":3,"column":14},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":4},{"start":{"row":4,"column":0},"end":{"row":4,"column":8},"action":"insert","lines":["        "]},{"start":{"row":4,"column":8},"end":{"row":5,"column":0},"action":"insert","lines":["",""]},{"start":{"row":5,"column":0},"end":{"row":5,"column":8},"action":"insert","lines":["        "]},{"start":{"row":5,"column":8},"end":{"row":5,"column":9},"action":"insert","lines":["}"]},{"start":{"row":5,"column":0},"end":{"row":5,"column":8},"action":"remove","lines":["        "]},{"start":{"row":5,"column":0},"end":{"row":5,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":4,"column":4},"end":{"row":4,"column":5},"action":"remove","lines":[" "],"id":5}],[{"start":{"row":4,"column":4},"end":{"row":4,"column":8},"action":"insert","lines":["    "],"id":6}],[{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":["r"],"id":7},{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":["e"]},{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"insert","lines":["t"]},{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"insert","lines":["u"]},{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"insert","lines":["r"]},{"start":{"row":4,"column":13},"end":{"row":4,"column":14},"action":"insert","lines":["n"]}],[{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"insert","lines":[" "],"id":8}],[{"start":{"row":4,"column":15},"end":{"row":4,"column":17},"action":"insert","lines":["()"],"id":9}],[{"start":{"row":4,"column":16},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":10},{"start":{"row":5,"column":0},"end":{"row":5,"column":12},"action":"insert","lines":["            "]},{"start":{"row":5,"column":12},"end":{"row":6,"column":0},"action":"insert","lines":["",""]},{"start":{"row":6,"column":0},"end":{"row":6,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"remove","lines":["    "],"id":11}],[{"start":{"row":5,"column":12},"end":{"row":14,"column":22},"action":"insert","lines":["<div className = \"col-sm-3 col-lg-3\" key={product.id}>","                    <div className = \"card h-100 text-center shadow-sm\">","                        <img src={`products/${product.image_name}`} className=\"card-img-top\" alt={product.image_name} />","                        <div className=\"card-body\">","                            <h5 className=\"card-title\">{product.name}</h5>","                            <p className=\"card-text\">${product.price}</p>","                        </div>","                        <button type=\"button\" className=\"btn btn-lg btn-block btn-outline-primary\">Details</button>","                    </div>","                </div>"],"id":12}],[{"start":{"row":3,"column":14},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":13},{"start":{"row":4,"column":0},"end":{"row":4,"column":8},"action":"insert","lines":["        "]},{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":["c"]},{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":["o"]},{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"insert","lines":["n"]},{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"insert","lines":["s"]},{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"insert","lines":["t"]}],[{"start":{"row":4,"column":13},"end":{"row":4,"column":14},"action":"insert","lines":[" "],"id":14},{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"insert","lines":["p"]},{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"insert","lines":["r"]},{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"insert","lines":["o"]},{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"insert","lines":["d"]},{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"insert","lines":["c"]}],[{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"remove","lines":["c"],"id":15}],[{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"insert","lines":["u"],"id":16},{"start":{"row":4,"column":19},"end":{"row":4,"column":20},"action":"insert","lines":["c"]},{"start":{"row":4,"column":20},"end":{"row":4,"column":21},"action":"insert","lines":["t"]}],[{"start":{"row":4,"column":21},"end":{"row":4,"column":22},"action":"insert","lines":[" "],"id":17},{"start":{"row":4,"column":22},"end":{"row":4,"column":23},"action":"insert","lines":["="]}],[{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"insert","lines":[" "],"id":18},{"start":{"row":4,"column":24},"end":{"row":4,"column":25},"action":"insert","lines":["t"]},{"start":{"row":4,"column":25},"end":{"row":4,"column":26},"action":"insert","lines":["h"]},{"start":{"row":4,"column":26},"end":{"row":4,"column":27},"action":"insert","lines":["i"]},{"start":{"row":4,"column":27},"end":{"row":4,"column":28},"action":"insert","lines":["s"]},{"start":{"row":4,"column":28},"end":{"row":4,"column":29},"action":"insert","lines":["."]},{"start":{"row":4,"column":29},"end":{"row":4,"column":30},"action":"insert","lines":["p"]},{"start":{"row":4,"column":30},"end":{"row":4,"column":31},"action":"insert","lines":["r"]},{"start":{"row":4,"column":31},"end":{"row":4,"column":32},"action":"insert","lines":["o"]},{"start":{"row":4,"column":32},"end":{"row":4,"column":33},"action":"insert","lines":["p"]},{"start":{"row":4,"column":33},"end":{"row":4,"column":34},"action":"insert","lines":["s"]}],[{"start":{"row":4,"column":34},"end":{"row":4,"column":35},"action":"insert","lines":["."],"id":19},{"start":{"row":4,"column":35},"end":{"row":4,"column":36},"action":"insert","lines":["p"]},{"start":{"row":4,"column":36},"end":{"row":4,"column":37},"action":"insert","lines":["r"]},{"start":{"row":4,"column":37},"end":{"row":4,"column":38},"action":"insert","lines":["o"]},{"start":{"row":4,"column":38},"end":{"row":4,"column":39},"action":"insert","lines":["d"]}],[{"start":{"row":4,"column":35},"end":{"row":4,"column":39},"action":"remove","lines":["prod"],"id":20},{"start":{"row":4,"column":35},"end":{"row":4,"column":42},"action":"insert","lines":["product"]}],[{"start":{"row":2,"column":21},"end":{"row":2,"column":32},"action":"remove","lines":["ProductList"],"id":21},{"start":{"row":2,"column":21},"end":{"row":2,"column":32},"action":"insert","lines":["ProductCard"]}],[{"start":{"row":12,"column":30},"end":{"row":13,"column":0},"action":"insert","lines":["",""],"id":22},{"start":{"row":13,"column":0},"end":{"row":13,"column":24},"action":"insert","lines":["                        "]},{"start":{"row":13,"column":24},"end":{"row":13,"column":25},"action":"insert","lines":["<"]},{"start":{"row":13,"column":25},"end":{"row":13,"column":26},"action":"insert","lines":["L"]},{"start":{"row":13,"column":26},"end":{"row":13,"column":27},"action":"insert","lines":["i"]},{"start":{"row":13,"column":27},"end":{"row":13,"column":28},"action":"insert","lines":["n"]},{"start":{"row":13,"column":28},"end":{"row":13,"column":29},"action":"insert","lines":["k"]}],[{"start":{"row":13,"column":29},"end":{"row":13,"column":30},"action":"insert","lines":[" "],"id":23},{"start":{"row":13,"column":30},"end":{"row":13,"column":31},"action":"insert","lines":["t"]},{"start":{"row":13,"column":31},"end":{"row":13,"column":32},"action":"insert","lines":["o"]}],[{"start":{"row":13,"column":32},"end":{"row":13,"column":33},"action":"insert","lines":["="],"id":24}],[{"start":{"row":13,"column":33},"end":{"row":13,"column":35},"action":"insert","lines":["''"],"id":25}],[{"start":{"row":13,"column":34},"end":{"row":13,"column":35},"action":"insert","lines":["p"],"id":26},{"start":{"row":13,"column":35},"end":{"row":13,"column":36},"action":"insert","lines":["r"]},{"start":{"row":13,"column":36},"end":{"row":13,"column":37},"action":"insert","lines":["o"]},{"start":{"row":13,"column":37},"end":{"row":13,"column":38},"action":"insert","lines":["d"]},{"start":{"row":13,"column":38},"end":{"row":13,"column":39},"action":"insert","lines":["u"]},{"start":{"row":13,"column":39},"end":{"row":13,"column":40},"action":"insert","lines":["c"]},{"start":{"row":13,"column":40},"end":{"row":13,"column":41},"action":"insert","lines":["t"]},{"start":{"row":13,"column":41},"end":{"row":13,"column":42},"action":"insert","lines":["s"]}],[{"start":{"row":13,"column":42},"end":{"row":13,"column":43},"action":"insert","lines":["/"],"id":27},{"start":{"row":13,"column":43},"end":{"row":13,"column":44},"action":"insert","lines":["{"]},{"start":{"row":13,"column":44},"end":{"row":13,"column":45},"action":"insert","lines":["}"]}],[{"start":{"row":13,"column":44},"end":{"row":13,"column":45},"action":"insert","lines":["p"],"id":28},{"start":{"row":13,"column":45},"end":{"row":13,"column":46},"action":"insert","lines":["r"]},{"start":{"row":13,"column":46},"end":{"row":13,"column":47},"action":"insert","lines":["o"]},{"start":{"row":13,"column":47},"end":{"row":13,"column":48},"action":"insert","lines":["d"]},{"start":{"row":13,"column":48},"end":{"row":13,"column":49},"action":"insert","lines":["u"]},{"start":{"row":13,"column":49},"end":{"row":13,"column":50},"action":"insert","lines":["c"]},{"start":{"row":13,"column":50},"end":{"row":13,"column":51},"action":"insert","lines":["t"]},{"start":{"row":13,"column":51},"end":{"row":13,"column":52},"action":"insert","lines":["."]},{"start":{"row":13,"column":52},"end":{"row":13,"column":53},"action":"insert","lines":["i"]},{"start":{"row":13,"column":53},"end":{"row":13,"column":54},"action":"insert","lines":["d"]}],[{"start":{"row":13,"column":56},"end":{"row":13,"column":57},"action":"insert","lines":[">"],"id":29}],[{"start":{"row":14,"column":24},"end":{"row":14,"column":28},"action":"insert","lines":["    "],"id":30}],[{"start":{"row":14,"column":119},"end":{"row":15,"column":0},"action":"insert","lines":["",""],"id":31},{"start":{"row":15,"column":0},"end":{"row":15,"column":28},"action":"insert","lines":["                            "]}],[{"start":{"row":15,"column":24},"end":{"row":15,"column":28},"action":"remove","lines":["    "],"id":32}],[{"start":{"row":15,"column":24},"end":{"row":15,"column":25},"action":"insert","lines":["<"],"id":33},{"start":{"row":15,"column":25},"end":{"row":15,"column":26},"action":"insert","lines":["/"]},{"start":{"row":15,"column":26},"end":{"row":15,"column":27},"action":"insert","lines":["L"]},{"start":{"row":15,"column":27},"end":{"row":15,"column":28},"action":"insert","lines":["i"]},{"start":{"row":15,"column":28},"end":{"row":15,"column":29},"action":"insert","lines":["n"]},{"start":{"row":15,"column":29},"end":{"row":15,"column":30},"action":"insert","lines":["k"]}],[{"start":{"row":15,"column":30},"end":{"row":15,"column":31},"action":"insert","lines":[">"],"id":34}],[{"start":{"row":0,"column":41},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":35}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":38},"action":"insert","lines":["import {Link} from \"react-router-dom\";"],"id":36}],[{"start":{"row":14,"column":43},"end":{"row":14,"column":44},"action":"insert","lines":["$"],"id":37}],[{"start":{"row":14,"column":44},"end":{"row":14,"column":45},"action":"remove","lines":["{"],"id":38}],[{"start":{"row":14,"column":44},"end":{"row":14,"column":45},"action":"insert","lines":["("],"id":39}],[{"start":{"row":14,"column":55},"end":{"row":14,"column":56},"action":"remove","lines":["}"],"id":40}],[{"start":{"row":14,"column":55},"end":{"row":14,"column":56},"action":"insert","lines":[")"],"id":41}],[{"start":{"row":14,"column":33},"end":{"row":14,"column":34},"action":"insert","lines":["{"],"id":42}],[{"start":{"row":14,"column":45},"end":{"row":14,"column":46},"action":"remove","lines":["("],"id":43},{"start":{"row":14,"column":44},"end":{"row":14,"column":45},"action":"remove","lines":["$"]}],[{"start":{"row":14,"column":44},"end":{"row":14,"column":45},"action":"insert","lines":["{"],"id":44}],[{"start":{"row":14,"column":57},"end":{"row":14,"column":58},"action":"insert","lines":["}"],"id":45}],[{"start":{"row":14,"column":55},"end":{"row":14,"column":56},"action":"remove","lines":[")"],"id":46}],[{"start":{"row":14,"column":55},"end":{"row":14,"column":56},"action":"insert","lines":["}"],"id":47}],[{"start":{"row":14,"column":44},"end":{"row":14,"column":45},"action":"insert","lines":["$"],"id":48}],[{"start":{"row":14,"column":33},"end":{"row":14,"column":59},"action":"remove","lines":["{'products/${product.id}'}"],"id":49},{"start":{"row":14,"column":33},"end":{"row":14,"column":67},"action":"insert","lines":["{`products/${product.image_name}`}"]}],[{"start":{"row":14,"column":54},"end":{"row":14,"column":64},"action":"remove","lines":["image_name"],"id":50},{"start":{"row":14,"column":54},"end":{"row":14,"column":55},"action":"insert","lines":["i"]},{"start":{"row":14,"column":55},"end":{"row":14,"column":56},"action":"insert","lines":["d"]}],[{"start":{"row":8,"column":47},"end":{"row":8,"column":48},"action":"remove","lines":["0"],"id":51},{"start":{"row":8,"column":46},"end":{"row":8,"column":47},"action":"remove","lines":["0"]},{"start":{"row":8,"column":45},"end":{"row":8,"column":46},"action":"remove","lines":["1"]}],[{"start":{"row":8,"column":45},"end":{"row":8,"column":46},"action":"insert","lines":["5"],"id":52},{"start":{"row":8,"column":46},"end":{"row":8,"column":47},"action":"insert","lines":["0"]}],[{"start":{"row":8,"column":46},"end":{"row":8,"column":47},"action":"remove","lines":["0"],"id":61},{"start":{"row":8,"column":45},"end":{"row":8,"column":46},"action":"remove","lines":["5"]}],[{"start":{"row":8,"column":45},"end":{"row":8,"column":46},"action":"insert","lines":["1"],"id":62},{"start":{"row":8,"column":46},"end":{"row":8,"column":47},"action":"insert","lines":["0"]},{"start":{"row":8,"column":47},"end":{"row":8,"column":48},"action":"insert","lines":["0"]}],[{"start":{"row":8,"column":72},"end":{"row":9,"column":0},"action":"insert","lines":["",""],"id":63},{"start":{"row":9,"column":0},"end":{"row":9,"column":20},"action":"insert","lines":["                    "]}],[{"start":{"row":9,"column":20},"end":{"row":9,"column":24},"action":"insert","lines":["    "],"id":64}],[{"start":{"row":9,"column":24},"end":{"row":9,"column":60},"action":"insert","lines":["<Link to={`products/${product.id}`}>"],"id":65}],[{"start":{"row":10,"column":24},"end":{"row":10,"column":28},"action":"insert","lines":["    "],"id":66}],[{"start":{"row":10,"column":124},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":67},{"start":{"row":11,"column":0},"end":{"row":11,"column":28},"action":"insert","lines":["                            "]}],[{"start":{"row":11,"column":24},"end":{"row":11,"column":28},"action":"remove","lines":["    "],"id":68}],[{"start":{"row":11,"column":24},"end":{"row":11,"column":25},"action":"insert","lines":["<"],"id":69},{"start":{"row":11,"column":25},"end":{"row":11,"column":26},"action":"insert","lines":["L"]},{"start":{"row":11,"column":26},"end":{"row":11,"column":27},"action":"insert","lines":["i"]},{"start":{"row":11,"column":27},"end":{"row":11,"column":28},"action":"insert","lines":["n"]},{"start":{"row":11,"column":28},"end":{"row":11,"column":29},"action":"insert","lines":["k"]}],[{"start":{"row":11,"column":29},"end":{"row":11,"column":30},"action":"insert","lines":[">"],"id":70}],[{"start":{"row":11,"column":25},"end":{"row":11,"column":26},"action":"insert","lines":["/"],"id":71}],[{"start":{"row":10,"column":39},"end":{"row":10,"column":40},"action":"insert","lines":["/"],"id":74}],[{"start":{"row":16,"column":35},"end":{"row":16,"column":36},"action":"insert","lines":["/"],"id":75}],[{"start":{"row":9,"column":35},"end":{"row":9,"column":36},"action":"insert","lines":["?"],"id":76}],[{"start":{"row":9,"column":35},"end":{"row":9,"column":36},"action":"remove","lines":["?"],"id":77}],[{"start":{"row":9,"column":35},"end":{"row":9,"column":36},"action":"insert","lines":["/"],"id":78}],[{"start":{"row":10,"column":96},"end":{"row":10,"column":97},"action":"insert","lines":[" "],"id":79}],[{"start":{"row":10,"column":96},"end":{"row":10,"column":97},"action":"remove","lines":[" "],"id":81}],[{"start":{"row":10,"column":96},"end":{"row":10,"column":97},"action":"insert","lines":[" "],"id":83}],[{"start":{"row":10,"column":97},"end":{"row":10,"column":118},"action":"insert","lines":["embed-responsive-item"],"id":84}],[{"start":{"row":8,"column":43},"end":{"row":8,"column":57},"action":"insert","lines":["border-primary"],"id":103}],[{"start":{"row":8,"column":57},"end":{"row":8,"column":58},"action":"insert","lines":[" "],"id":104}],[{"start":{"row":14,"column":73},"end":{"row":15,"column":0},"action":"insert","lines":["",""],"id":105},{"start":{"row":15,"column":0},"end":{"row":15,"column":28},"action":"insert","lines":["                            "]}],[{"start":{"row":15,"column":28},"end":{"row":15,"column":73},"action":"insert","lines":["<p className=\"card-text\">${product.price}</p>"],"id":107}],[{"start":{"row":15,"column":63},"end":{"row":15,"column":68},"action":"remove","lines":["price"],"id":108},{"start":{"row":15,"column":63},"end":{"row":15,"column":64},"action":"insert","lines":["c"]},{"start":{"row":15,"column":64},"end":{"row":15,"column":65},"action":"insert","lines":["a"]},{"start":{"row":15,"column":65},"end":{"row":15,"column":66},"action":"insert","lines":["t"]},{"start":{"row":15,"column":66},"end":{"row":15,"column":67},"action":"insert","lines":["e"]}],[{"start":{"row":15,"column":63},"end":{"row":15,"column":67},"action":"remove","lines":["cate"],"id":109},{"start":{"row":15,"column":63},"end":{"row":15,"column":71},"action":"insert","lines":["category"]}],[{"start":{"row":15,"column":71},"end":{"row":15,"column":72},"action":"insert","lines":["."],"id":110},{"start":{"row":15,"column":72},"end":{"row":15,"column":73},"action":"insert","lines":["n"]},{"start":{"row":15,"column":73},"end":{"row":15,"column":74},"action":"insert","lines":["a"]},{"start":{"row":15,"column":74},"end":{"row":15,"column":75},"action":"insert","lines":["m"]},{"start":{"row":15,"column":75},"end":{"row":15,"column":76},"action":"insert","lines":["e"]}],[{"start":{"row":15,"column":53},"end":{"row":15,"column":54},"action":"remove","lines":["$"],"id":111}],[{"start":{"row":8,"column":87},"end":{"row":9,"column":0},"action":"insert","lines":["",""],"id":112},{"start":{"row":9,"column":0},"end":{"row":9,"column":20},"action":"insert","lines":["                    "]}],[{"start":{"row":9,"column":20},"end":{"row":9,"column":24},"action":"insert","lines":["    "],"id":113}],[{"start":{"row":9,"column":24},"end":{"row":9,"column":25},"action":"insert","lines":["<"],"id":114}],[{"start":{"row":9,"column":25},"end":{"row":9,"column":26},"action":"insert","lines":["d"],"id":115},{"start":{"row":9,"column":26},"end":{"row":9,"column":27},"action":"insert","lines":["i"]},{"start":{"row":9,"column":27},"end":{"row":9,"column":28},"action":"insert","lines":["v"]}],[{"start":{"row":9,"column":28},"end":{"row":9,"column":29},"action":"insert","lines":[" "],"id":116},{"start":{"row":9,"column":29},"end":{"row":9,"column":30},"action":"insert","lines":["c"]},{"start":{"row":9,"column":30},"end":{"row":9,"column":31},"action":"insert","lines":["l"]},{"start":{"row":9,"column":31},"end":{"row":9,"column":32},"action":"insert","lines":["a"]},{"start":{"row":9,"column":32},"end":{"row":9,"column":33},"action":"insert","lines":["s"]},{"start":{"row":9,"column":33},"end":{"row":9,"column":34},"action":"insert","lines":["s"]},{"start":{"row":9,"column":34},"end":{"row":9,"column":35},"action":"insert","lines":["N"]},{"start":{"row":9,"column":35},"end":{"row":9,"column":36},"action":"insert","lines":["a"]},{"start":{"row":9,"column":36},"end":{"row":9,"column":37},"action":"insert","lines":["m"]},{"start":{"row":9,"column":37},"end":{"row":9,"column":38},"action":"insert","lines":["e"]}],[{"start":{"row":9,"column":38},"end":{"row":9,"column":39},"action":"insert","lines":["="],"id":117}],[{"start":{"row":9,"column":39},"end":{"row":9,"column":41},"action":"insert","lines":["''"],"id":118}],[{"start":{"row":9,"column":40},"end":{"row":9,"column":41},"action":"insert","lines":["c"],"id":119},{"start":{"row":9,"column":41},"end":{"row":9,"column":42},"action":"insert","lines":["a"]},{"start":{"row":9,"column":42},"end":{"row":9,"column":43},"action":"insert","lines":["r"]},{"start":{"row":9,"column":43},"end":{"row":9,"column":44},"action":"insert","lines":["d"]},{"start":{"row":9,"column":44},"end":{"row":9,"column":45},"action":"insert","lines":["-"]},{"start":{"row":9,"column":45},"end":{"row":9,"column":46},"action":"insert","lines":["h"]},{"start":{"row":9,"column":46},"end":{"row":9,"column":47},"action":"insert","lines":["e"]},{"start":{"row":9,"column":47},"end":{"row":9,"column":48},"action":"insert","lines":["a"]},{"start":{"row":9,"column":48},"end":{"row":9,"column":49},"action":"insert","lines":["d"]},{"start":{"row":9,"column":49},"end":{"row":9,"column":50},"action":"insert","lines":["e"]},{"start":{"row":9,"column":50},"end":{"row":9,"column":51},"action":"insert","lines":["r"]}],[{"start":{"row":9,"column":52},"end":{"row":9,"column":53},"action":"insert","lines":[">"],"id":120}],[{"start":{"row":9,"column":53},"end":{"row":9,"column":54},"action":"insert","lines":["{"],"id":122},{"start":{"row":9,"column":54},"end":{"row":9,"column":55},"action":"insert","lines":["}"]}],[{"start":{"row":9,"column":54},"end":{"row":9,"column":75},"action":"insert","lines":["product.category.name"],"id":123}],[{"start":{"row":9,"column":76},"end":{"row":9,"column":77},"action":"insert","lines":["<"],"id":124},{"start":{"row":9,"column":77},"end":{"row":9,"column":78},"action":"insert","lines":["/"]},{"start":{"row":9,"column":78},"end":{"row":9,"column":79},"action":"insert","lines":["d"]},{"start":{"row":9,"column":79},"end":{"row":9,"column":80},"action":"insert","lines":["i"]},{"start":{"row":9,"column":80},"end":{"row":9,"column":81},"action":"insert","lines":["v"]}],[{"start":{"row":9,"column":81},"end":{"row":9,"column":82},"action":"insert","lines":[">"],"id":125}],[{"start":{"row":16,"column":0},"end":{"row":16,"column":80},"action":"remove","lines":["                            <p className=\"card-text\">{product.category.name}</p>"],"id":126},{"start":{"row":15,"column":73},"end":{"row":16,"column":0},"action":"remove","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":15,"column":73},"end":{"row":15,"column":73},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":7,"state":["jsx",1],"mode":"ace/mode/javascript"}},"timestamp":1578841093078,"hash":"63b6aeceda76100996061a87b7f4f4e3ac06d268"}