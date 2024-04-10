const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();//stoping post and get function

    const height = parseInt(document.querySelector('#height').value); // Remember, the value you get will be a string!
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.result');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please enter a valid height: ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please enter a valid weight: ${weight}`;
    } else {
        const bmi = (weight * (height * height) / 10000).toFixed(2); // Fixed typo in toFixed method
        result.innerHTML = `Your BMI value is: ${bmi}`;
    }
});
