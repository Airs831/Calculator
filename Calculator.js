let answer = 0;
let history = [];
const multiply =  document.querySelector('#multiply');
const divide =  document.querySelector('#divide');
const results = document.querySelector('#screen');
const historyList = document.querySelector('#historyList');
const historyTitle = document.querySelector('#historyTitle');
const updateScreen = function(answer, operator){
  console.log(history);
  history.push(answer);
  results.textContent = answer;
  console.log(history);
  addHistoryDiv(answer, operator);
  history.shift();
}

const addHistoryDiv = function(answer, operator){
  if (historyTitle.textContent == ''){
    historyTitle.textContent = 'History';
  } // Shows History List once its made

  let historyDiv = document.createElement('div');
  historyDiv.onclick = function(e) {
    calculator.clearScreen()
    results.textContent = historyDiv.textContent;
  }

  let firstNumber = document.createElement('div');
  firstNumber.textContent = history[0];
  historyDiv.appendChild(firstNumber);
  let findOperator = document.createElement('div');
  let secondNumber = document.createElement('div');
  if (operator == 'add'){
    findOperator.textContent = '+';
    secondNumber.textContent = (results.textContent - history[0]);
  } else if (operator == 'subtract'){
    findOperator.textContent = '-';
    secondNumber.textContent = (results.textContent + history[0]);
  } else if (operator == 'multiply'){
    findOperator.textContent = multiply.textContent;
    secondNumber.textContent = (results.textContent / history[0])
  } else if (operator == 'divide'){
    secondNumber.textContent = (results.textContent * history[0])
    findOperator.textContent = divide.textContent;
  }

  historyDiv.appendChild(secondNumber);
  let equals = document.createElement('div');
  equals.textContent = '='
  let showAnswer = document.createElement('div');
  showAnswer.textContent = answer;
  historyDiv.classList.add('history')
  historyDiv.appendChild(firstNumber);
  historyDiv.appendChild(findOperator);
  historyDiv.appendChild(secondNumber);
  historyDiv.appendChild(equals);
  historyDiv.appendChild(showAnswer);
  historyList.appendChild(historyDiv);
}

const makeContentEditable = function() {
  if (results.textContent !== "0") {
    results.contentEditable = 'true';
  } else {
    results.contentEditable = 'false';
  };
}

let calculator = {
  refreshScreen: false, // Resets Screen when operator is pressed. Wont allow operators to successively press
  operatorInEffect: false, // Checks which operator has to update the screen
  clearScreen: function(){ //Reset Calculator
    results.textContent = '';
    history.pop();
    calculator.add = false;
    calculator.subtract = false;
    calculator.multiply = false;
    calculator.divide = false;
    calculator.refreshScreen = false;
    calculator.operatorInEffect = false;
    console.log(history);
  },
  input: function(button){ // Inputs numbers
    if (calculator.refreshScreen == true){
      results.textContent = '';
      calculator.refreshScreen = false;
      results.textContent += Number(button.textContent);
    } else {
      results.textContent += Number(button.textContent);
    }
  },
  performOperator: function(input) {
    calculator.refreshScreen = true;
    if (calculator.operatorInEffect == false){
      history.push(Number(results.textContent));
      results.textContent = '';
      calculator[input] = true;
      calculator.operatorInEffect = true;
    } else {
      if (calculator.add == true){
        calculator.adding();
        calculator.add = false;
      } else if (calculator.subtract == true){
        calculator.subtracting();
        calculator.subtract = false;
      } else if (calculator.multiply == true){
        calculator.multiplying();
        calculator.multiply = false;
      } else if (calculator.divide == true){
        calculator.dividing();
        calculator.divide = false;
      }
      calculator[input] = true;
    }
  },
  add:false,
  adding: function() {
    console.log('hi');
    let answer = Number(results.textContent) + history[0];
    updateScreen(answer, 'add');
  },
  subtract:false,
  subtracting: function(){
    let answer = history[0] - Number(results.textContent);
    updateScreen(answer, 'subtract');
  },
  multiply:false,
  multiplying:function(){
    let answer = history[0] * Number(results.textContent);
    updateScreen(answer, 'multiply');
  },
  divide:false,
  dividing: function(){
    let answer = history[0] / Number(results.textContent);
    updateScreen(answer, 'divide');
  },
  isDecimal: false,
  decimal: function() {
    if (calculator.isDecimal == false){
      calculator.isDecimal = true;
      results.textContent += ".";
    }
  },
  percent: function(){
    results.textContent = results.textContent / 100;
  },
  plusMinus: function(){
    if (results.textContent[0] == '-'){
      results.textContent = results.textContent.replace('-','');
    } else {
      results.textContent = '-' + results.textContent
    }
  },

  answered:false,
}

let buttons = document.getElementsByClassName('button')
for (let i=0; i <buttons.length; i++) {
  let button = buttons[i];
  button.onclick = function(e){ //INPUT NUMBERS
    makeContentEditable();
    if (button.textContent < 10){
        calculator.input(button);
    } else if (button.id == 'ac') { //CLEAR SCREEN
      calculator.clearScreen();
    } else if (button.id == 'plus' && calculator.refreshScreen == false){ //ADD NUMBERS
      calculator.performOperator('add');
    } else if (button.id == 'minus' && calculator.refreshScreen == false){ //SUBTRACKS NUMBERS
      calculator.performOperator('subtract');
    } else if (button.id == 'multiply' && calculator.refreshScreen == false) { // MULTIPLIES NUMBERS
      calculator.performOperator('multiply');
    } else if (button.id == 'divide' && calculator.refreshScreen == false){ //DIVIDE
      calculator.performOperator('divide');
    } else if (button.id == 'decimal'){
      calculator.decimal();
    } else if (button.id == 'percent'){
      calculator.percent();
    } else if (button.id == 'plusMinus'){
      calculator.plusMinus();
    }else if (button.id == 'equal') { //GETS ANSWER
      calculator.performOperator();
  }
    console.log(button.id);
  }
}
