/*
Создайте приложение на Node.js, которое принимает CSV-файл с данными пользователей в качестве 
аргумента командной строки, 
фильтрует записи по определённому возрастному диапазону 
и сохраняет результат в новый CSV-файл filtered_users.csv.

Пример:
node app.js filter users.csv 18 30 — 
фильтрует пользователей в возрасте от 18 до 30 лет и сохраняет результат в filtered_users.csv.

node app.js print users.csv 18 30 — 
выводит отфильтрованные данные в консоль.
*/

import fs from "fs";
import readline from "readline";

const createCSVFile = (file, data) => {
    fs.writeFile(file, data, "utf-8", (err) => {
        if (err) console.error(err);

        console.log("Data saved");
    })
}

const filter = async (file, minAge, maxAge) => {
    const rl = readline.createInterface({
        input: fs.createReadStream(file),
        crlfDelay: Infinity,
    });

    const result = [];

    for await (const line of rl) {
        const [name, age] = line.split(",");

        if (age >= minAge && age <= maxAge) {
            result.push(`${name},${age}`);
        }
    }

    fs.writeFileSync("filtered_users.csv", result.join("\n"));
    console.log("Result saved to filtered_users.csv");
}

const print = (file, minAge, maxAge) => {
    filter(file, minAge, maxAge);
    fs.readFile("filtered_users.csv", "utf-8", (err, data) => {
        if (err) console.error(err);

        console.log(data);
    })
}

(() => {
    const fileName = "data.csv";

    const data = `
    id,name,age
    1,Johny,45
    2,Mary,20
    3,Mary,16
    4,Mary,15
    `;

    createCSVFile(fileName, data);

    const args = process.argv.slice(2, process.argv.length);

    if (args[0] == "print") {
        console.log("print");
        print(args[1], args[2], args[3]);
    }

    if (args[0] == "filter") {
        console.log("filter");
        filter(args[1], args[2], args[3]);
    }
})();

