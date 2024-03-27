// Простые методы массивов.
// Задание Nº1
// Дан массив ["dlrow", "olleH"]. Измените его таким образом, чтобы в итоге получилось ["Hello", "world"]. Используйте методы массива.
let hello = ["dlrow", "olleH"];
hello.reverse();
hello[0] = hello[0].split("").reverse().join("");
hello[1] = hello[1].split("").reverse().join("");
console.log(hello);
// Задание Nº2
// Дан массив ['а', 'б', 'в']. Добавьте ему в конец элементы 4,3,5,5.
let arr = ["а", "б", "в"];
arr.push(4, 3, 5, 5);
console.log(arr);
// Задание Nº3
// Дан массив ["Apple", "Orange", "Pinapple","Cherry"] Удалите сначала первый элемент "Apple" и этот же элемент подставтье после "Pineapple" .
let arr2 = ["Apple", "Orange", "Pinapple", "Cherry"];
let word = arr2.shift();
arr2.splice(2, 0, word);
console.log(arr2);
// Задание Nº4
// Дан массив 18, -7, -21, 44, 31. Вывести в консоль наиболшее число из массива.
let arr3 = [18, -7, -21, 44, 31];
arr3.sort((a, b) => b - a);
let number = arr3.shift();
console.log(number);
// Подсказка: нужно использовать метод sort().
