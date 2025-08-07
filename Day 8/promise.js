// function jsonDemo(){
//     const person = {
//         name : "Ankur",
//         age: 25,
//         isStudent: false,
//         hobbies: ['reading', 'playing guitar'],
//     }

//     console.log(typeof(person));
//     //converting oibject into json
//     const jsonString = JSON.stringify(person);
//     console.log("Stringfied JSON:", jsonString);
//     console.log(typeof(person));
// }


// const person = {
//     "name": "Ankur",
//     "age": 25,
//     "isStudent": false,
//     "hobbies": ["reading", "playing guitar"]
// }


// let promise = new Promise((resolve, reject) => {
//     resolve("Promise resolved successfully!");
//     reject("Promise rejected!");
// });

// promise.then((message) => {
//     console.log(message);   
// }).catch((error) => {
//     console.error(error);
// });

// let promise2 = new Promise((resolve, reject) => {
//     let x = 5;
//     if(x> 10) {
//         resolve("x is greater than 10");
//     } else {
//         reject("x is not greater than 10");
//     }
// });
// promise2.then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.error(error);
// });

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(data => {
//     console.log('Fetched data:', data);
// })
// .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
// });

fetch('https://sweetfruit.vercel.app/fruits').then(response => { 
    document.querySelector("h1").textContent = "Fruits List";