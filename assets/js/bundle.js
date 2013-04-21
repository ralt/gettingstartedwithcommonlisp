/**
 * Slides
 */
(function() {
    var slides = document.querySelectorAll('.slide');
    window.addEventListener('DOMContentLoaded', setSize);
    window.addEventListener('resize', setSize);

    function setSize() {
        var height = window.innerHeight - 200;

        [].forEach.call(slides, function(slide) {
            slide.style.height = height + 'px';
        });
    }
}());

/**
 * Menu
 */
(function() {
    var lis = document.querySelectorAll('#menu li'),
        ul = document.querySelector('#menu ul');

    window.addEventListener('DOMContentLoaded', setWidth);
    window.addEventListener('resize', setWidth);

    function setWidth() {
        var width = 0;

        width = getLisWidth().reduce(function(p, c) {
            return p + c;
        }, 0);

        ul.style.width = width + 'px';
    }

    function getLisWidth() {
        return [].map.call(lis, function(li) {
            return parseInt(window.getComputedStyle(li).width, 10);
        });
    }
}());
