const a = 0b00000001;
const b = 0b00000110;
const result = a | b;
const x = 255 << 8;

console.log(result);
console.log(x.toString(2));
