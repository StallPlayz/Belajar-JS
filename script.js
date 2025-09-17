function sayHello() {
  console.log("Halo, Dunia!");
}

sayHello(); // Output: Halo, Dunia!

function greet(nama) {
  console.log("Halo, " + nama + "!");
}

greet("Budi");  // Output: Halo, Budi!
greet("Siti");  // Output: Halo, Siti!

function tambah(a, b) {
  return a + b;
}

let hasil = tambah(5, 3);
console.log(hasil); // Output: 8

const kali = function(a, b) {
  return a * b;
};

console.log(kali(4, 5)); // Output: 20

function hitungLuasPersegi(sisi) {
  return sisi * sisi;
}

const hitungKelilingPersegi = function(sisi) {
  return 4 * sisi;
};

console.log(hitungLuasPersegi(5));     // Output: 25
console.log(hitungKelilingPersegi(5)); // Output: 20