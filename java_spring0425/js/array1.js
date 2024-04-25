console.log('test');


function oneArray() {

    var array = [1, 2, 3, 4, 5];

    array.forEach(element => {

        console.log(element);

    });

    console.log('=======================');

    array.forEach(function (item) {

        console.log(item);

    });

}

console.log(oneArray());

function oneArray2(input) {

    var array = [1, 2, 3, 4, 5];

    console.log('======================');

    for (const arrays of array) {

        console.log(arrays);

    }

}


function oneArray3() {


    //index 0 배열 0 javascript,java,python,c# 

    var array = [1, 2, 3, 4, 5];





    for (let i = 0; i < 5; i++) {

        console.log(array[i]);

    }

    console.log('============================');

    //es6

    array.forEach(element => {

        console.log(element);

    });

    console.log('============================');

    array.forEach(function (element) {

        console.log(element);

    });


    console.log('============================');

    for (let iterator of array) {

        console.log(iterator);


    }


}


console.log(oneArray3());


function oneArray4() {


    var array = [];

    //1 ~ 5 

    let init = 0;

    for (let i = 0; i < 5; i++) {

        array[i] = ++init;


        console.log(array[i]);

    }

    //push:배열에 값을 놓는다 

    array.push(6);

    console.log(array);

    console.log('=======================');


    //  1 ~ 10 push 놓고 합을구하시오 


}


console.log(oneArray4());



console.log('-----------------')
function Map1() {

    var array = [1, 2, 3, 4, 5];

    var i = 0;
    array.map(function () {


        console.log(array[i++]);
    }

    );
}
console.log(Map1());

//일일 문제 1~10 까지 입력 출력은 map로 출력 3의배수는 제외 1%3==0


function map2() {

    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    array.map(function (arrays) {
        if (arrays % 3 != 0) {
            console.log(arrays);
        }
    })
}
console.log(map2());

console.log('----------');

function map3(){

var array=[];

for(i=0;i<10;i++){
array[i]=i +1;

}

array.map(function(arrays){


    
}


)

}