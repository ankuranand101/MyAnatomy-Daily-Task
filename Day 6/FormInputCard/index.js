let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Remove previous card if exists
    let oldCard = document.getElementById("main");
    if (oldCard) oldCard.remove();

    // Get input values
    let inputs = form.querySelectorAll("input");
    let nameVal = inputs[0].value;
    let imgUrl = inputs[1].value;
    let emailVal = inputs[2].value;
    let phoneVal = inputs[3].value;
    let aboutVal = inputs[4].value;

    // Create card
    let div = document.createElement("div");
    div.id = "main";
    
    let imgdiv = document.createElement("div");
    imgdiv.id = "img";

    let img = document.createElement("img");
    img.src = imgUrl;
    img.alt = "Profile Image";
    imgdiv.appendChild(img);
    div.appendChild(imgdiv);

    let name = document.createElement("h1");
    name.id = "name";
    name.textContent = nameVal;
    div.appendChild(name);

    let email = document.createElement("p");
    email.id = "email";
    email.textContent = emailVal;
    div.appendChild(email);

    let phone = document.createElement("p");
    phone.id = "phone";
    phone.textContent = phoneVal;
    div.appendChild(phone);

    let about = document.createElement("p");
    about.id = "about";
    about.textContent = aboutVal;
    div.appendChild(about);

    // Add card to body
    document.body.appendChild(div);

    // Reset form
    form.reset();
});
