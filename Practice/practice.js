// Here i will change the background color with an event listener and basic dom strategies

function changeColorFunction() {
    const colorArray = ["cadetblue", "aqua", "aquamarine", "blue"];
    document.body.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)];
}

let colorButton = document.querySelector("#change-color");
colorButton.addEventListener("click", changeColorFunction);