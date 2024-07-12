// Q1. How to find the duplicates elements from a given array 

let arr = [1, 2, 3, 4, 5, 5, 2]

let duplicates = arr.filter((value, index, array)=>{
    return array.indexOf(value) !== index;
})

console.log(duplicates)
