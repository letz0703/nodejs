function add(x, y) {
  return x + y
}

add(1, 2)

const num = [1, 2, 3, 4, 5] /*? $.slice(1,4) */
const newarr = num.map((num) => {
  // console.log(num)
  return num * 2
})
newarr
const result = newarr.reduce((sum, num) => {
  return sum + num
}, 0)

console.log(result)

const over = newarr.filter((num) => num > 4)


d
