var coupons = 0;
remainingCoupons = coupons % 4;


coupons = prompt("Candy calculator. Enter number of coupons to redeem: ");
console.log("Candy calculator. Enter number of coupons to redeem:");
console.log(coupons);



 
console.log("Our " + coupons + " coupons can be redeemed for " + Math.floor(1.5) + " candy bars and " + Math.floor(1.5) + " gumballs with " + remainingCoupons + " coupons leftover.")