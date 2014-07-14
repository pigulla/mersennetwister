# mersennetwister
The Mersenne Twister is a pseudo-random number generator invented by Makoto Matsumoto in 1997. Details can be found on the [Wikipedia page](http://en.wikipedia.org/wiki/Mersenne_twister) and on Matsumoto's [website](http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/emt.html).

This implementation is based on Sean McCullough's [port](https://gist.github.com/banksean/300494) of the original C code written by Makato Matsumoto and Takuji Nishimura.

Improvements over Sean's version are

  - more idiomatic, [jshint](http://www.jshint.com/)-compliant and [jsdoc](http://usejsdoc.org/)-annotated code
  - compatible with [Node.js](http://nodejs.org/), [requirejs](http://requirejs.org/)  and browser environments
  - available as a module for [npm](https://npmjs.org/), [Jam](http://jamjs.org/) and [Bower](http://bower.io/)
  - (somewhat) unit tested ;-)
 
Please note that the mersenne twister is [not cryptographically secure](http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/efaq.html).

## Installation and setup
#### Node.js
Simply run `npm install mersennetwister` (or `npm install --save mersennetwister` of you want to directly add it to your package.json file). Import as usual: `var MersenneTwister = require('mersennetwister');`

#### Jam
Use the Jam command line tool: `jam install mersennetwister` and import as usual `require(['mersennetwister'], function (MersenneTwister) { ...`

#### Bower
Via the Bower tool: `bower install mersennetwister`

#### requirejs
Tools like Jam will usually configure requirejs so that it can be accessed via its package name (i.e., `mersennetwister`). If you use requirejs without such a customized configuration you need to import it via its camelcased filename: `requirejs(['MersenneTwister'], function (MersenneTwister) { ...` 

#### Standalone
Download and include the `src/MersenneTwister.js` file: `<script src="path/to/MersenneTwister.js"></script>`. It is now available as the global variable `MersenneTwister`.

## Usage
You can either just use the static `random` method of the module, which will return a random float just like [`Math.random`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) does. If desired you can also instantiate your own instance of the mersenne twister and use its methods:

```javascript
var mt = new MersenneTwister(seed); // if no seed is defined, seed randomly

mt.int();    // random 32-bit integer
mt.int31();  // random 31-bit integer
    
mt.rnd();       // random float in the interval [0;1[ with 32-bit resolution
mt.random();    // random float in the interval [0;1[ (same as mt.rnd() above)
mt.rndHiRes();  // random float in the interval [0;1[ with 53-bit resolution
mt.real();      // random float in the interval [0;1]
mt.realx();     // random float in the interval ]0;1[
    
mt.init(seed);      // (re)seed the generator with an unsigned 32-bit integer
mt.initArray(key);  // (re)seed using a state vector of unsigned 32-bit integers
```

If you have some code that uses `Math.random()`, but you would like deterministic behavior, then you can rely on a seeded mersenne twister's `.random()` method. This is useful for debug code, synchronization, or anywhere else you need execution consistency:

```javascript
var randomBoolean = function (rng) // rng: an *optional* random number generator
{
    // Determine if a random number generator with .random() method was passed.
    // Subsequent rng.random() calls will be Math.random() if no rng was passed.
    if (rng === undefined || typeof rng.random !== 'function') rng = Math;

    return rng.random() >= 0.5;     // return random boolean value
}

var mt = new MersenneTwister(123);
while (randomBoolean(mt))   // use seeded generator mt
{
    console.log('this will be printed twice on every execution');
}

while (randomBoolean())     // use default Math.random()
{
    console.log('nondeterministic execution');
}
```

Take a look at the inventor´s [website](http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/emt.html) if more detailed information is required.

## Licensing
As indicated [here](http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/MT2002/elicense.html), the Mersenne Twister algorithm is free to be used for any purpose, inclusing commercial use. The license file of this module contains the text found in the [C implementation](http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/MT2002/CODES/mt19937ar.c) on which it is based.

## Changelog
##### 0.2.0 (07/13/2014)
  - added `.random()` clone of `.rnd()`

##### 0.1.1 (06/19/2013)
  - published as a Jam [module](http://jamjs.org/packages/#/details/mersennetwister)
  - registered as a [Bower](http://bower.io/) component
  - added installation instructions
  - completed jsdoc annotations and added build target
  - changelog added ;)

##### 0.1.0 (06/16/2013)
  - initial release
  - published as an npm [module](https://npmjs.org/package/mersennetwister)
