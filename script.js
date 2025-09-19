const janji = new Promise((resolve, reject) => {
  let sukses = true;

  if (sukses) {
    resolve("Berhasil!");
  } else {
    reject("Gagal!");
  }
});

janji
  .then((hasil) => {
    console.log(hasil); // Output: Berhasil!
  })
  .catch((error) => {
    console.log(error);
  });

  function cekLogin(user) {
  return new Promise((resolve, reject) => {
    if (user === "admin") {
      resolve("Login berhasil!");
    } else {
      reject("Login gagal!");
    }
  });
}

cekLogin("admin")
  .then((res) => console.log(res))    // Output: Login berhasil!
  .catch((err) => console.log(err));

  function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Selesai!");
    }, ms);
  });
}

delay(2000).then((hasil) => {
  console.log(hasil); // Output setelah 2 detik: Selesai!
});

