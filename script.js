let nama = "Fauzan";
let umur = 20;
let tinggi = 170.5;
let isOnline = false;
let isLogin = true;
let alamat; // undefined
let data = null; // null
let id = Symbol("id");
let angkaBesar = 123456789012345678901234567890n;
let fairuz = {
  nama: "Fairuz",
  umur: 16,
  tinggi: 160.5 + "cm",
};
let listNama = ["Fauzan", "Fairuz", "Alya"];
console.log("Halo " + nama);
console.log("Umur saya " + umur + " tahun");
console.log("Tinggi saya " + tinggi + " cm");
console.log("Status online: " + isOnline);
console.log("Status login: " + isLogin);
console.log("Alamat: " + alamat);
console.log("Data: " + data);
console.log("ID: " + id.toString());
console.log("Angka besar: " + angkaBesar);
console.log("Nama teman saya: " + fairuz.nama);
console.log("Umur teman saya: " + fairuz.umur + " tahun");
console.log("Tinggi teman saya: " + fairuz.tinggi);
console.log("Daftar nama teman saya: " + listNama.join(", "));
console.log("Jumlah teman saya: " + listNama.length);

function sapa() {
  return "Selamat pagi, semuanya!";
}
console.log(sapa());

console.log(typeof "Hello"); // string
console.log(typeof 100); // number
console.log(typeof true); // boolean
console.log(typeof {}); // object
console.log(typeof []); // object (array tetap dianggap object)
console.log(typeof null); // object (ini bug lama di JavaScript)
console.log(typeof function () {}); // function
