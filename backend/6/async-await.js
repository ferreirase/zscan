const promise1 = new Promise(resolve => setTimeout(() => resolve('Promise 1'), 2000));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Promise 2'), 3000));

async function main() {
    const resultPromise1 = await promise1; 
    const resultPromise2 = await promise2;
    
    console.log('sucesso!', resultPromise1, resultPromise2);
}

main();