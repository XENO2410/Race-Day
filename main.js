let raceNumber = Math.floor(Math.random() * 1000);
//console.log(raceNumber);
const registeredEarly = false;
const age = 21;
if(registeredEarly=== true && age>18){
  raceNumber+= 1000;
}
if (age > 18 && registeredEarly) {
console.log(`Your race number is ${raceNumber}. You will race at 9:30 am.`);
}
else if (age > 18 && !registeredEarly){
console.log(`Your race number is ${raceNumber}. You will race at 11:00 am.`);  
}
else if (age < 18){
console.log(`Your race number is ${raceNumber}. Youth registrants run at 12:30 pm.`);  
}
else{
console.log('Runner kindly report at registration desk.')
}


