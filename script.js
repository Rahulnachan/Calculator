let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {

        // = button
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                input.value = string;  // 👈 RESULT SHOW होतो इथे
            } catch {
                input.value = "Error";
                string = "";
            }
        }

        // AC button
        else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        }

        // DEL button
        else if (e.target.innerHTML == "DEl") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }

        // Any other button
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
