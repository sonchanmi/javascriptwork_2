//일일문제
//1~6,7~12
//3,7,10 값을 뺀다
//if(!(array[i][x]==3||array[i][x]==7||array[i][x]==10))
//if(array[i][x] !=3 && array[i][x] !=7 && array[i][x] !=10)
//if(3,7,10)을 짝수의 합 홀수의 합을 구해서 출력(총합까지) 

function twoArray() {

    var array = [];

    var one = 0;
    var two = 0;

    var init = 0;

    for (i = 0; i < 2; i++) {

        array[i] = [];

        for (x = 0; x < 6; x++) {

            array[i][x] = ++init;


            if (array[i][x] % 2 == 0) {
                if (!(array[i][x] == 3 || array[i][x] == 7 || array[i][x] == 10)) {

                    two = two + array[i][x];
                }
            } else {
                if (!(array[i][x] == 3 || array[i][x] == 7 || array[i][x] == 10)) {

                    one = one + array[i][x];
                }
            }

        }
    }

    console.log(array);
    return '짝수의 합: ' + two + '/홀수의 합: ' + one + '/총 합: ' + (one + two);

}

console.log(twoArray());