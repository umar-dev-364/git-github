const add = function(){
    return 5 + 6 ;
}

function maping(num){
    const mapResult = num.map((n) => n + 2)
    console.log(mapResult);
    
}
maping([2,3,4])