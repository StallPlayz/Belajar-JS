let mahasiswa = {
  nama: "Budi",
  umur: 20,
  jurusan: "Informatika"
};

console.log(mahasiswa);

let siswa = new Object();
siswa.nama = "Siti";
siswa.umur = 19;
siswa.kelas = "12 IPA";

console.log(siswa);

console.log(mahasiswa.nama); // Output: Budi
console.log(siswa.umur);     // Output: 19

console.log(mahasiswa["jurusan"]); // Output: Informatika
console.log(siswa["kelas"]);       // Output: 12 IPA

mahasiswa.alamat = "Jakarta";

console.log(mahasiswa);

mahasiswa.umur = 21;

console.log(mahasiswa);

delete mahasiswa.jurusan;

console.log(mahasiswa);

let mobil = {
  merk: "Toyota",
  model: "Avanza",
  mesin: {
    kapasitas: "1500cc",
    bahanBakar: "Bensin"
  }
};

console.log(mobil.mesin.kapasitas); // Output: 1500cc

for (let key in mahasiswa) {
  console.log(key + " : " + mahasiswa[key]);
}

/* Output:
nama : Budi
umur : 21
alamat : Jakarta */


