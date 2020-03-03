function largestNumber(string){
    const newArr = string.split(",")
    let max = 0;
    for (let i = 0; i <  newArr.length; i++){
        if(parseInt(newArr[i]) > max){
            max = parseInt(newArr[i]);
        }

    }
return max
}

console.log(largestNumber("1,2,4,5,6,7,0"));
