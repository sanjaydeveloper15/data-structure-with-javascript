function timeConversion(s) {
    const hoursMap = {
        '12': 12,
        '01': 13,
        '02': 14,
        '03': 15,
        '04': 16,
        '05': 17,
        '06': 18,
        '07': 19,
        '08': 20,
        '09': 21,
        '10': 22,
        '11': 23
    }
    const timeArr = s.split(":")
    let hour = timeArr[0], minute = timeArr[1], seconds = timeArr[2]
    if (s.indexOf('PM') != -1) { // PM case
        seconds = seconds.replace('PM', '')
        return `${hoursMap[hour]}:${minute}:${seconds}`
    }
    if (s.indexOf('AM') != -1) { // AM case
        hour = (hour === '12' || hour === 12) ? '00' : hour
        seconds = seconds.replace('AM', '')
        return `${hour}:${minute}:${seconds}`
    }
    return null
}

console.log(timeConversion('12:40:22PM'))