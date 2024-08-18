const inputBox = document.getElementById('inputbox');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
   //  console.log(value);
    

    if (value === 'AC') {
      inputBox.value = '';
    } else if (value === 'DEL') {
      inputBox.value = inputBox.value.slice(0, -1);
    } else if (value === '=') {
     inputBox.value = eval(inputBox.value);

    } else {
      inputBox.value += value;
    }
  });
});