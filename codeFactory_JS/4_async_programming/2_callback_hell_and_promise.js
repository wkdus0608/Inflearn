
function watiAndRun() {
    setTimeout(() => {
        console.log("끝");
    }, 2000);
}

// watiAndRun();


// 너무 읽기 힘들어 새로운 방법 갈구 -> Promise

// const timeOutPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('완료');
//     }, 2000);
// });

// timeOutPromise.then((res) => {
//     console.log('---then---');
//     console.log(res);
// });

const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('완료');
    }, seconds * 1000);
});


getPromise(1).then((res) => {
    console.log('--- first then ---');
    console.log(res);

    return getPromise(1);
}).then((res) => {
    console.log('--- second then ---');
    console.log(res);

    return getPromise(3);
}).then((res) => {
    console.log('--- third then ---');
    console.log(res);

    return getPromise(3);
}).catch((res) => {
    console.log("--- first catch ---");
    console.log(res);
});



