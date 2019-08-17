let answer = 0;
let history = [];
let results = document.querySelector('#screen');
console.log(results.textContent)
let calculator = {
  operatorInEffect: false,
  add:false,
  adding: function() {
    if (calculator.add == true){
      let answer = parseInt(results.textContent) + history[0];
      history.pop();
      history.pop();
      history.push(answer);
      results.textContent = answer;
      console.log(history);
    } else {
  history.push(parseInt(results.textContent));
  calculator.add = true;
  results.textContent = '';
  }

  },
  subtract:false,
  subtracting: function(){

  },
  multiply:false,
  multiplying:function(){

  },
  divide:false,
  dividing: function(){

  },
  answered:false,
  input: function(button) {
    results.textContent += parseInt(button.textContent);
  },
}


let buttons = document.getElementsByClassName('button')
for (let i=0; i <buttons.length; i++) {
  let button = buttons[i];
  button.onclick = function(e){ //INPUT NUMBERS AND DECIMAL
      if (button.textContent < 10){
      calculator.operatorInEffect = false;
      calculator.input(button);
    } else if (button.id == 'ac') { //CLEAR SCREEN
      results.textContent = '';
      history.pop();
      console.log(history);
    } else if (button.id == 'plus' && calculator.operatorInEffect == false){ //ADD NUMBERS
      calculator.operatorInEffect = true;
      calculator.adding();
    } else if (button.id == 'divide' && calculator.operatorInEffect == false){ //DIVIDE
      calculator.operatorInEffect = true;


    } else if (button.id == 'equal') { //GETS ANSWER

      console.log(history);
      results.textContent = history[0];
  }
    console.log(button.id);
  }
}
