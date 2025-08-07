let light = document.querySelectorAll('.light');
console.log(light);
let currentLight = 0;
// Initialize the first light as active
light[currentLight].classList.add('active');
// Set the first light to active
light[currentLight].classList.add('active');
const changeLight = () => {
    //turn off the light
    light[currentLight].classList.remove('active');
    currentLight = (currentLight + 1) % light.length;
    light[currentLight].classList.add('active');
};

setInterval(() => {
    changeLight();
}, 3000);