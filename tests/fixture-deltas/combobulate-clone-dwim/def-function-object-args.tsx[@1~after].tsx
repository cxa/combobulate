// -*- combobulate-test-point-overlays: ((1 outline 123)); eval: (combobulate-test-fixture-mode t); -*-
function doStuff({a, a, ...c, b = 1}: {a: number, b?: number, c: number} = {a: 1, c: 2}) {
  console.log(a, b, c);
  a = 2;
  b = 3;
  c = 4;
  {
    let a = 5;
    let b = 6;
    let c = 7;
    console.log(a, b, c);
  }
  // comment
  return {a, b, c};


