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
        stock:3
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