"use strict";

var by = require('dom-essentials/by'),
    lis = by.queryAll('#menu li'),
    ul = by.query('#menu ul'),
    article = by.query('article'),
    divs = article.children;

window.addEventListener('DOMContentLoaded', setWidth);
window.addEventListener('resize', setWidth);
window.addEventListener('scroll', setActive);

function setWidth() {
    var width = 0;

    width = [].reduce.call(lis, function(p, c) {
        return p + parseInt(window.getComputedStyle(c).width, 10);
    }, 0) + 10; // fix for some browsers

    ul.style.width = width + 'px';
}

function setActive(e) {
    var index = 0,
        height = -50, // don't ask
        scrollY = window.scrollY;

    [].every.call(divs, function(div) {
        // This is the height of all the divs up till now
        height += div.offsetHeight;

        if (scrollY > height) {
            index++;
            return true;
        }
        else {
            return false;
        }
    });

    by.query('#menu .active').className = '';
    lis[index].className = 'active';
}
