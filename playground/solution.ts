function removeKdigits(num: string, k: number): string {
  if (k === num.length) return "0"
  const stack :string[] = [];
  for (const s of num) {
    while(stack.length && stack[stack.length-1] > s && k >0) {
      stack.pop();
      k--
    }
    if (stack.length === 0 && s === "0") continue;
    stack.push(s)
  }
  if (k > 0) {
    stack.splice(stack.length - k, k)
  }
  return stack.join("").length ? stack.join("") : "0"
}