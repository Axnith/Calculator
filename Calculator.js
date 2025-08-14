const display = document.getElementById("output-display");
function AppendToDisplay(input){
  display.value+=input;
}
function ClearDisplay(){
  display.value = '';
}
function Evaluate(){
  try{
    display.value = eval(display.value);
  }
  catch{
    display.value = 'Error';
    setTimeout(()=>{
      display.value = '';
    },800);
  }
}


