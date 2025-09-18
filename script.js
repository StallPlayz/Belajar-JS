const sayHello = () => {
  console.log("Halo, Dunia!");
};

const greet = (nama) => {
  console.log("Halo, " + nama + "!");
};

greet("Budi"); // Output: Halo, Budi!

const helloWorld = () => {
  console.log("Hello, World!");
};

helloWorld();

const sapa = nama => {
  console.log("Hai, " + nama);
};

sapa("Andi"); // Output: Hai, Andi

const tambah = (a, b) => a + b;

console.log(tambah(3, 5)); // Output: 8

const buatUser = (nama, umur) => ({
  nama: nama,
  umur: umur
});

console.log(buatUser("Rina", 20));
/* Output:
{ nama: 'Rina', umur: 20 }
*/