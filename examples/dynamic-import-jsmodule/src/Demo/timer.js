export const a = 1
export const b = 2

function timerGenerator() {
  const time = new Date().toLocaleString()

  console.log(`TIME: ${time}`)

  return time
}

export default timerGenerator
