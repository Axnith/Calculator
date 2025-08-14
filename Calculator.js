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
    },400);
  }                    
}
document.addEventListener("keydown",(event)=>{
  const key = event.key;

  if(!isNaN(key) || key==='.'){
    AppendToDisplay(key);
  }
   if(['+','-','*','/'].includes(key)){
    AppendToDisplay(key);
  }
   if(key==='c'||key==='C'){
    ClearDisplay();
  }
   if(key==='Backspace'){
    display.value = display.value.slice(0,-1);
  }
  if(key==='Enter'||key==='='){
    Evaluate();
  }
  if(key==='('||key===')'){
    AppendToDisplay(key);
  }
});


