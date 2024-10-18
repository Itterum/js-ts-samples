// Задача про FooBar. Суть её заключается в том, что дан массив чисел, допустим от 1 до 100. Нужно сделать так, что бы числа, делящиеся на 3 без остатка принимали значения Foo, а числа, делящиеся на 5 принимали значение Bar, а числа делящиеся на 3 и на 5 принимали значение Foobar.

function fooBar(numbers) {
    const result = []

    for (const number of numbers) {
        if (number % 3 === 0 && number % 5 === 0) {
            result.push('Foobar')
        }

        if (number % 3 === 0) {
            result.push('Foo')
        }

        if (number % 5 === 0) {
            result.push('Bar')
        }

        result.push(number)
    }

    return result
}

const numbers = []

for (let i = 1;i <= 100;i++) {
    numbers.push(i)
}

console.log(fooBar(numbers))
