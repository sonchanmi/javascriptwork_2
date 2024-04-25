function twoArray() {

    //1~6까지 입력받고 출력
    var array = [];
    var init = 0;

    for (i = 0; i < 2; i++) {

        array[i] = [];

        for (x = 0; x < 4; x++) {



            array[i][x] = ++init;
            console.log(array[i][x]);

        }
    }

    return array;

}

console.log(twoArray());

console.log('=================');


function varValue() {

    //var: es5 2009 변수명을 다시 선언할 수 있다
    //let: es6 2015  변수명을 쓰고 다시 선언할 수 없다

    //var name 다시 선언할 수 있다
    var name = '아무개';
    var name = '홍길동';

    console.log(name);

    //let 변수명을 다시 선언할 수 없다
    let address = '미국';

}


console.log('===========1============');

//1~9 입력하고 출력

function twoArray3() {

    var array3 = [];
    var init3 = 0;

    for (i = 0; i < 2; i++) {

        array3[i] = [];

        for (x = 0; x < 5; x++) {

            array3[i][x] = ++init3;
            console.log(array3[i][x]);

        }
    }


}

console.log(twoArray3());


console.log('===========3=======');

function twoArray4() {

    var array4 = [];
    var init = 0;

    for (i = 0; i < 3; i++) {

        array4[i] = [];

        for (x = 0; x < 3; x++) {


            array4[i][x] = ++init;
            console.log(array4[i][x]);


        }


    }

    return array4;

}

console.log(twoArray4());


console.log('=======================');

function twoArray2() {

    var array2 = [];
    var init2 = 0;

    for (i = 0; i < 3; i++) {

        array2[i] = [];

        for (x = 0; x < 3; x++) {

            array2[i][x] = ++init2;
            console.log(array2[i][x]);

        }
    }

    return array2;
}

console.log(twoArray2());


console.log('========문제=========');
//1~5 6~10 11~15 2차원배열로 입력하고 출력
//합을 구하시오

function twoArray5() {

    var array5 = [];
    var init5 = 0;
    var sum = 0;

    for (i = 0; i < 3; i++) {

        array5[i] = [];

        for (x = 0; x < 5; x++) {

            array5[i][x] = ++init5;
            sum = array5[i][x] + sum;


        }
    }

    console.log('배열의 합: ' + sum);
    return array5;
}

console.log(twoArray5());


console.log('====2차배열 짝수/홀수 합====');

function twoArray6() {

    var array6 = [];
    var one = 0;
    var two = 0;
    // var sum = 0;
    var init = 0;

    for (i = 0; i < 3; i++) {

        array6[i] = [];

        for (x = 0; x < 5; x++) {

            array6[i][x] = ++init;
            // sum = sum + array6[i][x];

            if (array6[i][x] % 2 == 0) {
                two = two + array6[i][x];
            } else {
                one = one + array6[i][x];
            }

        }
    }

    return '짝수의 합: ' + two + '/홀수의 합: ' + one;


}

console.log(twoArray6());

console.log('==========문제3========');

//짝수의 합 홀수의 합 총합 출력 1~6,7~12

function twoArray7(){

    var array7 = [];
    var sum7 = 0;
    var one7 = 0;
    var two7 = 0;
    var init7 = 0;

    for(i=0;i<2;i++){

        array7[i] = [];

        for(x=0;x<6;x++){

            array7[i][x] = ++init7;
            sum7 = array7[i][x] + sum7;

            if(array7[i][x]%2==0){

                two7 = two7+array7[i][x];

            }else{

                one7 =  one7+array7[i][x];

            }
        }
    }

return '짝수의 합: ' + two7 + '/홀수의 합: ' + one7 + '/총 합: ' + sum7;

}

console.log(twoArray7());