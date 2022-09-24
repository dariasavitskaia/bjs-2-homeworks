function compareArrays(arr1, arr2) {
  let result;
  result =
    arr1.length === arr2.length &&
    arr1.every((element, index) => element === arr2[index]);

  // Ваш код

  return result; // boolean
}

function advancedFilter(arr) {
  //let resultArr;
  let resultArr = arr
    .filter((element) => element > 0)
    .filter((element) => element % 3 == 0)
    .map((element) => element * 10);
  // Ваш код

  return resultArr; // array
}

// arr.push - добавление элементов в массив
//arr.pop - удаление элементов с конца массива
//arr.unshift() - добавление элемента в начало массива
//arr.shift() - удаление элемента в начале массива
//Мутабельность массива позволяет менять объекты внутри массива
//два метода на проверку массива: Array.isArray(проверяет только массивы) или более универсальный - instanceof
//Метод Array.from преобразует символы в массив. Метод будет выдавать ошибку без аргументов.
//В метод Array.from мы можем передавать только итерируемый объект

// for(let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i])
// }

// for(let number of numbers) {
// console.log(number)
// }

// for(let number in numbers) {
// console.log(number)
// }

// for(let position in numbers) {
// console.log(numbers[position]);
// }

// numbers.forEach(item => console.log(item))

//методы перебора массива

// const names = ["Dave", "Max", "Petr", "Oleg", "Ivan"];
// let searchName = "Max";
// for (let name of names) {
//   if (name === searchName) {
//     console.log(name);
//     break;
//   }
// }

// names.indexOf(searchName);
// if (names.includes("Ivan")) {
//   console.log("element found");
// }
