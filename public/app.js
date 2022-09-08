console.log('I am alive...');

build();

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

    const hideShowButton = document.createElement('button');
    hideShowButton.innerText = 'Settings';
    hideShowButton.onclick = () => divSett.hidden = !divSett.hidden;
    app.appendChild(hideShowButton);

    calculatorWindow(divCalc);

    settingsWindow(divSett);
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
    buttonAddition.onclick = () => {
        textArea.append(numberInput1.value + " + " + numberInput2.value + " = " + (Number(numberInput1.value) + Number(numberInput2.value)) + "\n");
    };

    const buttonSubtraction = document.createElement('button');
    buttonSubtraction.setAttribute('id', 'btnSubtraction');
    divCalc.appendChild(buttonSubtraction);
    buttonSubtraction.innerText = "-";
    buttonSubtraction.onclick = () => {
        textArea.append(numberInput1.value + " - " + numberInput2.value + " = " + (Number(numberInput1.value) - Number(numberInput2.value)) + "\n");
    };

    const buttonMultiplication = document.createElement('button');
    buttonMultiplication.setAttribute('id', 'btnMultiplication');
    divCalc.appendChild(buttonMultiplication);
    buttonMultiplication.innerText = "*";
    buttonMultiplication.onclick = () => {
        textArea.append(numberInput1.value + " * " + numberInput2.value + " = " + (Number(numberInput1.value) * Number(numberInput2.value)) + "\n");
    };

    const buttonDivision = document.createElement('button');
    buttonDivision.setAttribute('id', 'btnDivision');
    divCalc.appendChild(buttonDivision);
    buttonDivision.innerText = "/";
    buttonDivision.onclick = () => {
        textArea.append(numberInput1.value + " / " + numberInput2.value + " = " + (Number(numberInput1.value) / Number(numberInput2.value)) + "\n");
    };

    const textArea = document.createElement('textarea');
    textArea.setAttribute('id', 'textArea');
    textArea.disabled = true;
    divCalc.appendChild(textArea);

    const buttonClear = document.createElement('button');
    buttonClear.setAttribute('id', 'btnClear');
    buttonClear.innerText = "Clear";
    buttonClear.onclick = () => textArea.innerHTML = '';
    divCalc.appendChild(buttonClear);

}

function createOption(value, divSett) {
    const optionTag = document.createElement('option');
    optionTag.setAttribute('value', value);
    optionTag.innerHTML = value;
    divSett.appendChild(optionTag);
}

function settingsWindow(divSett) {
    
    const dropDownColor = document.createElement('select');
    dropDownColor.setAttribute('id', 'dropDown1');
    divSett.appendChild(dropDownColor);

    createOption("Light", dropDownColor);
    createOption("Dark", dropDownColor);
    createOption("Blue", dropDownColor);

    const dropDownSize = document.createElement('select');
    dropDownSize.setAttribute('id', 'dropDown2');
    divSett.appendChild(dropDownSize);

    createOption("Small", dropDownSize);
    createOption("Medium", dropDownSize);
    createOption("Large", dropDownSize);

    dropDownColor.onchange = (event) => {
        document.body.className = event.target.value.toLowerCase();
    };

    dropDownSize.onchange = (event) => {
        textArea.className = event.target.value.toLowerCase();
    }

}