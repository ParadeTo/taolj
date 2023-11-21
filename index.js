var evalRPN = function (tokens) {
  const stack = []
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i]
    if (isNaN(Number(token))) {
      const b = stack.pop()
      const a = stack.pop()
      let res
      switch (token) {
        case '+':
          res = a + b
          break
        case '-':
          res = a + b
          break
        case '*':
          res = a * b
          break
        case '/':
          res = Math.floor(a / b)
          break
      }
      stack.push(res)
    } else {
      stack.push(Number(token))
    }
  }
  return stack[0]
}

console.log(evalRPN(['4', '13', '5', '/', '+']))
