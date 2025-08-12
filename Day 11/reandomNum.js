function randomgen(){
    return Math.floor(Math.random() * 100) + 1;
}
console.log(randomgen());
console.log(randomgen());
console.log(randomgen());




module.exports = randomgen;