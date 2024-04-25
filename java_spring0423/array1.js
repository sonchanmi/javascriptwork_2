console.log('Hello World :p');

//1차원 배열
//함수 명사명사 뒤에 첫글짜는 대문자&명사 앞에 글자 대문자(개발규칙)
function oneArray1() {

    //괄호 하나=1차원 배열
    //모든 배열은 0부터 시작한다 index(0부터)
    //모든 객체지향언어는 공통
    var array = [1, 2, 3, 4,];

    for (var i = 0; i < 4; i++) {
        console.log(array[i]);
    }

}

//ctrl+space
console.log(oneArray1());

console.log('======1======');


function Undefined() {

    //return: 던지겠다(어떤타입을(문자형,정수형,부울린형))

    console.log('Hi :D');
    return "function 기본적으로 return으로 던져야한다"
}

//f3: 서택된 함수나 변수로 점프한다
//마우스 누르고 +  ctrl  점프
//ctrl+o:현재페이지 모든 함수나 변수 보여준다(공통)
console.log(Undefined());

console.log('=======2======');

//1~10합을 구하시오  return sum

function oneArray2() {

    var array2 = [];
    var init = 0;
    var sum = 0;
    
    for (var i = 0; i < 10; i++) {

        array2[i] = ++init;
        sum = array2[i] + sum;


    }

    return sum;
}

console.log(oneArray2());
