// 1. Write a program to reverse an array without using an additional array?

let values = [10,50,5,25,80,75,60,90];

//loop
function reverseMyArray(element){
  const length = element.length - 1;
  let indicator = length;

  for(let i=0;i<length/2;i++){
    [element[i], element[indicator]] = [element[indicator], element[i]];
    indicator --;
  }
}

// recursive call
             //method 1
function reverseRecurseHelper(element,index,values = null){
  if (index === element.length - 1) return;
  index++;
  reverseRecurseHelper(element,index, values);
  values ? values.push(element[index]) : null
}

function reverseRecurse(element){
  const newValues = [];
  reverseRecurseHelper(element,-1,newValues);
  return newValues
}

              //method 2

function recursiveReverse(numbers){
  recursiveReverseHelper(numbers, -1);
}

function recursiveReverseHelper(element, index){
  if(index === element.length -2) return
  index++
  recursiveReverseHelper(element, index);
  element[element.length] = element[index]
  // element[index] = 0
  for(let i=index;i<element.length;i++){
    element[i] = element[i+1];
    console.log(index, element.length, i)
  }
}
// reverseMyArray(values);
// console.log(values, reverseRecurse(values));
recursiveReverse(values);
console.log(values);