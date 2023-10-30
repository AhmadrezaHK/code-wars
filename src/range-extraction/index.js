function solution(list) {
  let result = []
  for (const num of list) {
    if (result.length) {
      const lastNumList = result[result.length - 1]
      if (num - lastNumList[lastNumList.length - 1] === 1) {
        result[result.length - 1] = [...lastNumList, num]
      } else {
        result.push([num])
      }
    } else {
      result.push([num])
    }
  }
  return result
    .map((el) => {
      if (el.length > 2) {
        return `${el[0]}-${el[el.length - 1]}`
      } else if (el.length === 2) {
        return `${el[0]},${el[1]}`
      }
      return `${el}`
    })
    .join(",")
}
