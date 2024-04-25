//총합 구하기
//1~4, 5~8, 9~12

function sumArray() {

    var sumarray = [];

    var one = 0;
    var two = 0;

    var init = 0;

    for (i = 0; i < 3; i++) {


        sumarray[i] = [];

        for (x = 0; x < 4; x++) {


            sumarray[i][x] = ++init;

            if (sumarray[i][x] % 2 == 0) {

                two = two + sumarray[i][x];

            } else {

                one = one + sumarray[i][x];

            }
        }
    }

    console.log(sumarray);
    return '짝수의 합: ' + two + '/홀수의 합: ' + one + '/총 합: ' + (one + two)

}

console.log(sumArray());


console.log('=======3,6,9 빼고 총합=====');
//총합 구하기
//1~4, 5~8, 9~12

function sumArray2() {

    var sumarray2 = [];

    var one2 = 0;
    var two2 = 0;

    var init2 = 0;

    for (i = 0; i < 2; i++) {

        sumarray2[i] = [];

        for (x = 0; x < 6; x++) {

            sumarray2[i][x] = ++init2;
            if (!(sumarray2[i][x] == 3 || sumarray2[i][x] == 7 || sumarray2[i][x] == 10)) {

                if (sumarray2[i][x] % 2 == 0) {

                    two2 = two2 + sumarray2[i][x];

                } else {

                    one2 = one2 + sumarray2[i][x];

                }
            }
        }
    }

    console.log(sumarray2);
    return '짝수의 합: ' + two2 + '/홀수의 합: ' + one2 + '/총 합: ' + (two2 + one2);

}

console.log(sumArray2());