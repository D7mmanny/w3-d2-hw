// q1
let width= 3;
let length=6 ;
let area=width*length;
console.log("------------------------------------");

console.log("The area of a rectangle =" ,area);

console.log("------------------------------------");

// q2
let tempCelsius=30;
let tempFahrenheit=90;
let celsius=(tempFahrenheit-32)/1.8;
let fahrenheit=tempCelsius*1.8+32;

console.log("------------------------------------");

console.log( tempCelsius+"°C "+ "in fahrenheit " +fahrenheit+"°F");

console.log("------------------------------------");

console.log( tempFahrenheit+"°F "+ "in celsius " +celsius+"°C");

console.log("------------------------------------");



// q3

let hours=2;
let seconds=hours*3600;

console.log("time in seconds = "+seconds);
console.log("------------------------------------");

// q4

let year=2007;
if (year%4==0 && year%100 >0){
    console.log("This year is a Leap year");

}else{
    console.log("This year is a not Leap year");
}
console.log("------------------------------------");

// q5

let num=15;

if(num>=11 && num<=15){

    console.log("Ture the number in the rang");

}else{
    console.log("false the number in not the rang");
}
console.log("------------------------------------");

// q6
let n = 9;
let m=1;

	if (n === 0) {
		console.log(1);
	}
	else {
		for (let i = 1; i <= n; i++) {
            m=m*i;
            console.log(m);
            
            
        }
	}





