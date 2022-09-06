console.log('I am alive...');

build();
calculatorWindow();

function build() {

    const divCalc = document.createElement('div');
    divCalc.setAttribute('id', 'calculator');
    app.appendChild(divCalc);

    const divSett = document.createElement('div');
    divSett.setAttribute('id', 'settings');
    app.appendChild(divSett);

    const titleCalc = document.createElement('h1');
    titleCalc.innerHTML = 'Calculator'
    divCalc.appendChild(titleCalc);

    const titleSett = document.createElement('h1');
    titleSett.innerHTML = 'Settings'
    divSett.appendChild(titleSett);

    calculatorWindow(divCalc);
}

function calculatorWindow(divCalc) {

    const numberInput1 = document.createElement('input');
    numberInput1.setAttribute('id', 'number1');
    divCalc.appendChild(numberInput1);

    const numberInput2 = document.createElement('input');
    numberInput2.setAttribute('id', 'number2');
    divCalc.appendChild(numberInput2);

    const buttonAddition = document.createElement('button');
    buttonAddition.setAttribute('id', 'btnAddition');
    divCalc.appendChild(buttonAddition);
    buttonAddition.innerText = "+";

    const buttonSubtraction = document.createElement('button');
    buttonSubtraction.setAttribute('id', 'btnSubtraction');
    divCalc.appendChild(buttonSubtraction);
    buttonSubtraction.innerText = "-";

    const buttonMultiplication = document.createElement('button');
    buttonMultiplication.setAttribute('id', 'btnMultiplication');
    divCalc.appendChild(buttonMultiplication);
    buttonMultiplication.innerText = "*";

    const buttonDivision = document.createElement('button');
    buttonDivision.setAttribute('id', 'btnDivision');
    divCalc.appendChild(buttonDivision);
    buttonDivision.innerText = "/";
}