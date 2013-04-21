"use strict";

var by = require('dom-essentials/by'),
    lis = by.queryAll('#menu li'),
    ul = by.query('#menu ul');

window.addEventListener('DOMContentLoaded', setWidth);
window.addEventListener('resize', setWidth);

function setWidth() {
    var width = 0;

    width = [].reduce.call(lis, function(p, c) {
        return p + parseInt(window.getComputedStyle(c).width, 10);
    }, 0) + 10; // fix for some browsers

    ul.style.width = width + 'px';
}
