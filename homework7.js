// 1. https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string){
  return string.trim().split(" ")  
};
console.log(stringToArray("Robin Singh"));


// 2. https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U"); 
}


// 3. https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

var min = function(list){
    return Math.min(...list);
}

var max = function(list){
    return Math.max(...list);
}


// 4. https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
  return toReturn == 'value' ? Math.min(...arr): arr.indexOf(Math.min(...arr))
}
