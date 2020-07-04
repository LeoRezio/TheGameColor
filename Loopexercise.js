var num = -10;
console.log("print all numbers between -10 and 19")
while (num <= 19){
    console.log(num);
    num++;

}
var num1 = 10
console.log("print all even numbers between 10 and 40")
while (num1 <= 40){
    if (num1 % 2 == 0){
        console.log(num1)
    }
    num1++;
}
var num2 = 300;
console.log("print all odd numbers between 300 and 333")
while (num2 <= 333){
    if (num2 % 2 !== 0){
        console.log(num2)
    }
    num2++;
}
var num3 = 5;
console.log("print all numbers divisible by 5 and 3 between 5 and 50")
while (num3 <= 50){
    if(num3 % 3 == 0 && num3 % 5 == 0){
        console.log(num3)
    }
    num3++;
}
console.log(num,num1,num2,num3)