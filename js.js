
/* LONGER VERSION, NOT USEFUL
function averageOpen() {
var sum = 0;
var days = Object.keys(stocks);

for (var i = 0; i < days.length; i++) {
    var currentDay = days[i];
   var statsForAGivenDay = stocks[currentDay];    //was stocks[days[i]]
    
   var openValue = parseFloat(statsForAGivenDay["1. open"]);
   sum = sum + openValue;
    }
    //divide sum by the number of days
    var average = sum / days.length;
    return average;
}
*/

var average = function(valueOfInterest) { //turn everything that needs to be specific into a parameter
    var sum = 0; 
    var days = Object.keys(stocks);
    for (var i = 0; i < days.length; i++) {
        var currentDay = days[i];
        var statsForAGivenDay = stocks[currentDay];

        var value = parseFloat(statsForAGivenDay[valueOfInterest]);

        sum = sum + value;
    }
    var average = sum / days.length;
    return average;
}
console.log(average("1. open"));
console.log(average("2. high"));
console.log(average("3. low"));
console.log(average("4. close"));
console.log(average("5. volume"));




    var average = function(valueOfInterest) { //turn everything that needs to be specific into a parameter
        var sum = 0; 
        var days = Object.keys(stocks);
        
        days.forEach(function(currentDay) {     //forEach property on every Array by default. it's a fancy for loop
            var statsForAGivenDay = stocks[currentDay];
            var value = parseFloat(statsForAGivenDay[valueOfInterest]);
            sum = sum + value;
        })
        var average = sum / days.length;
        return average;
    }
    console.log(average("1. open"));
    console.log(average("2. high"));
    console.log(average("3. low"));
    console.log(average("4. close"));
    console.log(average("5. volume"));


/*
function forEach(callback) {
    for (var i = 0; i < this.length; i++) {
        var currentThing = this[i];
        callback(currentThing)
    }
}
*/


// create an array of objects that includes the date, the open, and the close

function arrayOfObjects() {
    var days = Object.keys(stocks);
    var array = [];

    days.forEach(function(currentDay) {
    
        var statsForAGivenDay= stocks[currentDay];
        var currentDateOpenClose = {
            date: currentDay,
            open: statsForAGivenDay["1. open"],
            close: statsForAGivenDay["4. close"],
        };
        array.push(currentDateOpenClose);
    
    });

    return array;
}
console.log(arrayOfObjects());