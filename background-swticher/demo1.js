const buttons = document.querySelectorAll('.button');//always remenber if want access querySelectorAll only loop help u to access inside element
const body = document.querySelector('body')

buttons.forEach(function (button) {
    console.log(button);

    button.addEventListener('click', function (e) {
        
        
        // if (e.target.id === 'yellow') {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'red') {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'aqua') {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'purple') {
        //     body.style.backgroundColor = e.target.id;
        // }
        switch (e.target.id) {
            case 'yellow':
                body.style.backgroundColor = e.target.id;
                break;
            case 'aqua':
                body.style.backgroundColor = e.target.id;
                break;
            case 'red':
                body.style.backgroundColor = e.target.id;
                break;
            case 'purple':
                body.style.backgroundColor = e.target.id;
                break;
            default:
                break;
        }

    });
});