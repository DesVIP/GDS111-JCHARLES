// var coupons = 0;
var coupons = prompt("Candy calculator. Enter number of coupons to redeem: ");


var couponsaftercandy = coupons % 10;

var temp = coupons - couponsaftercandy

var cba = temp/10;

var couponsaftergum = couponsaftercandy % 3;

temp = couponsaftercandy - couponsaftergum;

var gba = temp/3;



console.log("Candy calculator. Enter number of coupons to redeem:");
console.log(coupons);



 
console.log("Our " + coupons + " coupons can be redeemed for " + cba +  " candy bars and " + gba + " gumballs with " + couponsaftergum + " coupons leftover.")