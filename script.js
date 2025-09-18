function tambah(a, b) {
  return a + b;
}

//Bagaimana jika kita harus menerima banyak argumen? berikut :

function jumlahkan(...angka) {
  let total = 0;
  for (let nilai of angka) {
    total += nilai;
  }
  return total;
}

console.log(jumlahkan(1, 2));        // Output: 3
console.log(jumlahkan(1, 2, 3, 4));  // Output: 10

function cetakData(nama, ...hobi) {
  console.log("Nama:", nama);
  console.log("Hobi:", hobi);
}

cetakData("Budi", "Mancing", "Ngoding", "Main bola");

/* Output: 

Nama: Budi

Hobi: ["Mancing", "Ngoding", "Main bola"] */

const angka = [1, 2, 3, 4, 5];

const [pertama, kedua, ...sisanya] = angka;

console.log(pertama); // 1
console.log(kedua);   // 2
console.log(sisanya); // [3, 4, 5]

const user = {
  nama: "Siti",
  umur: 20,
  kota: "Bandung"
};

const { nama, ...infoLain } = user;

console.log(nama);      // Siti
console.log(infoLain);  // { umur: 20, kota: 'Bandung' }



