// Generate some numbers so people have something to look at when opening the page.
(function () {
    // Wrap this inside a self-executing anonymous function to create a local scope and avoid variable leakage into the
    // global namespace.
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