

var array = [1, 2, 3, 4, 5, 9, 10];

console.log('길이는' + array.length);

for (var i = 0; i < array.length; i++) {

    console.log(array[i]);
}

console.log('=======1======');
//2~10까지 출력 (원소만들고)

var array2 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('길이는' + array2.length);

for (var i = 0; i < array2.length; i++) {

    console.log(array2[i]);
}


//2~10까지 출력

console.log('=======2======');

function Lesson1() {
    var array3 = [];
    var init = 1;
    for (i = 0; i < 9; i++) {

        array3[i] = ++init;
        console.log(array3[i]);
    }
}
console.log(Lesson1());

console.log('========3=======');
//얼만큼 받는지 모를 때 []
var array3 = [];
//1~10:10개
//배열은 0~9까지 돈다
var init2 = 0;
for (var i = 0; i < 10; i++) {

    array3[i] = ++init2;
    console.log(array3[i]);
}

console.log('========4=======');
//1~10 합구하기

var array4 = [];
var sum = 0;
var init3 = 0;


for (i = 0; i < 10; i++) {

    array4[i] = ++init3
    sum = array4[i] + sum;
    console.log(sum);
}

console.log('합은:' + sum);


console.log('========5=====');
//1~10 합을 구하는데 짝수의 합 홀수의 합

var array5 = [];
var init5 = 0;
var one = 0;
var two = 0;

for (i = 0; i < 10; i++) {

    array5[i] = ++init5;

    if (array5[i] % 2 == 0) {

        two = two + array5[i];
    } else {
        one = one + array5[i];
    }
}

console.log('홀수의합' + one);
console.log('짝수의합' + two);


