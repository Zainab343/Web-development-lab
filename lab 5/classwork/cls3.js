/*let num=prompt ("enter a age");
if(num>20&&num<80){
console.log("you're eligeble")
}
else if(num>80){
    console.log("too old")
}
else{
    console.log("not eligible, not old enough")
}*/
let device=prompt("Enter the device name");
switch(device){
     case "fan":
         console.log("fan is turned on");
         break;
     case "Tv":
         console.log("TV is turned on");
         break;
     case "Charger":     
         console.log("Charger is turned on");
         break;
      default:
         console.log ("NO Action")
         break;
}

