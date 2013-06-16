// Note that there is no global MersenneTwister variable. If we wish to use the Mersenne Twister we need to acquire it
// via requirejs.
requirejs(['MersenneTwister'], function (MersenneTwister) {
    'use strict';

    var mt;

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

    // Generate some numbers so people have something to look at when opening the page.
    (function () {
        // Technically, there is no reason to wrap this inside a self-executing anonymous function.
        var ul = document.createElement('ul'),
            li,
            number,
            i;

        for (i = 0; i < 5; ++i) {
            number = MersenneTwister.random();
            li = document.createElement('li');
            li.appendChild(document.createTextNode(number));
            ul.appendChild(li);
        }

        document.body.appendChild(document.createTextNode('Here are some random numbers:'));
        document.body.appendChild(ul);
    })();
});
