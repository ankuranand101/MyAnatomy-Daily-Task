// let h1 = document.querySelector("#text");

// window.addEventListener("keydown", function(event) {
//     if(event.key ===" "){
//         h1.textContent = "SPC";
//     }else{
//         h1.textContent = event.key;
//     }
// });
// console.log(h1);

let inp = document.querySelector("#fileInput");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
    inp.click();
});

inp.addEventListener("change", function(dets) {
    let file = dets.target.files[0];
    if(file) {
        btn.textContent = file.name;
    }
});