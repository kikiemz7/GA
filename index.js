const array = [1, 2, 3, 4, 6, 5, 7, 8, 9, 10, 11, 13, 12, 14, 15, 16, 17, 18, 19, 20];
let output = [];

for (let i = 0; i < array.length / 2; i++) {
  let left = array[i];
  let right = array[array.length - 1 - i];
  output.push(`${left} -> ${right} -> ${Math.abs(left - right) + 1}`);
}

for (let i = 0; i < output.length; i++) {
  console.log(output[i]);
}
