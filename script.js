console.log("Hello Git!");

const users = [
    {name:"Alice",
     age:"25"
    },

    {name:"Bob",
     age:"43"
    },

    {name:"Charlie",
     age:"31"
    },
];

console.log("使用者",users);
console.log("使用者數量",users.length);
console.log("使用者名稱",users.name);
console.log("使用者第一位",users[0]);
console.log("使用者第一位名稱",users[0].name);
console.table(users);
console.log(users[1].name);
console.log(users[2].name);
console.dir(users);


const title =
document.querySelector("#title");
const list =
document.querySelector("#list");
const list1 =
document.querySelector("#list1");
const list2 =
document.querySelector("#list2");
const list3 =
document.querySelector("#list3");

const productsDiv = 
document.querySelector("#products");

const userDiv = document.querySelector("#user");


for (let i = 0; i < users.length; i++ ){

    console.log(users[i].name);
    console.log(users[i].age);

    list.innerHTML += 
    `${users[i].name} ${users[i].age} 歲<br>`
    
};

 const names = users.map(function(user){
    return `${user.name} ${user.age} 歲<br>`;

});

list.innerHTML = names.join(" "); 

console.log(names);


title.textContent= "奶粉錢萬歲~";
title.style.color = "red"; 
title.style.fontSize = "60px";

// 明觀到此一遊 阿記錄一下時間吧 這裡是2026年7月6號開始的吧


const products = [

    {
        id:1,
        name:"Mechanical Keyboard",
        price:3490,
        stock:12
    },

    {
        id:2,
        name:"Gaming Mouse",
        price:1990,
        stock:8
    },

    {
        id:3,
        name:"27 Monitor",
        price:8990,
        stock:0
    }

];

const towers = [

    {
        name:"Chaos",
        cost:100,
        rarity:"Common"
    },

    {
        name:"Lust",
        cost:350,
        rarity:"Rare"
    },

    {
        name:"Gluttony",
        cost:1200,
        rarity:"Legendary"
    }

];

const productname = products.map(function(product){
    return `${product.name}`;

});

console.log(productname);

const prices = products.map(function(money){
    return `${money.price}`;
});

console.log(prices);

// console.log(productname,prices); 我試圖使用上面productname,prices 想拚出第三題的答案 但好像做不到捏

const NamePrice = products.map(function(NP){
    return `${NP.name} - $${NP.price} <br> `
});

list1.innerHTML = NamePrice.join(" ");

const NameStock = products.map(function(NS){
    return `${NS.name} (剩餘${NS.stock}件)<br> `
});

list2.innerHTML = NameStock.join(" ");

const tower = towers.map(function(namecost){
    return `${namecost.name} - ${namecost.cost}g<br>`
});

list3.innerHTML = tower.join(" ");

const salePrices = products.map(function(product) {
  return product.price * 0.9;
});

console.log("破盤價", salePrices);

const orders = [
  {
    id: 101,
    customer: "Eter",
    total: 1280,
    status: "paid"
  },
  {
    id: 102,
    customer: "Alice",
    total: 760,
    status: "pending"
  },
  {
    id: 103,
    customer: "Bob",
    total: 2350,
    status: "paid"
  }
];

const orderTexts = orders.map(function(order) {
  return `訂單${order.id} - ${order.customer} - $${order.total}`;
});

console.log("訂單摘要", orderTexts);


const html = 
products.map(function(product){
   
    return `⌨ ${product.name}<br> 💰$${product.price}<br> 📦庫存:${product.stock}<br>`;
});

// productsDiv.innerHTML = html.join("");

const expensiveProducts =
products.filter(function(product){

    return product.price >= 3000;

});

console.log(expensiveProducts);

const foundProduct = products.find(function(product){
    return product.id === 2;
})

if(foundProduct === undefined){
    productsDiv.innerHTML = "找不到這個商品";
}else{
    productsDiv.innerHTML = 
    `<h3>${foundProduct.name}</h3>
    <p>價格:$${foundProduct.price}</p>
    <p>庫存:${foundProduct.stock}件</p>`
}





const createProductCard = ({ name, price, stock, id }) => {

    

    let stockMessage;

    if (stock > 0) {
    stockMessage = "✅有庫存";
    } else {
    stockMessage = "🔴已售完";
    }
    return  ` 
          <div class = "product">
            <h4>${name}</h4>
            <p>$${price}</p>
            <p>${stock}件 ${stockMessage}</p>
            <p>ID:${id}</p>
          </div>
    `;
};

const anyProduct = products.map(createProductCard);

productsDiv.innerHTML = anyProduct.join("");




const user = {
    name: "Eter",
    age: 28,
    city: "Tainan"
};

//第一題
// const {name} = user;

// console.log(name);

//第二題
const {name, city} =user;

console.log(`${name} live in ${city}`);

//第三題
const userHTML = 
    `<div class="user-card">
       <h2>${name}</h2>
       <p>${city}</p>
     </div>`;
  
//因為要繼續做題所以註解掉了 你懂得明觀
// userDiv.innerHTML = userHTML;


//第四題
const showUser = ({name, city}) => {
    console.log(`${name} lives in ${city}`);
};

showUser(user);

//第五題
const getUserHTML = ({ name, city }) => {
   return`
    <div class="user-card">
    <h2>名字:${name}</h2>
    <p>城市:${city}</p>
    </div>
    `;
};

userDiv.innerHTML = getUserHTML(user);


//第六題
const getUserSentence = (user) => {
    const {name, city} = user;
    return`
          ${name} comes from ${city}
          `;
};

const sentence = getUserSentence(user);
console.log(sentence);

//第七題 窩不會...
// const firstProduct = products[0];
// const { name, price } = firstProduct;
// console.log(`${name} - $${price}`);

//第八題
const showProduct = ({name, price}) => {
    console.log(`商品: ${name} ， 價格: ${price}`);
      
};

showProduct(products[0]);

//第九題
const getProductHTML = ({name, price, stock}) => {
    return`
         <div class="product-card">
            <h2>商品名稱:${name}</h2>
            <p>價格 $ ${price}</p>
            <p>庫存:${stock}</p>
         </div> `;
};

productsDiv.innerHTML = getProductHTML(products[1]);

//第十題
const productName = products.map(({name}) => {
    return name;

});

console.log(productName);

//第十一題
const productHTMLArray = products.map(getProductHTML);

const allProductHTML = productHTMLArray.join("");

productsDiv.innerHTML = allProductHTML;
// userDiv.innerHTML = productHTMLArray.join("");

//const allProductHTML = ...;這個我不知道要寫在哪裡...





//方法鏈 可能要習慣..一下...
/* const html =

products
    .filter(function(product){

        return product.price >=3000;

    })

    .map(function(product){

        return `
            <div>

                ${product.name}

            </div>
        `;

    })

    .join("");
 */
//這裡是展開 研究研究
/* const expensiveProducts =
products.filter(function(product){

    return product.price >=3000;

});

const htmlArray =
expensiveProducts.map(function(product){

    return `
        <div>

            ${product.name}

        </div>
    `;

});

const html =
htmlArray.join("");

productsDiv.innerHTML = html; */