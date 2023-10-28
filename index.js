const input = document.getElementById("inputBox");
const button = document.querySelectorAll('button');

let string = "";
let arr = Array.from(button);
arr.forEach(button => {
    button.addEventListener('click', function(e){
        let value = e.target.innerText;
        if(value == "=") {
            string = eval(string);
        } else if(value == "AC") {
            string = "";
        } else if (value == "DEL"){
            string = string.substring(0, string.length -1);
        } else {
            string += value;
        }
        input.value = string;
    })
})