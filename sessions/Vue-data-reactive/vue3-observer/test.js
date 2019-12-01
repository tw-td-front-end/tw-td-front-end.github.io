var arr = [];
var arr1 = [];
var arr2 = [];
var arr3 = [];
for (let index = 0; index < 10000; index++) {
  arr.push (index);
  arr1.push (index);
  arr2.push (index);
  arr3.push (index);
}
console.time ();
for (let index = 10000; index > 0; index--) {
  arr.concat (arr1);
}
console.timeEnd ();

console.time ();
console.time ();
for (let index = 10000; index > 0; index--) {
  arr2.push (...arr3);
}
console.timeEnd ();
