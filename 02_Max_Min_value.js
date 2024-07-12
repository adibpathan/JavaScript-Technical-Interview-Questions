// Q2. Find the Max and Min values from a given array 

let arr = [1, 2, 13, 7, 9, 10]

// there are many ways to do this problems
// 1. using max and min method 
let maxValue = Math.max(...arr)  //the spread operator expands the array arr
console.log(maxValue)

let minValue = Math.min(...arr)
console.log(minValue)



//2. using reduce method
let maxvalue = arr.reduce((prev, curr)=>{
    if(prev > curr){
        return prev
    }else{
        return curr
    }
}) 
console.log("Maximum value is ",maxvalue)



//3. without using any built in methods 
function findMaxMinValue(arr){
    if(arr.length == 0){
        console.log('array is empty')
    }

    // initialize the max and min value 
    let maxValue = arr[0]
    let minValue = arr[0]

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > maxValue){
            maxValue = arr[i]
        }else{
            minValue = arr[i]
        }
    }
    console.log("MAX", maxValue, "MIN", minValue)
}

findMaxMinValue([2, 3, 4, 5, 6])

