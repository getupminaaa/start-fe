import avg from './avg.js';
import ran from './random.js';
document.getElementById('avg').innerHTML = avg([1, 10, '!', 5]);
document.getElementById('random').innerHTML = ran(100, 20);
