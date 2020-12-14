const {isLeap} = require('./leap')

const notLeapYear = [1900,1997,1998,1999,2001,2002,2003,2005,2006,2007,2009]
const leapYear = [1996,2000,2004,2008,2012,2016,2020,2024,2028,2032,2036]

describe(`is a Leap Year`, () => {
    leapYear.forEach(function(year) {
        test(`${year} is a Leap Year ?`, () => {
            expect(isLeap(year)).toBe(true)
        }) 
    })
})

describe(`is not a Leap Year`, () => {
    notLeapYear.forEach(function(year) {
        test(`${year} is not a Leap Year ?`, () => {
            expect(isLeap(year)).toBe(false)
        }) 
    })
})