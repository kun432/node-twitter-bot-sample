console.time('10000random');

let sum = 0;

for (let i = 0; i < 10000; i++) {
  sum += Math.random()
}

console.timeEnd('10000random')