let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let operators = ['+', '-', '*', '/'];

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value === '=') {
            try {
                string = eval(string).toString();
            } catch {
                string = "Error";
            }
            input.value = string;
        } 
        
        else if (value === 'AC') {
            string = "";
            input.value = string;
        } 
        
        else if (value === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } 
        
        else if (operators.includes(value)) {
            // Replace the last operator if the last character is also an operator
            if (operators.includes(string.slice(-1))) {
                string = string.slice(0, -1) + value;
            } else if (string !== "") {
                string += value;
            }
            input.value = string;
        } 
        
        else {
            string += value;
            input.value = string;
        }
    });
});