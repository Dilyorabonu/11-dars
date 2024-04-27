// //Array1

// function getLevel2(n) {
//     let natija = [];
//     let son = 2;
//     for (let i = 0; i < n; i++) {
//         natija.push(son);
//         son *= 2;
//     }
//     return natija;
// }

// console.log(getLevel2(5));


// //Array2

// function massiv(n, A, B) {
//     let natija = [A, B];
//     for (let i = 2; i < n; i++) {
//         natija.push(natija.reduce((sum, num) => sum + num, 0));
//     }
//     return natija;
// }

// console.log(massiv(5, 2, 3));


// //Array3

// function reverse(arr) {
//     return arr.reverse();
// }

// console.log(reverse([1, 2, 3, 4, 5]));


// //Array4

// function OddsAndCount(arr) {
//     let odds = arr.filter((_, index) => index % 2 !== 0);
//     let count = odds.length;
//     console.log(odds.join(' '));
//     console.log("toqlar soni =", count);
// }

// OddsAndCount([4, 5, 7, 8, 6, 9]);

// // //2

// // function OddsAndCount(arr) {
// //     let odds = [];
// //     let count = 0;
// //     for (let i = 1; i < arr.length; i += 2) {
// //         odds.push(arr[i]);
// //         count++;
// //     }
// //     console.log(odds.join(' '));
// //     console.log("toqlar soni =", count);
// // }

// // OddsAndCount([4, 5, 7, 8, 6, 9]);


// //Array5

// function EvenThenOdd(arr) {
//     let even = [];
//     let odd = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0) {
//             even.push(arr[i]);
//         } else {
//             odd.push(arr[i]);
//         }
//     }
//     console.log(even.join(' '));
//     console.log(odd.reverse().join(' '));
// }

// EvenThenOdd([4, 5, 7, 8, 6, 9]);


// //Array6

// function pr(arr) {
//     for (let i = 0; i < arr.length; i += 2) {
//         console.log(arr[i]);
//     }
// }

// let arr = [1, 2, 3, 4, 5, 6];
// pr(arr);


// //Array29

// function getOneTime(arr) {
//     let result = [];
//     let a = {};
    
//     for (let i = 0; i < arr.length; i++) {
//         if (!a[arr[i]]) {
//             a[arr[i]] = 1;
//         } else {
//             a[arr[i]]++;
//         }
//     }
    
//     for (let key in seen) {
//         if (a[key] === 1) {
//             result.push(parseInt(key));
//         }
//     }
    
//     return result;
// }


// let arr = [1, 5, 6, 1, 5, 7, 2];
// console.log(getOneTime(arr));


// //Array28

// function remove(arr) {
//     let a = {};
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i];
//         if (!a[item]) {
//             a[item] = true;
//             result.push(item);
//         }
//     }

//     return result;
// }

// let arr = [1, 2, 3, 4, 2, 5, 6, 3];
// console.log(remove(arr));

// //Array21

// function increaseK(arr, k) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] += k;
//     }
//     return arr;
// }

// let a = [1, 2, 3, 4, 5];
// let k = 4;
// console.log(increaseK(a, k));
