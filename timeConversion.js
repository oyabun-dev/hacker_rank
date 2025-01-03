const MAX_HOUR = 24, MAX_MINUTE = 59, MAX_SECOND = 59;

const isInRangeLarge = (n, inf, sup) => (n >= inf && n <= sup);
const formatTime = (time) => time < 10 ? '0' + time : time;
const isValidHour = (hour, min, sec, maxHour, maxMinute, maxSecond) => {
    return isInRangeLarge(hour, 0, maxHour) && isInRangeLarge(min, 0, maxMinute) && isInRangeLarge(sec, 0, maxSecond);
}
const isValidMeridiem = (time) => {
    return time.endsWith('AM') || time.endsWith('PM');
}

function isValidTimeFormat(time) {
    if (typeof time !== 'string') {
        throw new Error('Invalid time format');
    }
    time = time.trim().toUpperCase();
    const isInvalidTimeLength = time.length < 8 || time.length === 9 || time.length > 10;
    const isValidFormat = time.includes(':')
    let [hour, minute, second] = isValidMeridiem(time) ? time.slice(0, -2).split(":") : time.split(":");
    let timeMeridiem = isValidMeridiem(time) ? time.slice(-2) : null;
    if (timeMeridiem === null && !isNaN(parseInt(time.slice(-2)))) {
        timeMeridiem = 'AM';
    } else if (timeMeridiem === null && isNaN(parseInt(time.slice(-2)))) {
        throw new Error('Invalid time format');
    }

    [hour, minute, second] = [parseInt(hour), parseInt(minute), parseInt(second)];
    if (!isInvalidTimeLength && isValidFormat && isValidHour(hour, minute, second, MAX_HOUR, MAX_MINUTE, MAX_SECOND)) {
        return [hour, minute, second, timeMeridiem];
    } else {
        throw new Error('Invalid time format');
    }
}


function timeConversion(time) {
    let timeString = "", timeHour = new Date();
    let [hour, minute, second, timeMeridiem] = isValidTimeFormat(time);
    if (hour > 12) {
        return Error("Please enter 12 hour clock time !")
    }

    if (timeMeridiem === 'AM') {
        hour = hour === 12 ? 0 : hour;
    } else {
        hour = hour == 12 ? hour : hour + 12
    }
    timeHour.setHours(hour, minute, second);
    [hour, minute, second] = [timeHour.getHours(), timeHour.getMinutes(), timeHour.getSeconds()];
    timeString = `${formatTime(hour)}:${formatTime(minute)}:${formatTime(second)}`;

    return timeString;
}


const time = '12:45:54PM';
console.log(timeConversion(time));