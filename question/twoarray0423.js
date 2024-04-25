//1~12 짝수의합 홀수의합 총합 일반과제
function twoArray() {

    var array = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
    var one = 0;
    var two = 0;
    var init = 0;
    var sum = 0;

    for (i = 0; i < 3; i++) {

        for (x = 0; x < 4; x++) {

            array = ++init;
            sum = array + sum;

            if (sum % 2 == 0) {

                two = array + two;

            } else {

                one = array + one;

            }

        }
    }


    console.log('짝수의 합 ' + two);
    console.log('홀수의 합 ' + one);

    return '총합 ' + sum;
}

console.log(twoArray());
