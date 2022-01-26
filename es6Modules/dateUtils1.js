// dateUtils.js
export const printDay = (date) => {
    const daysEn = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday'
    } 
    console.log('Today is ', daysEn[date.getDay()])
}

export const printYear = (date) => {
    console.log('Year is ', date.getFullYear())
}
