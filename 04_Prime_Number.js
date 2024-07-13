// Q4. How to find the prime number in javascript 

function isPrime(num){
    if(num < 1){
        console.log(`prime number cannot be negative`)
    }else if(num == 1){
        console.log(`1 is not a prime number`)
    }else{
        let isPrime = true
        for(let i = 2; i < num; i++){
            if(num % i == 0){
                isPrime = false
                break
            }
        }
        if(isPrime){
            console.log(`The number ${num} is a prime number`)
        }else{
            console.log(`The number ${num} is not a prime number`)
        }
    }
}
isPrime(2)