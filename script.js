let nama = "SantriKoding";

console.log(nama);

var nama2 = "SantriKoding";

console.log(nama2);

var x = 10;
var x = 20; // tidak error

console.log(x); // 20

let umur = 25;

console.log(umur);

let y = 10;
y = 15; // boleh diubah

console.log(y);

// let y = 20; // error! tidak boleh deklarasi ulang

{
  let z = 100;
  console.log(z); // 100
}

// console.log(z); // error: z is not defined

const PI = 3.14;

console.log(PI);

const nama3 = "Santrikoding";

// nama = "Belajar"; // error! tidak bisa assign ulang

const angka = [1, 2, 3];
angka.push(4); // boleh

console.log(angka); // [1,2,3,4]