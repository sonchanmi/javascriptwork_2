//question1.js  일일과제
//함수:본인이름
//2~11 배열 만들거나 합을 구하시오  return

function leeNarae(){

    var array = [];
    var init = 1;
    var sum = 0;

    for(var i = 0; i < 10; i++){

        array[i] = ++init;
        sum = array[i]+sum;
        console.log(sum);

    }

    return sum;

}

console.log(leeNarae());