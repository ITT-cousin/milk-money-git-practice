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


for (let i = 0; i < users.length; i++ ){

    console.log(users[i].name);
    console.log(users[i].age);

    
    
    
    list.innerHTML += 
    `${users[i].name} ${users[i].age} 歲<br>`
    
};



title.textContent= "奶粉錢萬歲~";
title.style.color = "red"; 
title.style.fontSize = "60px";

