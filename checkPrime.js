function isPrime(){
    var number=parseInt(f1.num.value);
    var para=document.getElementById("para");
    if (isPrimeNum(number)) {
        para.innerHTML=`The given number ${number} is a Prime number`;
    } else {
        para.innerHTML=`The given number ${number} is not a Prime number`;
    }
}
function isPrimeNum(num) {
    if (num <= 1) {
        return false;
    }

    // Check from 2 to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
