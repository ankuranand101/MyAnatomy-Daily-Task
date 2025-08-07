z=document.getElementById("demo");
console.log(z);

function abc() {
    z.innerHTML = "Paragraph changed!";
    console.log("Button clicked!");
}
 y = document.getElementById("demo2");
console.log(y);
function xyz() {
    // Generate a random color in hex format
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    y.style.color = randomColor;
    y.style.fontSize = "30px";
    console.log("Color changed to:", randomColor);
}

a = document.getElementById("c");
function change() {
    if(a.textContent == "I am JavaScript") {
        a.innerHTML = "JavaScript is awesome!";
        a.style.color = "red";
        a.style.fontSize = "25px";
        console.log("Text changed to:", a.innerHTML);
    }else{
        a.innerHTML = "I am JavaScript";
        a.style.color = "black";
        a.style.fontSize = "20px";
        console.log("Text reverted to:", a.innerHTML);
    }
}