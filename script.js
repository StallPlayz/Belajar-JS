// kondisi ? ekspresiJikaBenar : ekspresiJikaSalah;

let umur = 20;
let status;

if (umur >= 18) {
  status = "Dewasa";
} else {
  status = "Anak-anak";
}

console.log(status); // Output: Dewasa

let umur1 = 20;
let status1 = umur1 >= 18 ? "Dewasa" : "Anak-anak";

console.log(status1); // Output: Dewasa

let nilai = 75;
let hasil = nilai >= 70 ? "Lulus" : "Tidak Lulus";

console.log(hasil); // Output: Lulus

let skor = 85;
let grade = skor >= 90 ? "A" :
             skor >= 80 ? "B" :
             skor >= 70 ? "C" : "D";

console.log(grade); // Output: B

