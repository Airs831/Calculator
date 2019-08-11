let answer;
let results = document.querySelector('#screen');
console.log(results.textContent)
let buttons = document.getElementsByClassName('button')
for (i=0; i <buttons.length; i++) {
  let newDiv = buttons[i];
  newDiv.onclick = function(e){
    if (newDiv.textContent < 10 || newDiv.textContent == "."){
    results.textContent += newDiv.textContent;
  }
    console.log(newDiv.id);
  };
  console.log(newDiv.id);
}
