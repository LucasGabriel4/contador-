const buttons = document.querySelectorAll('button');
const countSpan = document.getElementById('count')

let count = 0;

buttons.forEach((button) => {
    button.addEventListener('click', counter)
})

function counter(event){
 const target = event.target;
   increase(target)
   decrease(target)
   reset(target)

}


function increase(target){
  if(target.id == 'increase'){
    countSpan.textContent = count+=1;
  }
}

function decrease(target){
  if(target.id == 'decrease'){
    countSpan.textContent = count-=1;
  }

}

function reset(target){
    if(target.id == 'reset'){
      count = 0;
      countSpan.textContent = count;
    }
}