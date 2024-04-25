

// ctrl + m 왼쪽창 숨김
// ctrl + j 밑에 창 숨김

const { init } = require("create-react-app/createReactApp");


function arrayLesson1() {

    console.log('function 말하다');

}

console.log(arrayLesson1());

//javascript언어 
//javascrit 문법
//java: 문법
//react: es6
//변수선언
//javascript는 변수선언을 하면 자동으로 undefined()가 붙는다
var print;

console.log(print);

console.log('========================');
function oneArray() {

    //모든 객체지향언어는 같다
    //모든언어공통: 배열은 indext 0부터 시작한다
    //값을 얻는것도 0부터 얻는다
    var array = [1, 2, 3, 4, 5];

    for (var i = 0; i < 3; i++) {

        console.log(array[i]);
    }

}

console.log(oneArray());

console.log('======2=========');
//1 ~~ 11 차원 배열로 확인
function j304Ex1() {

    var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    for (var i = 0; i < 11; i++) {

        console.log(array2[i]);
    }

}

console.log(j304Ex1());

console.log('===========3============');

//2~13출력
//1차원배열 괄호하나 :[]  var array = [1,2,3,4,5];

function oneArray2() {

    //배열은 무조건 inext 0부터 시작(공통)
    var array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


    // array.length: 엘리먼트(element) = 요소
    // 배열의 요소=엘리먼트 갯수
    //문자열 변수 연결은 +로 한다(공통)
    console.log('배열의 길이는' + array.length);

    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);

    }
}

console.log(oneArray2());


console.log('=========4======');

function oneArray3() {

    //입력을 받는데 어느정도 받는지 모른다. 그래서 []
    var array = [];

    //1~9
    var init = 0;
    for (var i = 0; i < 9; i++) {

        array[i] = ++init;

        console.log(array[i]);
    }


}

console.log(oneArray3());


console.log('===========5=======');

//1~10입력 출력

function oneArray4() {

    var array = [];
    var inint = 0;
    for (var i = 0; i < 10; ++i) {

        array[i] = ++inint
        console.log(array[i]);

    }

}

console.log(oneArray4());

console.log('===========6==========');

function oneArray5() {

    //얼만큼 받을지 모른다[]
    var array = [];
    var inint = 4;
    //5~10 입력
    for (var i = 0; i < 6; i++) {

        array[i] = ++inint;

        console.log(array[i]);


    }


}

console.log(oneArray5());

console.log('========7======');

function oneArray6() {
    //3~12 출력
    var array = [];
    var inint = 2;

    for (i = 0; i < 10; i++) {

        array[i] = ++inint;
        console.log(array[i]);

    }

}

console.log(oneArray6());

console.log('=======8======');

//1~10 합 출력 var array[1,2,3,4,5,6,7,8,9,10]

function Sum() {

    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var sum = 0;
    for (var i = 0; i < array.length; i++) {

        //console.log(arrays);
        sum = sum + array[i];
        console.log(sum);

    }
}

console.log(Sum());

console.log('=======9======');
//1~10 합 출력 var array[]

function Sum2() {

    var array2 = [];
    var sum2 = 0;
    var init = 0;
    for (i = 0; i < 10; i++) {

        array2[i] = ++init;
        sum2 = sum2 + array2[i];
        console.log(sum2);

    }

}

console.log(Sum2());