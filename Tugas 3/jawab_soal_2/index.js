const read = require('readline-sync');

/*
Callback function
async await
list
input output
*/

function inputData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            process.stdout.write(`Masukkan berapa total arraynya : `);
            const n = Number(read.question());
            resolve(n);
        }, 1000);
    });
}

function calculate(arr, callback) {
    setTimeout(() => {
        let sum = 0;
        for(let i = 0; i < arr.length; ++i) {
            sum += arr[i];
        }
        callback(sum);
    }, 3000);
}

async function printData() {
    let arr = [];
    const n = await inputData();
    for(let i = 0; i < n; ++i) {
        process.stdout.write(`Masukkan nilai ke-${i + 1} : `);
        arr.push(Number(read.question()));
    }
    calculate(arr, (res) => console.log(res));
    console.log("Sabar lagi diitung bang...");
}



printData();