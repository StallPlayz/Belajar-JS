let umur = 20;

if (umur >= 18) {
  console.log("Kamu sudah dewasa.");
}

let nilai = 70;

if (nilai >= 75) {
  console.log("Lulus");
} else {
  console.log("Tidak Lulus");
}

let skor = 85;

if (skor >= 90) {
  console.log("Nilai A");
} else if (skor >= 80) {
  console.log("Nilai B");
} else if (skor >= 70) {
  console.log("Nilai C");
} else {
  console.log("Nilai D");
}

let hari = 3;
let namaHari;

switch (hari) {
  case 1:
    namaHari = "Senin";
    break;
  case 2:
    namaHari = "Selasa";
    break;
  case 3:
    namaHari = "Rabu";
    break;
  default:
    namaHari = "Hari tidak valid";
}

console.log(namaHari);

for (let i = 1; i <= 5; i++) {
  console.log("Iterasi ke-" + i);
}

let i = 1;

while (i <= 5) {
  console.log("Angka " + i);
  i++;
}

let j = 1;

do {
  console.log("Nomor " + j);
  j++;
} while (j <= 5);

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Lewati iterasi saat i = 3
  }
  console.log(i);
}

// Output: 1, 2, 4, 5

for (let i = 1; i <= 5; i++) {
  if (i === 4) {
    break; // Hentikan loop saat i = 4
  }
  console.log(i);
}

// Output: 1, 2, 3