const listItems = document.getElementsByTagName("li");
console.log(listItems);
Array.from(listItems).forEach(element => {
    element.style.color = "green";
})

const btn1 = document.getElementsByClassName("btn");
console.log(btn1);
btn1[0].style.backgroundColor = "yellow";

const title = document.getElementById("title");
console.log(title);
title.textContent = "Hello World!";

const list = document.querySelector("#list");
console.log(list);

const link = document.querySelector("li.item a");
console.log(link);

const link2 = document.querySelector("#list a");
console.log(link2);

const allItems = document.querySelectorAll("#list .item");
console.log(allItems);

//manipulating the style
const hd1 = document.querySelector("h1");
hd1.style.color = "red";
hd1.style.fontSize = "4rem";