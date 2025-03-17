const myArr = [1, 2, 3, 4, 5, 6]
const myHeros = ['Ironman', 'Thor', 'Spiderman']

const arr_heros = [...myArr, ...myHeros]

console.log(arr_heros)

const another_array = [1, [2, 3], [4, 5, 6, [7, 8], 9],]
const new_another_array = another_array.flat(Infinity)

// console.log(new_another_array);

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

