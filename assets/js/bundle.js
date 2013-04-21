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
