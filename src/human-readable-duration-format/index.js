function formatDuration(seconds) {
  if (!seconds) return "now"
  let remainder = seconds
  const duration = [
    {
      value: 0,
      label: "year",
      unit: 60 * 60 * 24 * 365,
    },
    {
      value: 0,
      label: "day",
      unit: 60 * 60 * 24,
    },
    {
      value: 0,
      label: "hour",
      unit: 60 * 60,
    },
    {
      value: 0,
      label: "minute",
      unit: 60,
    },
    {
      value: 0,
      label: "second",
      unit: 1,
    },
  ]
  const durationList = duration
    .map((el) => {
      const newEl = {
        ...el,
        value: Math.floor(remainder / el.unit),
      }
      remainder = remainder % el.unit
      return newEl
    })
    .filter((el) => el.value > 0)
    .map((el) => `${el.value} ${el.label}${el.value > 1 ? "s" : ""}`)

  const lastElement = durationList.pop()
  return (
    durationList.join(", ") +
    `${durationList.length ? " and " : ""}${lastElement}`
  )
}

console.log(formatDuration(60 * 60 * 24 * 365 + 3232))
