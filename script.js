let buah = ["Apel", "Pisang", "Jeruk"];

console.log(buah);

let angka = new Array(1, 2, 3, 4, 5);

console.log(angka);

let hewan1 = ["Kucing", "Anjing", "Kelinci"];

console.log(hewan[0]); // Output: Kucing
console.log(hewan[1]); // Output: Anjing
console.log(hewan[2]); // Output: Kelinci

let hewan = ["Kucing", "Anjing", "Kelinci"];
hewan[1] = "Burung";

console.log(hewan); // Output: ["Kucing", "Burung", "Kelinci"]

console.log(hewan.length); // Output: 3

buah.push("Mangga");

console.log(buah); // ["Apel", "Pisang", "Jeruk", "Mangga"]

buah.pop();

console.log(buah); // ["Apel", "Pisang", "Jeruk"]

buah.shift();

console.log(buah); // ["Pisang", "Jeruk"]

buah.unshift("Strawberry");

console.log(buah); // ["Strawberry", "Pisang", "Jeruk"]

buah.forEach(function(item, index) {
  console.log(index, item);
});

buah.forEach((item, index) => console.log(index, item));

let angkaBaru = angka.map(function(x) {
  return x * 2;
});

console.log(angkaBaru); // [2, 4, 6, 8, 10]

let angkaGanjil = angka.filter(function(x) {
  return x % 2 !== 0;
});

console.log(angkaGanjil); // [1, 3, 5]

let siswa = ["Ali", "Budi", "Citra", "Dina"];

// Menambahkan siswa baru
siswa.push("Eka");

// Menghapus siswa terakhir
siswa.pop();

// Menampilkan semua siswa
siswa.forEach(function(nama) {
  console.log(nama);
});