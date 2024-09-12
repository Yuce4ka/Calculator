const displayValue=document.getElementById("display");

function appendToDisplay(input){
  displayValue.value+=input;
}

function clearDisplay(){
displayValue.value=""
}
function calculate(){
//   try{
// displayValue.value=eval(display.value);}
// catch(error){
//   displayValue.value="Error"
// }
let value=display.value;
let operator="";
let num1=0;
let num2=0;
let sum=0;
for(let i=0;i<value.length;i++){
  if("-+*/".includes(value[i])){
    operator=value[i];
  } else if(operator===""){
    num1+=value[i];
  }else{
    num2+=value[i];
  }
}
num1=parseFloat(num1);
num2=parseFloat(num2);
switch(operator){
  case "+":
    sum=num1+num2;
  break;
  case "-":
    sum=num1-num2;
    break;
  case "*":
    sum=num1*num2;
      break;
  case "/":
    sum=num1/num2;
       break;
  default:
     throw new Error("Error");
     
}
display.value=sum;
}

document.addEventListener("keydown", function(event){
  const key=event.key;
  if(/[0-9]/.test(key )||['+','-','*','/'].includes(key)){
    appendToDisplay(key);
  }else if(key==="Enter"){
    calculate();
  }else if(key==="Backspace"){
    clearDisplay();
  }else if(key==="."){
    appendToDisplay(".");
  }
})