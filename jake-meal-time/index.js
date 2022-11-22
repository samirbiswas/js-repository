function minutesSinceMidnight(timeStr) {
    let rg = /(\d{1,2})\:(\d{1,2})\s+([ap])\.?m/
    let [, hour, minute, am] = rg.exec(timeStr);
    hour = Number(hour);
    if (am === 'a' && hour === 12) hour -= 12;
    if (am === 'p' && hour < 12) hour += 12;
    return hour * 60 + Number(minute);
}

function minutesToHoursAndMinutes(totalMinutes) {
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;
    return [hours, minutes]
}

function timeToEat(timeStr) {
    let currentTime = minutesSinceMidnight(timeStr);
    let mealTimes = ['7:00 a.m', '12:00 p.m.', '7:00 p.m.'].map(minutesSinceMidnight);
    let nextMealTime = mealTimes.find(mealTime => mealTime >= currentTime);
    if (nextMealTime === undefined) {
        return nextMealTime;
    }
    let timeToNextMealMinutes = nextMealTime - currentTime;
    return minutesToHoursAndMinutes(timeToNextMealMinutes);
}

console.log(timeToEat("2:00 p.m."));
console.log(timeToEat("5:50 a.m."));
