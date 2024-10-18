multiplicationTable = function (size) {
    let res = []

    for (let i = 1;i <= size;i++) {
        let item = []

        for (let j = 1;j <= size;j++) {
            item.push(j * i)
        }

        res.push(item)
    }

    return res
}
