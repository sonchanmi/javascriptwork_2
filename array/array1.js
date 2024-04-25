//1차배열

function oneArray(){

    var onearray = [1,2,3,4,5,6];

    for(i=0;i<6;i++){

        console.log(onearray[i]);
    
    }

return onearray;

}

console.log(oneArray());

console.log('=========2차배열=======');

//2차배열
//2행 4열

function twoArray(){

    var twoarray = [];
    var init = 0;

    for(i=0;i<2;i++){

        twoarray[i] = [];

        for(x=0;x<4;x++){

            twoarray[i][x] = ++init;
            console.log(twoarray[i][x]);
            

        }
    }

    return twoarray;
}

console.log(twoArray());