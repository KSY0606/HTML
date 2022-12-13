// 재선언 불가
let x = 1;
console.log('첫 선언', x);

let x = 2;
console.log('다시 선언', x);


// 선언하기 전 코드를 사용할 수는 없음
console.log(xyz);
let xyz = 1;


// 상수를 선언과 동시에 초기화
const PI = 3.14;
console.log('원주율:', PI);

// 선언하기만 하는 것 불가
const PI;
PI = 3.14;

// 상수는 값의 변경 불가
const PI = 3.14;
PI = 3.14159

// 여러 변수와 상수 동시에 선언
// let a = 1;
// let b = 2;
// ...

let a = 1, b = 2, c = 3;
const X = 4, Y = 5, Z = 6;

console.log(a, b, c);
console.log(X, Y, Z);