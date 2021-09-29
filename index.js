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

//console.log(absoluteValue(-500));

//3 
function multiplesOfFourOrSeven(){
    for (let i=1; i<=100; i++){
        if (i%4===0 || i%7===0){
            console.log(i);
        }
    }
   
}

multiplesOfFourOrSeven()
