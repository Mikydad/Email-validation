let input = document.querySelector(".input");
let button = document.querySelector(".buton");
let text = document.querySelector(".text")

let checker = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

button.addEventListener("click", (e) => {
    e.preventDefault();
    
    if(input.value == ""){
        text.innerText = "Enter A valid Email";
        text.style.color = "red";
    }
   else if(input.value.match(checker)){
        text.innerText = "Correct";
    }
    else {
        text.innerText = "Invalid Email";
        text.style.color = "red";
    }
});
