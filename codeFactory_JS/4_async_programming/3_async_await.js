
// 현대에 가장 많이 사용되는 비동기
// async await

const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('완료');
    }, seconds * 1000);
});

async function runner() {
    try{

        const result1 = await getPromise(1);
        console.log(result1);
    
        const result2 = await getPromise(2);
        console.log(result2);
    
        const result3 = await getPromise(3);
        console.log(result3);
    } catch(e) {
        console.log(e);
    }
}
 
runner();

let A = parse