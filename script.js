const angka1 = [1, 2, 3];

console.log(...angka1);
// Output: 1 2 3

const buah1 = ["Apel", "Jeruk"];
const buah2 = ["Mangga", "Pisang"];

const semuaBuah = [...buah1, ...buah2];
console.log(semuaBuah);
// Output: ["Apel", "Jeruk", "Mangga", "Pisang"]

const warnaAsli = ["Merah", "Biru"];
const warnaSalinan = [...warnaAsli];

warnaSalinan.push("Hijau");

console.log(warnaAsli);   // ["Merah", "Biru"]
console.log(warnaSalinan); // ["Merah", "Biru", "Hijau"]

const user = {
  nama: "Dina",
  umur: 25
};

const userBaru = {
  ...user,
  pekerjaan: "Programmer"
};

console.log(userBaru);
// Output: { nama: 'Dina', umur: 25, pekerjaan: 'Programmer' }

function tambah(a, b, c) {
  return a + b + c;
}

const angka = [1, 2, 3];

console.log(tambah(...angka));
// Output: 6

