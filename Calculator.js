let answer = 0;
let history = [];
let results = document.querySelector('#screen');
console.log(results.textContent)
let calculator = {
  operatorInEffect: false,
  input: function(button){
    if (calculator.operatorInEffect == true){
      results.textContent = '';
      calculator.operatorInEffect = false;
      results.textContent += Number(button.textContent);
    } else {
      results.textContent += Number(button.textContent);
    }
  },
  add:false,
  adding: function() {
    calculator.operatorInEffect = true;
    if (calculator.add == true){
      let answer = Number(results.textContent) + history[0];
      history.pop();
      history.pop();
      history.push(answer);
      results.textContent = answer;
      console.log(history);
    } else {
      history.push(Number(results.textContent));
      calculator.add = true;
      results.textContent = '';
    }
  },
  subtract:false,
  subtracting: function(){
    calculator.operatorInEffect = true;
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
    calculator.operatorInEffect = true;
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
    calculator.operatorInEffect = true;
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
  answered:false,

}


let buttons = document.getElementsByClassName('button')
for (let i=0; i <buttons.length; i++) {
  let button = buttons[i];
  button.onclick = function(e){ //INPUT NUMBERS
    if (button.textContent < 10){
        calculator.input(button);
    } else if (button.id == 'ac') { //CLEAR SCREEN
      results.textContent = '';
      history.pop();
      console.log(history);
    } else if (button.id == 'plus' && calculator.operatorInEffect == false){ //ADD NUMBERS
      calculator.adding();
    } else if (button.id == 'minus' && calculator.operatorInEffect == false){ //SUBTRACKS NUMBERS
      calculator.subtracting()
    } else if (button.id == 'multiply' && calculator.operatorInEffect == false) { // MULTIPLIES NUMBERS
      calculator.multiplying();
    } else if (button.id == 'divide' && calculator.operatorInEffect == false){ //DIVIDE
      calculator.dividing();
    } else if (button.id == 'decimal'){
      calculator.decimal();
    }
    else if (button.id == 'equal') { //GETS ANSWER
      console.log(history);
      results.textContent = history[0];
  }
    console.log(button.id);
  }
}
