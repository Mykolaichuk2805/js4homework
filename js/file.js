/////////// 1 Циклы
const massFive = ["1", "2", "3", "4", "5"];

/*
for (let mass of massFive) {
  console.log(mass);
}
*/

/////////// 2 але ж це завдання було і в минулому дз
/*
for (let i = 2; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
*/

/////////// 3
/*
var foo2 = new Array(100);
for (var i2 = 0; i2 < foo2.length; i2++) {
  var result2 = i2 + 1;
  console.log(result2);
}
console.log(foo2);
*/

///////////// не знаю як об'єднати

/*
var foo = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32
];

for (var i = 0, result = 0; i < foo.length; result += foo[i++]);

console.log(result);
*/

/////////// 4
// але ж тут по ідеї усі числа мають бути з+
/*
var arrayPositiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (
  var iPos = 0, resultPos = 0;
  iPos < arrayPositiv.length;
  resultPos += arrayPositiv[iPos++]
);

console.log(resultPos);
*/

//інший варіант
/*
var iPos2 = 0;
var resultPos2 = 0;

while (iPos2 < arrayPositiv.length) {
  resultPos2 += arrayPositiv[iPos2++];
}

console.log(resultPos2);
*/
/////////// 5
const arrayChar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*
for (let iPos = 0; iPos < arrayChar.length; iPos++) {
  const inittochar = arrayChar.join("-");
  console.log("-" + inittochar);
}
*/

/////////// 1 Функції
/*
function kub(chislo) {
  return chislo * chislo * chislo;
}

console.log(kub(5));
*/

/////////// 2
/*
function isNumberInRange(int) {
  if (int > 0 && int < 10) {
    return true;
  } else {
    return false;
  }
}

console.log(isNumberInRange(20));
*/

/////////// 3
/*
function sqv(chislo) {
  return chislo * chislo;
}

console.log(sqv(5));
*/

/////////// 4
/*
function kit(chislo1, chislo2, chislo3) {
  return (chislo1 - chislo2) / chislo3;
}

console.log(kit(10, 2, 2));
*/

/////////// 5

/*
function isEven(int) {
  return int % 2 === 0 ? true : false;
}

console.log(isEven(12));
console.log(isEven(11));
*/

/////////// 6

/*
function week(int) {
  if (int === 1) {
    return "понедельник";
  } else if (int === 2) {
    return "вторник";
  } else if (int === 3) {
    return "среда";
  } else if (int === 4) {
    return "четверг";
  } else if (int === 5) {
    return "пятница";
  } else if (int === 6) {
    return "суббота";
  } else if (int === 7) {
    return "воскресенье";
  }
}

console.log(week(2));
console.log(week(5));
*/

/////////// 7
/*
function otherPosition(char) {
  return char[1] + char[0] + char[3] + char[2] + char[5] + char[4];
}

console.log(otherPosition("123456"));
*/
