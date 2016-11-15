(function(exports) {
    "use strict";
    
    exports.getInfo = function() {
        var name = "David Mendoza";
        var date = "November 12, 2016";
        var about = "Hack University's Javascript Foundations course";
        console.log("By: " + name + "\nCreated: " + date +
                           "\nFor: " + about);
    };
    
    exports.findMin = function(num1, num2) {
        if (num1 < num2) {
            return num1;
        } else if (num2 < num1) {
            return num2;
        } else {
            return "Invalid";
        }
    };
    
    exports.isEven = function(number) {
        function next(n) {
            if (n === 0) {
                return true;
            } else if (n === 1) {
                return false;
            } else if (n < 0) {
                return exports.isEven(-n);
            } else {
                return exports.isEven(n - 2);
            }
        }
        return next(number);
    };
    
    exports.countBs = function(string) {
        var bCount = 0;
        for (var i = 0; i < string.length; i++) {
            var currentLetter = string.charAt(i);
            if (currentLetter === "b") {
                bCount += 1;
            }
        }
        return bCount;
    };
    
    exports.countCharacter = function(string, letter2Find) {
        var letterCount = 0;
        for (var i = 0; i < string.length; i++) {
            var currentLetter = string.charAt(i);
            if (currentLetter === letter2Find) {
                letterCount += 1;
            }
        }
        return letterCount;
    };
    
    exports.isPrime = function(number) {
        if (number < 2) {
            return false;
        }
        for(var i = number - 1; i >= 2; i--) {
            if(number % i === 0) {
                return false;
            }
        }
        return true;
    };
    
    exports.buildRange = function(start, end) {
        var results = [];
        for (var i = start; i <= end; i++) {
            results.push(i);
        }
        return results;
    };
    
    exports.calcSum = function(array) {
        var runningSum = 0;
        for (var i = 0; i < array.length; i++) {
            runningSum = runningSum + array[i];
        }
        return runningSum;
    };
    
    exports.reverseArray = function(array) {
        var rArray = [];
        for (var i = array.length - 1; i >= 0; i--) {
            rArray.push(array[i]);
        }
        return rArray;
    };
    
    exports.Vector = function(x1, y1) {
        this.x = x1;
        this.y = y1;
    };
    
    exports.Vector.prototype.plus = function (vect) {
        var x = this.x + vect.x;
        var y = this.y + vect.y;
        return new cToolbox.Vector(x, y);
    };
    
    exports.Vector.prototype.minus = function (vect) {
        var x = this.x - vect.x;
        var y = this.y - vect.y;
        return new cToolbox.Vector(x, y);
    };
    
    cToolbox.weekDay = (function(exports) {
        var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",                "Friday", "Saturday"];
        
        exports.name = function(number) {
            return names[number];
        };
        
        exports.number = function(name) {
            return names.indexOf(name);
        };
        
    })(typeof window === "undefined" || window === null ? global.weekDay = {} : window.weekDay = {} );
    
})(typeof window === "undefined" || window === null ? global.cToolbox = {} : window.cToolbox = {} );

console.log(cToolbox.isPrime(11)); //true
console.log(cToolbox.buildRange(1, 5)); //[1, 2, 3, 4, 5]
console.log(cToolbox.calcSum(cToolbox.buildRange(1, 4))); //10
console.log(new cToolbox.Vector(1, 2).plus(new cToolbox.Vector(2, 3)));
console.log(weekDay.name(0)); //Sunday
console.log(weekDay.number("Monday")); //1

