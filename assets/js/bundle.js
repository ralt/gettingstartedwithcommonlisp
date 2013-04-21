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
        [].forEach.call(lis, function(li) {
            width += parseInt(window.getComputedStyle(li).width, 10);
        });

        ul.style.width = width + 'px';
    }
}());
