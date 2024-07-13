// Q3. How to find the factorial of a given number in javascript

function factNum(num){
    if(num < 1){
        console.log(`${num} is a negative integer, factorial is not defined.`)
    }else if(num == 0){
        console.log(`the factorial of ${num} is 1`)
    }else{
        let result = 1;
        for(let i = 1; i <= num; i++){
            result = result * i
        }
        console.log(`The factorial of ${num} is ${result}`)
    }
}
factNum(4)


// another way to do this by using recursive function 
function recursive_fact(num){
    if(num < 1){
        return -1
    }else if(num == 0 || num==1){
        return 1
    }else{
        return num * recursive_fact(num - 1)
    }
}

console.log(recursive_fact(6))