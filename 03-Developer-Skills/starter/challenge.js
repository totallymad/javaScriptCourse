//# 1 

function printForecast(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += `...${arr[i]}ºC in ${i + 1} days `;
    }
    console.log(str)
}

const temps1 = [17, 21, 23];
const temps2 =  [12, 5, -5, 0, 4];

printForecast(temps2);