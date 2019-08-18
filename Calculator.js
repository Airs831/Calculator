let answer = 0;
let history = [];
let results = document.querySelector('#screen');



console.log(results.textContent)
const makeContentEditable = function() {
  if (results.textContent !== "0") {
    results.contentEditable = 'true';
  } else {
    results.contentEditable = 'false';
  };
}
let calculator = {
  refreshScreen: false,
  operatorInEffect: false,
  input: function(button){
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
        console.log('hi');
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
    console.log(history);
    history.pop();
    history.pop();
    history.push(answer);
    results.textContent = answer;
    console.log(history);
  },
  subtract:false,
  subtracting: function(){
    if (calculator.subtract == true){
      let answer = history[0] - Number(results.textContent);
      history.pop();
      history.pop();
      history.push(answer);
      results.textContent = answer;
      console.log(history);
    } else {
      history.push(Number(results.textContent));
      calculator.subtract = true;
      results.textContent = '';
    }
  },
  multiply:false,
  multiplying:function(){
    if (calculator.multiply == true){
      let answer = history[0] * Number(results.textContent);
      history.pop();
      history.pop();
      history.push(answer);
      results.textContent = answer;
      console.log(history);
    } else {
      history.push(Number(results.textContent));
      calculator.multiply = true;
      results.textContent = '';
    }
  },
  divide:false,
  dividing: function(){
    if (calculator.divide == true){
      let answer = history[0] / Number(results.textContent);
      history.pop();
      history.pop();
      history.push(answer);
      results.textContent = answer;
      console.log(history);
    } else {
      history.push(Number(results.textContent));
      calculator.divide = true;
      results.textContent = '';
    }
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

//
// let buttons = document.getElementsByClassName('button')
// for (let i=0; i <buttons.length; i++) {
//   let button = buttons[i];
//   button.onclick = function(e){ //INPUT NUMBERS
//     makeContentEditable();
//     if (button.textContent < 10){
//         calculator.input(button);
//     } else if (button.id == 'ac') { //CLEAR SCREEN
//       results.textContent = '';
//       history.pop();
//       console.log(history);
//     } else if (button.id == 'plus' && calculator.operatorInEffect == false){ //ADD NUMBERS
//       calculator.adding();
//     } else if (button.id == 'minus' && calculator.operatorInEffect == false){ //SUBTRACKS NUMBERS
//       calculator.subtracting()
//     } else if (button.id == 'multiply' && calculator.operatorInEffect == false) { // MULTIPLIES NUMBERS
//       calculator.multiplying();
//     } else if (button.id == 'divide' && calculator.operatorInEffect == false){ //DIVIDE
//       calculator.dividing();
//     } else if (button.id == 'decimal'){
//       calculator.decimal();
//     } else if (button.id == 'percent'){
//       calculator.percent();
//     } else if (button.id == 'plusMinus'){
//       calculator.plusMinus();
//     }else if (button.id == 'equal') { //GETS ANSWER
//       console.log(history);
//       results.textContent = history[0];
//   }
//     console.log(button.id);
//   }
// }


let buttons = document.getElementsByClassName('button')
for (let i=0; i <buttons.length; i++) {
  let button = buttons[i];
  button.onclick = function(e){ //INPUT NUMBERS
    makeContentEditable();
    if (button.textContent < 10){
        calculator.input(button);
    } else if (button.id == 'ac') { //CLEAR SCREEN
      results.textContent = '';
      history.pop();
      console.log(history);
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
