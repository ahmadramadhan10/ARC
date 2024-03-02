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

async function printData() {
    const n = await inputData();
    let arr = [];
    for(let i = 0; i < n; ++i) {
        process.stdout.write(`Masukkan nilai ke-${i + 1} : `);
        arr.push(Number(read.question()));
    }   
    
    setTimeout(() => {
        let sum = 0;
        for(let i = 0; i < arr.length; ++i) {
            sum += arr[i];
        }
        console.log(sum);
    }, 5000);
    console.log('Sabar lagi diitung bang...');
}

printData();