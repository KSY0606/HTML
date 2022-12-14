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

// 스코프 scope
// 블록 안에 선언된 변수와 상수를 밖에서 사용 불가
{
    const x = 'Hello';
    let y = 'world!';
    console.log(x, y);
}
    console.log(x); // 45 46 에러
    console.log(y);


    const xx = 0;
    let yy = 'Hello!';
    console.log(xx, yy);
{
    const xx = 1; // 💡 블록 안에서는 바깥의 const 재선언 가능
    let yy = '안녕하세요~';
    console.log(xx, yy);
    // ⚠️ const, let을 빼먹으면 재선언이 아니라 바깥것의 값을(변수면) 바꿈!
}
    console.log(xx, yy);
    // 0, Hello!
    // 1, 안녕하세요~
    // 0, Hello!         블럭 안쪽과 바깥쪽 각각 출력
    // 53에 const 생략시 에러,  54에 let 생략시 yy값 변경됨


    let currentTemp = 24.5;

    function logCurrentTemp () {
      console.log(`현재 온도는 섭씨 ${currentTemp}도입니다.`);
    }
    
    console.log('반환값:', logCurrentTemp());


    // return은 맨 뒤로 = 75라인이 76라인과 바뀌어야함
    function add (x, y) {
        console.log(`${x}와 ${y}를 더합니다.`);
        return x + y;
        console.log(`결과는 ${x + y}입니다.`);
      }
      
      console.log(add(2, 7));

// 함수는 실행문보다 나중에 정의하는 것이 가능   호이스팅이라 함
// 변수나 상수는 불가능 (var 제외)
console.log(add(2, 7));

function add (x, y) {
  return x + y;
}


// 한 줄 안에 값만 반환시
const mult = (x, y) => x * y;

console.log(mult(2, 7));


// 매개변수가 하나일 경우 괄호 없이 선언 가능
const pow = x => x ** 2;
console.log(pow(3));


