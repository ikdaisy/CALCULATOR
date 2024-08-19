let inputBox=document.getElementById("inputbox")
let buttons=document.querySelectorAll("button")
str=""
// console.log(buttons);
// convert the array into pure array or whatever.. 
let arr=Array.from(buttons)
// console.log(arr);
arr.map((button)=>{button.addEventListener('click',(e)=>{
  // console.log(e);
  // console.log(e.target.innerHTML);
  
  if(e.target.innerHTML=="="){
    
  // eval method converts the string into integer and performs the operation
    str=eval(str)
    inputBox.value=str
    
  }
  else if(e.target.innerHTML=="AC"){
    str=""
    inputBox.value=str


  }
  else if(e.target.innerHTML=="DEL"){
    str=str.substring(0,str.length-1);
    inputBox.value=str

  }
  else{
    str+=e.target.innerHTML;
    inputBox.value=str
  }
  
})

})





