module.exports = function check(str, bracketsConfig) {
  const config = {};
  bracketsConfig.forEach(item => {
    config[item[0]] = item[1];
  });
  const stack = [];
  const arr = str.split('');
  const flags = {};
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el in config) {
      if (config[el] !== el) {
        stack.push(el);
      } else {
        flags[el] = !flags[el];
        if (flags[el]) {
          stack.push(el);
        } else {
          let popped = stack.pop();
          if (popped === undefined) return false;
          if (el !== config[popped]) return false; 
        }
      }
    } else {
      let popped = stack.pop();
      if (popped === undefined) return false;
      if (el !== config[popped]) return false; 
    }
  }
  if (stack.length === 0) return true;
  return false;
}






