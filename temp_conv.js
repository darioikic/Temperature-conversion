const textBox = document.getElementById("textBox");
const radioButton = document.getElementById("radioButton");
const radioButton1 = document.getElementById("radioButton1");
const result = document.getElementById("result");


function calculate(){
    let inputValue = textBox.value;
    inputValue = Number(inputValue);
     if(radioButton.checked){
       inputValue = inputValue * 9/5 + 32;
       result.textContent = inputValue.toFixed(1) + "°F";
     }
     else if(radioButton1.checked){
      inputValue = (inputValue-32)*(5/9);
      result.textContent = inputValue.toFixed(1) + "°C";
     }else
      {
        result.textContent = "Please choose conversion type";
      }
    }
