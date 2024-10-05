// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/* const x = 23;

if (x === 23) {
    console.log("  some");
}

const calcAge = birthYear => 2024 - birthYear;

 */

//#1

/* const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];
    for (let i = 1; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min
};

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5, '63'];

calcTempAmplitude([3, 7, 4]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude); */


//#2
/* 
const calcTempAmplitudeNew = function (t1, t2) {

    const temps = t1.concat(t2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];
    for (let i = 1; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min
};


calcTempAmplitudeNew([3, 7, 4], [9, 3, -1]); */

const measureKelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: +prompt('Degrees celsius:')
    }
    console.log(measurement.value);
    console.table(measurement.value);



    // console.warn(measurement.value);
    // console.error(measurement.value);


    const kelvin = measurement.value + 273;

    return kelvin;
}
// A) Identify BUG
console.log(measureKelvin());
