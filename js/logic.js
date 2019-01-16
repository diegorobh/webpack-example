var changed = false;

dog.addEventListener("click", changeColor);

function changeColor(){
  if(changed){
    cat.style.background = "tomato";
  }else{
    cat.style.background = "gray";
  }
  changed = !changed;
}
