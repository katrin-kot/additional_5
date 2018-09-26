module.exports = check;
function check(str, cfg) {
  const arr = str.split("");
  const opening = {};
  for (let i =0; i<cfg.length;i++){
   const config = cfg[i];
   opening[config[0]]=config[1];
  }
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    if (elem in opening && elem !==stack[stack.length-1]) {
      stack.push(elem);
    } else {
      if (stack.length === 0) {
        return false;
      }
      const open = stack.pop();
      const close = opening[open];
      if (arr[i] !== close) {
        return false;
      }
    }
  }
  if (stack.length === 0) {
    return true;
  }
  return false;
};


const config4 = [['|', '|']];

console.log(check('||', config4));
