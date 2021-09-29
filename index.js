//1
function OneHundredToFive(){
    for (let i =100; i>=5; i-- ){
        console.log(i)
    }
}


//OneHundredToFive()

//2
function absoluteValue ( num ){
    if (num < 0) {
        return num * -1;
    } else {
        return num;
    }
}

console.log(absoluteValue(-500));