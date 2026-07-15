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

/* let stockMessage;

if (stock > 0) {

    stockMessage = ✅有庫存;

} else {

    stockMessage = 🔴 已售完;

}

return `<p>${stockMessage}</p>`; */

const anyProduct = products.map(function(product) {

    if (product.stock > 0) {

        return  ` 
          <div class = "product">
            <h4>${product.name}</h4>
            <p>$${product.price}</p>
            <p>${product.stock}✅有庫存</p>
            <p>ID:${product.id}</p>
          </div>
         `;

    } else {

        return  `
          <div class = "product">
            <h4>${product.name}</h4>
            <p>$${product.price}</p>
            <p>${product.stock}🔴 已售完</p>
            <p>ID:${product.id}</p>
          </div>
        `;

    }
});

productsDiv.innerHTML = anyProduct.join("");









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