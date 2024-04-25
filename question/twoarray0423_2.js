//1~12 짝수의 합 홀수의 합 총합

function twoArray() {

    var array = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

    var sum = 0;
    var one = 0;
    var two = 0;

    //2차원배열: array.length=>행 / array[i].length=>열

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {


            sum = sum + array[i][j];

            if (array[i][j] % 2 == 0) {

                two = two + array[i][j];

            } else if (!array[i][j] % 2 == 0) {

                one = one + array[i][j];
            }
        }
    }

    return '짝수의 합' + two + '/홀수의 합 ' + one + '/총합 ' + sum;

}

console.log(twoArray());


console.log('=================');

