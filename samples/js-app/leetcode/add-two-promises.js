// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
const addTwoPromises = async function (promise1, promise2) {
    const [a, b] = await Promise.all([promise1, promise2]);
    return a + b;
};

const promise1 = new Promise.resolve(2);
const promise2 = new Promise.resolve(5);

(() => {
    addTwoPromises(promise1, promise2).then(console.log); // 7
})();
