import random from './random.js';
import avg from './avg.js';
document.getElementById('avg').innerHTML = avg([1, 10, 9, 5]);
document.getElementById('random').innerHTML = random(100, 20);
