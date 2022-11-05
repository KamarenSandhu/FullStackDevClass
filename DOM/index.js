document.querySelectorAll("h1")[0].style.color = "blue";


var listItems = document.querySelectorAll("#list .item");
console.log(listItems)

// changes third li in list
listItems[2].classList.add("green-color");

document.querySelector("#list a").href="https://yahoo.com";
