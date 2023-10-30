// 1. Write a program to reverse an array without using an additional array?

let values = [10,20,30,40,50,60,70,80];

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
// function recursiveReverse(numbers){
//   recursiveReverseHelper(numbers, -1);
// }

// function recursiveReverseHelper(element, index){
//   if(index === element.length -2) return
//   index++
//   recursiveReverseHelper(element, index);
//   element[element.length] = element[index]
//   element[index] = 0
//   // for(let i=index;i<element.length-1;i++){
//   //   element[i] = element[i+1];
//   //   console.log(index, element.length, i)
//   // }
// }

//method 3

function recursiveReverseArray(arr, min, max){
  if(min > max){
    return arr
  } 
  [arr[min], arr[max]] = [arr[max], arr[min]];
  return recursiveReverseArray(arr, min+1, max-1);
}

// reverseMyArray(values);
// console.log(values, reverseRecurse(values));

recursiveReverseArray(values, 0, values.length -1);
console.log(values);