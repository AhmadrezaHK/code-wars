const changeDirection = {
  right: "bottom",
  bottom: "left",
  left: "top",
  top: "right",
}
const directionList = {
  right: {
    i: 0,
    j: 1,
  },
  bottom: {
    i: 1,
    j: 0,
  },
  left: {
    i: 0,
    j: -1,
  },
  top: {
    i: -1,
    j: 0,
  },
}
function checkDir(arrLen, i, j, visitedCells, dir) {
  const new_i = i + directionList[dir].i
  const new_j = j + directionList[dir].j
  if (
    new_i === arrLen ||
    new_i < 0 ||
    new_j === arrLen ||
    new_j < 0 ||
    visitedCells.includes(`${new_i},${new_j}`)
  ) {
    return changeDirection[dir]
  }
  return dir
}
function snail(array) {
  if (array[0] === undefined) {
    return []
  }
  const result = []
  let i = 0,
    j = 0
  const visitedCells = []
  let dir = "right"

  while (result.length !== Math.pow(array.length, 2)) {
    result.push(array[i][j])
    dir = checkDir(array.length, i, j, visitedCells, dir)
    visitedCells.push(`${i},${j}`)
    i += directionList[dir].i
    j += directionList[dir].j
  }
  return result
}
