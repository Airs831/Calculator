let answer = 0;
let stored = [];
let results = document.querySelector('#screen');
console.log(results.textContent)
let operators = {
  add:false,
  subtract:false,
  multiply:false,
  divide:false,
  answered:false,
}
let buttons = document.getElementsByClassName('button')
for (let i=0; i <buttons.length; i++) {
  let newDiv = buttons[i];
  newDiv.onclick = function(e){ //INPUT NUMBERS AND DECIMAL
      if (newDiv.textContent < 10 || newDiv.textContent == '.'){
      results.textContent += newDiv.textContent;
    } else if (newDiv.id == 'ac') { //CLEAR SCREEN
      results.textContent = '';
      stored =[];
      console.log(stored);
    } else if (newDiv.id == 'plus') { //ADD NUMBERS
      stored.push(results.textContent);
      results.textContent = '';
    } else if (newDiv.id == 'divide'){ //DIVIDE

    } else if (newDiv.id == 'equal') { //GETS ANSWER
      stored.push(results.textContent);
      for (let i=0; i<stored.length; i++) {
        answer += parseInt(stored[i]);
      }

      console.log(stored);
      results.textContent = answer;


    }


  };
  console.log(newDiv.id);
}
