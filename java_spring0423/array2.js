function twoArray1() {

    //2차원배열은 [][]

    //행열
    //행:가로
    //열:세로

    var array = [
        [1, 2, 3] //0행
        , [4, 5, 6] //1행
        , [7, 8, 9] //2행
    ];

    // for 행
    //     for 열

    for (i = 0; i < 3; i++) {

        for (x = 0; x < 3; x++) {

            console.log(array[i][x]);
        }


    }

}

console.log(twoArray1());

console.log('========1=========');
//2행 3열 123456 2차항배열로 출렷

function twoArray2() {

    var array2 = [
        [1, 2, 3]
        , [4, 5, 6]
    ];

    for (i = 0; i < 2; i++) {

        for (x = 0; x < 3; x++) {
            console.log(array2[i][x]);
        }
    }
    

}

console.log(twoArray2());

console.log('====2차항배열로 합을구하시오===');

function twoArray3() {

    var array3 = [
        [1, 2, 3]
        , [4, 5, 6]
    ]

    var sum = 0;

    for (i = 0; i < 2; i++) {
        for (x = 0; x < 3; x++) {

            sum = sum + array3[i][x];
            console.log(sum);

        }
    }

    return sum;
}

console.log(twoArray3());

