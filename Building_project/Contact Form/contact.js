const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(`Name Data: ${event.target[0].value}`);
    console.log(`Email Data: ${event.target[1].value}`);
    console.log(`Subject Data: ${event.target[2].value}`);
    console.log(`Message Data: ${event.target[3].value}`);
})