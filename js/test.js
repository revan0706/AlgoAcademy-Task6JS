function Fibonacci(num) {
  let c = 1;
  let i = 0;
  let a = [1, 1];
  for (; a[a.length - 2] + a[a.length - 1] < num; ) {
    a.push(a[a.length - 2] + a[a.length - 1]);
    i++;
    c++;
  }
  return a;
}
console.log(Fibonacci(10));
