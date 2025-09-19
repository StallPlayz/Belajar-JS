function greet(nama) {
  if (nama === undefined) {
    nama = "Guest";
  }
  console.log(`Halo, ${nama}`);
}

function greet(nama = "Guest") {
  console.log(`Halo, ${nama}`);
}

greet();       // Output: Halo, Guest
greet("Budi"); // Output: Halo, Budi

function hitungLuas(panjang = 1, lebar = 1) {
  return panjang * lebar;
}

console.log(hitungLuas());          // Output: 1
console.log(hitungLuas(5));          // Output: 5
console.log(hitungLuas(5, 10));      // Output: 50

function tambah(a, b = a) {
  return a + b;
}

console.log(tambah(5));    // Output: 10 (karena b = a)
console.log(tambah(5, 3)); // Output: 8

