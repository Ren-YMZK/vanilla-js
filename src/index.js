// var val1 = "var変数";
// console.log(val1);

// val1 = "val1を上書き";
// console.log(val1);

// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

// const val4 = {
//   name: "れん",
//   age: 23,
// };

// val4.name = "ren";
// val4.address = "Tokyo";

// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey")
// console.log(val5);

// const name = "れん";
// const age = 33;

// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// function func1(str) {
//   return str;
// }

// const func1 = function (str) {
//   return str;
// };

// console.log(func1("func1です。"));

// const func2 = (str) => {
//   return str;
// };

// const func2 = (str) => str;

// console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10, 20));

// const myProfile = {
//   name: "れん",
//   age: 23,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["れん", 23];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello();

// const myProfile = {
//   age: 23,
// };

// const { name = "ゲスト", age = 0 } = myProfile;
// console.log(name);
// console.log(age);

// const name = "れん";
// const age = 23;

// const myProfile = {
//   name,
//   age
// };

// console.log(myProfile);

// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr4);
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

const nameArr = [`田中`, `佐藤`, `れん`];

// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// nameArr.map((name) => console.log(name));

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// const numArr = [1, 2, 3, 4, 5];

// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });

// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "れん") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています。" : "許容範囲内です";
// };

// console.log(checkSum(40, 50));

