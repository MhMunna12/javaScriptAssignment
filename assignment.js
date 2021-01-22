// https://github.com/MhMunna12/javaScriptAssignment

// 1. kilometerToMeter
function kilometerToMeter(kilometer){
    if(kilometer < 0){
        return "It is a negative number";
    }
    else{
        var meter = kilometer * 1000;                   //kilometer to meter convert
        return meter;
    }
}
var meterResult = kilometerToMeter(8);
console.log(meterResult);


// 2. budgetCalculator  
function budgetCalculator(watch,mobile,laptop){
    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;
    
    var totalPrice = watchPrice + mobilePrice + laptopPrice;                //total price 
    return totalPrice;
}
var output = budgetCalculator(6,5,4);
console.log(output);

// 3. hotelCost
function hotelCost(day){
    var totalCost = 0;
    if(day <= 10){
        totalCost = day * 100;                                //first 10 days hotelCost
    }
    else if(day <= 20){
        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        totalCost = firstPart + secondPart;                  //second 20 days hotelCost
    }
    else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;
        totalCost = firstPart + secondPart + thirdPart;         //total days hotelCost  
    }
    return totalCost;
}
var costResult = hotelCost(22);
console.log(costResult);

// 4. megaFriend    
function megaFriend(friendList){
    var maxName = friendList[0].length;
    var largeName = friendList[0]
    if(friendList == "" || friendList == " "){
        return "You are a empty string";
    }
    else{
        for(var i = 0; i <friendList.length; i++){
            var element = friendList[i].length;
            var name = friendList[i]
            if(element > maxName){
                maxName = element;
                largeName = name;                                //set the large array of name
            } 
        }
    }
    return largeName;
}
var friendList =["Adnan" ,"Monwarohssain", "Mouriebiswas", "Emon", "Khaled"," "];
var largeElement = megaFriend(friendList);
console.log(largeElement);
