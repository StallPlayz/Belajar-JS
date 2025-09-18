const angka = [1, 2, 3];

const satu = angka[0];
const dua = angka[1];
const tiga = angka[2];

console.log(satu, dua, tiga); 
// Output: 1 2 3

const angka2 = [1, 2, 3];

const [satu2, dua2, tiga2] = angka2;

console.log(satu2, dua2, tiga2); 
// Output: 1 2 3

const angka3 = [1, 2, 3, 4];

const [pertama, , ketiga] = angka3;

console.log(pertama); // 1
console.log(ketiga);  // 3

const warna = ["merah", "biru", "hijau", "kuning"];

const [warna1, ...warnaLain] = warna;

console.log(warna1);      // merah
console.log(warnaLain);   // ["biru", "hijau", "kuning"]

const user = {
  nama: "Rudi",
  umur: 30
};

const nama = user.nama;
const umur = user.umur;

console.log(nama, umur);

const user1 = {
  nama: "Rudi",
  umur: 30
};

const { nama1, umur1 } = user1;

console.log(nama1, umur1);

const user2 = {
  nama: "Rina",
  umur: 28
};

const { nama: namaLengkap, umur: usia } = user2;

console.log(namaLengkap); // Rina
console.log(usia);        // 28

const siswa = {
  nama: "Ayu",
  umur: 17,
  kelas: "12 IPA"
};

const { nama2, ...infoLain } = siswa;

console.log(nama2);      // Ayu
console.log(infoLain);  // { umur: 17, kelas: '12 IPA' }

const nama3 = "Budi";
const umur2 = 20;

const user3 = { nama3, umur2 };

console.log(user3);
// Output: { nama: 'Budi', umur: 20 }

const angkasatu = 1;
const angkadua = 2;
const angkatiga = 3;

const angka1 = [angkasatu, angkadua, angkatiga];

console.log(angka1);
// Output: [1, 2, 3]

