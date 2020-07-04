var age = prompt("Whats is your age?");

if (age < 0) {
    console.log("Come back once you are born")
}

else if (age == 21) {
    console.log("happy 21st birthday!")
}

else if (isNaN(age)) {
    console.log("your age is weird")
}
else if (age % 2 !== 0){
    console.log("your age is odd")
}


else if (age % Math.sqrt(age) == 0) {
    console.log("Perfect Square")
}
else {
    console.log("Your age is " + age + ", awesome!" )
}