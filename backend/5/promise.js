const promise1 = new Promise(resolve => setTimeout(() => resolve('Promise 1'), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Promise 2'), 2000));

Promise.all([promise1, promise2]).then(promises => {
    console.log('sucesso!', promises);
});