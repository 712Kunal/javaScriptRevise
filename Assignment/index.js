console.log(`1.Armstrong Number -->`);

function isArmstrong(num) {
  let cnt = 0;

  for (let i = num; i > 0; i = Math.floor(i / 10)) {
    cnt++;
  }

  let sum = 0;
  for (let i = num; i > 0; i = Math.floor(i / 10)) {
    let lastNum = i % 10;
    sum += Math.pow(lastNum, cnt);
  }

  if (sum === num) {
    console.log(`${num} is an Armstrong Number`);
  } else {
    console.log(`${num} is not an Armstrong Number`);
  }
}

isArmstrong(153);

console.log(`\n2.Buzz Number -->`);
function isBuzz(num) {
  let lastNum = num % 10;
  if (num % 7 === 0 || lastNum === 7) {
    console.log(`${num} is a Buzz Number`);
  } else {
    console.log(`${num} is not a Buzz Number`);
  }
}

isBuzz(15);

console.log(`\n3.Tech Number -->`);
function isTech(num) {
  let cnt = 0;
  for (let i = num; i > 0; i = Math.floor(i / 10)) {
    cnt++;
  }

  if (cnt % 2 === 0) {
    let pow = 1;
    for (let i = 0; i < Math.floor(cnt / 2); i++) {
      pow *= 10;
    }

    let firstNum = Math.floor(num / pow);
    let secondNum = num % pow;

    let sum = firstNum + secondNum;

    if (Math.pow(sum, 2) === num) {
      console.log(`${num} is a Tech Number`);
    } else {
      console.log(`${num} is not a Tech Number`);
    }
  } else {
    console.log(`${num} is not a Tech Number`);
  }
}

isTech(2025);

console.log(`\n4.Strong Number -->`);
function isStrong(num) {
  let sum = 0;

  for (let i = num; i > 0; i = Math.floor(i / 10)) {
    let lastNum = i % 10;

    let fact = 1;
    while (lastNum > 1) {
      fact *= lastNum;
      lastNum--;
    }

    sum += fact;
  }

  if (sum === num) {
    console.log(`${num} is a Strong Number`);
  } else {
    console.log(`${num} is not a Strong Number`);
  }
}

isStrong(145);

console.log(`\n5.Automorphic Number -->`);
function isAutomorphic(num) {
  let squaredNum = Math.pow(num, 2);

  let pow = 1;
  for (let i = num; i > 0; i = Math.floor(i / 10)) {
    pow *= 10;
  }

  let lastNum = squaredNum % pow;

  if (lastNum === num) {
    console.log(`${num} is an Automorphic Number`);
  } else {
    console.log(`${num} is not an Automorphic Number`);
  }
}

isAutomorphic(25);

console.log(`\n6.Prime Number -->`);
function isPrime(num) {
  let den = 2;

  while (den < num) {
    if (num % den === 0) {
      break;
    }

    den++;
  }

  if (den === num) {
    console.log(`${num} is a Prime Number`);
  } else {
    console.log(`${num} is not a Prime Number`);
  }
}

isPrime(5);

console.log(`\n7.Ugly Number -->`);
function isUgly(num) {
  let i = num;
  while (num > 1) {
    if (num % 2 === 0) {
      num = Math.floor(num / 2);
    } else if (num % 3 === 0) {
      num = Math.floor(num / 3);
    } else if (num % 5 === 0) {
      num = Math.floor(num / 5);
    } else {
      break;
    }
  }

  if (num === 1) {
    console.log(`${i} is a ugly number`);
  } else {
    console.log(`${i} is not a ugly number`);
  }
}

isUgly(5);

console.log(`\n8.HCF -->`);
function HCF(num1, num2) {
  let smallest = num1 < num2 ? num1 : num2;

  while (true) {
    if (num1 % smallest === 0 && num2 % smallest === 0) {
      console.log(`HCF of ${num1} and ${num2} is ${smallest}`);
      break;
    }
    smallest--;
  }
}

HCF(100, 10);

console.log(`\n9.LCM -->`);
function LCM(num1, num2) {
  let largest = num1 > num2 ? num1 : num2;

  while (true) {
    if (num1 % largest === 0 && num2 % largest === 0) {
      console.log(`LCM of ${num1} and ${num2} is ${largest}`);
      break;
    }
    largest++;
  }
}

LCM(10, 10);

console.log(`\n10.Fibonacci using recursion -->`);
function fibonacci(num) {
  if (num === 1 || num === 2) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

console.log(fibonacci(10));
