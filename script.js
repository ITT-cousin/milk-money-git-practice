console.log("Hello Git");

const users = [
    {name:"Alice"},
    {name:"Bob"},
    {name:"Charlie"}
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