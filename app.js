// file: app.js

import greet from './greet.js';

greet('Budi'); // Output: Halo, Budi!

// file: app.js

import { tambah, kurang } from './math.js';

console.log(tambah(5, 3)); // Output: 8
console.log(kurang(5, 3)); // Output: 2

import * as math from './math.js';

console.log(math.tambah(10, 5)); // Output: 15

