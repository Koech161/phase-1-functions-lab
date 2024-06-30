// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    if (someValue>42){
        return   someValue - 42;
    }else {
        return  42 - someValue  ;
    }
}
function distanceFromHqInFeet(_someValue){
    return distanceFromHqInBlocks(_someValue)*264
}
function distanceTravelledInFeet(a, b){
    if (b>a){
return (b - a)*264
}else if (a>b){
    return (34 - 28)*264
}
}
function calculatesFarePrice(start, destination){
    const distance=distanceTravelledInFeet(start, destination);
    const maxDistance=2500;
    if(distance<=400){
        return 0
    }else if(distance>400 && distance<2000){
        return (528-400)*0.02
    }else if(distance>2000 && distance<=maxDistance){
        return 25
    }else {
        return 'cannot travel that far'
    }
   // let fare;
    //if(distance<400){
       // fare = 0
   // } else if(distance>400 && distance<2000){
   //     fare= (528-400)*0.02
   // }else if(distance>2000 && distance<=2500){
   //     fare= 25
   // }else if(distance>2500){
   //     fare='cannot travel that far'
   // } return fare;     
}
