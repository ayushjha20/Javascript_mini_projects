document.addEventListener("DOMContentLoaded", function () {
    const calculatorForm = document.getElementById("calculatorForm");
    const result = document.getElementById("result");

    calculatorForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission

        const a = parseInt(document.getElementById("a").value);
        const b = parseInt(document.getElementById("b").value);
        const operator = document.getElementById("c").value;

        switch (operator) {
            case "+":
                result.textContent = `The sum is ${a + b}`;
                break;
            case "-":
                result.textContent = `The difference is ${a - b}`;
                break;
            case "/":
                if (b === 0) {
                    result.textContent = "Cannot divide by zero";
                } else {
                    result.textContent = `The division result is ${a / b}`;
                }
                break;
            case "*":
                result.textContent = `The multiplication result is ${a * b}`;
                break;
            default:
                result.textContent = "Invalid operator";
        }
    });
});
