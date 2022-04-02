let buttons = Array.from(document.querySelectorAll('.num_op'));
let action = 0;
let firstNumber = [];
let secondNumber = [];
let operator;

console.table(buttons);
buttons.forEach(item => item.addEventListener('click', function() {
    buttonClicked(item.textContent);
}));

function buttonClicked(btnID) {
    console.log(btnID);
    if(action == 0 && btnID >= 0 && btnID <= 9) {
        firstNumber.push(btnID);
        console.log(firstNumber);
    } else if (action == 1 && btnID >= 0 && btnID <= 9) {
        secondNumber.push(btnID);
        console.log(secondNumber);
    } else if (btnID == 'C') {
        //CLEAR CALCULATOR
    } else if (btnID == '*' || btnID == '/' || btnID == '+' || btnID == '-') {
        if(action != 1){
            operator = btnID;
            console.log(operator);
            action = 1;
        }else if(btnID == 'Calculate' && secondNumber.length > 0) {
            console.log(calculate(firstNumber.join(''), secondNumber.join(''), operator));
        } else {
            console.log('error')
        }
    }
}

function calculate(num1, num2, op) {
    switch(op) {
        case op == '*':
            return num1 * num2;
            break;
    }
}