"use strict";

var by = require('dom-essentials/by'),
    forEach = require('dom-essentials/iter').forEach,
    slides = by.queryAll('.slide');

window.addEventListener('DOMContentLoaded', setSize);
window.addEventListener('resize', setSize);

function setSize() {
    var height = window.innerHeight - 200;

    forEach(slides, function(slide) {
        slide.style.height = height + 'px';
    });
}
