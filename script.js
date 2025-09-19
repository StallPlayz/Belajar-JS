async function hello() {
  return "Halo Dunia!";
}

hello().then((hasil) => console.log(hasil));
// Output: Halo Dunia!

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Selesai setelah delay!");
    }, ms);
  });
}

async function proses() {
  console.log("Mulai...");
  let hasil = await delay(2000); // Menunggu 2 detik
  console.log(hasil);
  console.log("Selesai!");
}

proses();

/* Output:
Mulai...
(Selamat 2 detik...)
Selesai setelah delay!
Selesai! */

function login(user) {
  return new Promise((resolve, reject) => {
    if (user === "admin") {
      resolve("Login berhasil!");
    } else {
      reject("Login gagal!");
    }
  });
}

async function prosesLogin() {
  try {
    let hasil = await login("admin");
    console.log(hasil);
  } catch (error) {
    console.log(error);
  }
}

prosesLogin();

async function ambilData() {
  let [data1, data2] = await Promise.all([
    fetch('https://api.example.com/data1'),
    fetch('https://api.example.com/data2')
  ]);

  console.log(await data1.json());
  console.log(await data2.json());
}

