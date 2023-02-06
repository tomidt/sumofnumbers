const nums = [1, 2, 3, 4];
function sumFor(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }
  return total;
}
console.log(sumFor(nums));

function sumWhile(list) {
  let total = 0;
  let i = 0;
  while (i < list.length) {
    total += list[i];
    i++;
  }
  return total;
}
console.log(sumWhile(nums));

function sumRecursion(list) {
  if (list.length === 1) return list[0];
  const last = list.pop();
  return sumRecursion(list) + last;
}
console.log(sumRecursion(nums));

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}
console.log(sumTheSimpleWay(nums));
