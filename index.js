// Code your solution in this file!
const names = (['Antonia', 'Nuru', 'Amari', 'Mo'])
const returnFirstTwoDrivers = function(names) {
    return names.slice(0,2)
}

const returnLastTwoDrivers = function (names) {
    return names.slice(-2)
}

const selectingDrivers = ([returnFirstTwoDrivers,returnLastTwoDrivers])

function createFareMultiplier(number){
    return function (times) {
      return  number * times
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(names, drivers){
    return drivers(names)
}