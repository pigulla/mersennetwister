// Don't forget to run "npm install"!
var MersenneTwister = require('mersennetwister'),
    mt;

// Instantiation
mt = new MersenneTwister();   // seed randomly
mt = new MersenneTwister(42); // seed manually

// available methods:
mt.int();
mt.int31();
mt.rnd();
mt.rndHiRes();
mt.real();
mt.realx();

// reinitialize with specific seed
mt.seed(42);
mt.seedArray([42, 23, 17]);

// or you can just use the static "random" method as a drop-in replacement for Math.random
MersenneTwister.random();

console.log('Here are some random numbers:');
for (var i = 0; i < 5; ++i) {
    console.log(MersenneTwister.random());
}