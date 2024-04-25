// 2차원 배열을 1~20 5단위로 , 짝수의합 홀수의 합 출력



function twoArray (){

var array=[];
var init= 0;
var one=0;
var two=0;

 for(i=0;i<4;i++){
   array[i]=[];

 for(x=0;x<5;x++){
   array[i][x] = ++init;
   if(array[i][x]%2==0){
   two=two+array[i][x];

   }else{one=one+array[i][x]};



 }
 

 }

return  "짝수의합" +two + "홀수의합" + one;

}

 console.log(twoArray());