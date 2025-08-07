// let inp = document.querySelector("#inputField");
// let btn = document.querySelector("#submitButton");

// inp.addEventListener("input", function(da){
    
//     if(da.data !== null){
//         console.log(da.data);
//     }
// });
// btn.addEventListener("click", function(){
//     console.log("Button clicked");
//     inp.value = "";
// });

let t = document.querySelector(".tittle");
let de = document.querySelector("#device");

de.addEventListener("change", function(e){
    console.log(e.target.value);
    t.textContent = `${e.target.value} you have selected`;
});