var arr = [1,2,3,4,5,6,7,8,9,10];
var filtered = arr.filter(evenNumbers);
function evenNumbers(arr){
  return arr % 2 === 0;
}
console.log(filtered);
