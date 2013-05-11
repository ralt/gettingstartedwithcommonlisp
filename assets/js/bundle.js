;(function(e,t,n,r){function i(r){if(!n[r]){if(!t[r]){if(e)return e(r);throw new Error("Cannot find module '"+r+"'")}var s=n[r]={exports:{}};t[r][0](function(e){var n=t[r][1][e];return i(n?n:e)},s,s.exports)}return n[r].exports}for(var s=0;s<r.length;s++)i(r[s]);return i})(typeof require!=="undefined"&&require,{1:[function(require,module,exports){
"use strict";

require('./slides');
require('./menu');

},{"./slides":2,"./menu":3}],2:[function(require,module,exports){
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

},{"dom-essentials/by":4,"dom-essentials/iter":5}],3:[function(require,module,exports){
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
        height = -10, // don't ask
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

},{"dom-essentials/by":4}],4:[function(require,module,exports){
"use strict";

module.exports = require('by');

},{"by":6}],5:[function(require,module,exports){
"use strict";

module.exports = require('iter-shims');

},{"iter-shims":7}],6:[function(require,module,exports){
module.exports = {
    "class": require("./class")
    , id: require("./id")
    , tag: require("./tag")
    , name: require("./name")
    , query: require("./query")
    , queryAll: require("./queryAll")
}

},{"./class":8,"./id":9,"./tag":10,"./name":11,"./query":12,"./queryAll":13}],7:[function(require,module,exports){
"use strict";

module.exports = {
    forEach: require('./forEach'),
    map: require('./map'),
    filter: require('./filter'),
    every: require('./every'),
    some: require('./some'),
    find: require('./find'),
    findIndex: require('./findIndex')
};

},{"./forEach":14,"./map":15,"./filter":16,"./every":17,"./some":18,"./find":19,"./findIndex":20}],9:[function(require,module,exports){
module.exports = byId

function byId(id) {
    return document.getElementById(id)
}

},{}],14:[function(require,module,exports){
"use strict";

module.exports = function(arr, callback, context) {
    if (Array.prototype.forEach) {
        Array.prototype.forEach.call(arr, callback, context);
    }
    else {
        for (var i = 0, l = arr.length; i < l; i++) {
            callback.call(context, arr[i], i, arr);
        }
    }
};

},{}],15:[function(require,module,exports){
"use strict";

module.exports = function(arr, callback, context) {
    if (Array.prototype.map) {
        return Array.prototype.map.call(arr, callback, context);
    }
    else {
        var ret = [];

        for (var i = 0, l = arr.length; i < l; i++) {
            ret.push(callback.call(context, arr[i], i, arr));
        }

        return ret;
    }
}

},{}],16:[function(require,module,exports){
"use strict";

module.exports = function(arr, callback, context) {
    if (Array.prototype.filter) {
        return Array.prototype.filter.call(arr, callback, context);
    }
    else {
        var ret = [];

        for (var i = 0, l = arr.length; i < l; i++) {
            if (callback.call(context, arr[i], i, arr)) {
                ret.push(arr[i]);
            }
        }

        return ret;
    }
};

},{}],17:[function(require,module,exports){
"use strict";

module.exports = function(arr, callback, context) {
    if (Array.prototype.every) {
        return Array.prototype.every.call(arr, callback, context);
    }
    else {
        for (var i = 0, l = arr.length; i < l; i++) {
            if (callback.call(context, arr[i], i, arr) === false) {
                return false;
            }
        }

        return true;
    }
};

},{}],18:[function(require,module,exports){
"use strict";

module.exports = function(arr, callback, context) {
    if (Array.prototype.some) {
        return Array.prototype.some.call(arr, callback, context);
    }
    else {
        for (var i = 0, l = arr.length; i < l; i++) {
            if (callback.call(context, arr[i], i, arr) === true) {
                return true;
            }
        }

        return false;
    }
};

},{}],19:[function(require,module,exports){
"use strict";

module.exports = function(arr, callback, context) {
    if (Array.prototype.find) {
        return Array.prototype.find.call(arr, callback, context);
    }
    else {
        for (var i = 0, l = arr.length; i < l; i++) {
            if (callback.call(context, arr[i], i, arr) === true) {
                return arr[i];
            }
        }
    }
};

},{}],20:[function(require,module,exports){
"use strict";

module.exports = function(arr, callback, context) {
    if (Array.prototype.find) {
        return Array.prototype.find.call(arr, callback, context);
    }
    else {
        for (var i = 0, l = arr.length; i < l; i++) {
            if (callback.call(context, arr[i], i, arr) === true) {
                return i;
            }
        }
    }
};

},{}],8:[function(require,module,exports){
(function(){var document = require("global/document")
var slice = Array.prototype.slice

module.exports = byClass

function byClass(context, selector) {
    if (typeof context === "string") {
        selector = context
        context = null
    }

    if (!context) {
        context = document
    }

    return slice.call(context.getElementsByClassName(selector))
}

})()
},{"global/document":21}],11:[function(require,module,exports){
(function(){var slice = Array.prototype.slice
var document = require("global/document")

module.exports = byName

function byName(name) {
    return slice.call(document.getElementsByName(name))
}

})()
},{"global/document":21}],12:[function(require,module,exports){
(function(){var document = require("global/document")

module.exports = byQuery

function byQuery(context, query) {
    if (typeof context === "string") {
        query = context
        context = null
    }

    if (!context) {
        context = document
    }

    return context.querySelector(query)
}

})()
},{"global/document":21}],10:[function(require,module,exports){
(function(){var document = require("global/document")
var slice = Array.prototype.slice

module.exports = byTag

function byTag(context, tag) {
    if (typeof context === "string") {
        tag = context
        context = null
    }

    if (!context) {
        context = document
    }

    return slice.call(context.getElementsByTagName(tag))
}

})()
},{"global/document":21}],13:[function(require,module,exports){
(function(){var document = require("global/document")
var slice = Array.prototype.slice

module.exports = byQueryAll

function byQueryAll(context, query) {
    if (typeof context === "string") {
        query = context
        context = null
    }

    if (!context) {
        context = document
    }

    return slice.call(context.querySelectorAll(query))
}

})()
},{"global/document":21}],21:[function(require,module,exports){
(function(){/*global document*/
if (typeof document !== "undefined") {
    module.exports = document
}

})()
},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvaG9tZS9mbG9yaWFuL1dvcmtzcGFjZXMvZ2V0dGluZ3N0YXJ0ZWR3aXRoY29tbW9ubGlzcC9hc3NldHMvanMvc3JjL21haW4uanMiLCIvaG9tZS9mbG9yaWFuL1dvcmtzcGFjZXMvZ2V0dGluZ3N0YXJ0ZWR3aXRoY29tbW9ubGlzcC9hc3NldHMvanMvc3JjL3NsaWRlcy5qcyIsIi9ob21lL2Zsb3JpYW4vV29ya3NwYWNlcy9nZXR0aW5nc3RhcnRlZHdpdGhjb21tb25saXNwL2Fzc2V0cy9qcy9zcmMvbWVudS5qcyIsIi9ob21lL2Zsb3JpYW4vV29ya3NwYWNlcy9nZXR0aW5nc3RhcnRlZHdpdGhjb21tb25saXNwL2Fzc2V0cy9qcy9ub2RlX21vZHVsZXMvZG9tLWVzc2VudGlhbHMvYnkuanMiLCIvaG9tZS9mbG9yaWFuL1dvcmtzcGFjZXMvZ2V0dGluZ3N0YXJ0ZWR3aXRoY29tbW9ubGlzcC9hc3NldHMvanMvbm9kZV9tb2R1bGVzL2RvbS1lc3NlbnRpYWxzL2l0ZXIuanMiLCIvaG9tZS9mbG9yaWFuL1dvcmtzcGFjZXMvZ2V0dGluZ3N0YXJ0ZWR3aXRoY29tbW9ubGlzcC9hc3NldHMvanMvbm9kZV9tb2R1bGVzL2RvbS1lc3NlbnRpYWxzL25vZGVfbW9kdWxlcy9ieS9pbmRleC5qcyIsIi9ob21lL2Zsb3JpYW4vV29ya3NwYWNlcy9nZXR0aW5nc3RhcnRlZHdpdGhjb21tb25saXNwL2Fzc2V0cy9qcy9ub2RlX21vZHVsZXMvZG9tLWVzc2VudGlhbHMvbm9kZV9tb2R1bGVzL2l0ZXItc2hpbXMvaW5kZXguanMiLCIvaG9tZS9mbG9yaWFuL1dvcmtzcGFjZXMvZ2V0dGluZ3N0YXJ0ZWR3aXRoY29tbW9ubGlzcC9hc3NldHMvanMvbm9kZV9tb2R1bGVzL2RvbS1lc3NlbnRpYWxzL25vZGVfbW9kdWxlcy9ieS9pZC5qcyIsIi9ob21lL2Zsb3JpYW4vV29ya3NwYWNlcy9nZXR0aW5nc3RhcnRlZHdpdGhjb21tb25saXNwL2Fzc2V0cy9qcy9ub2RlX21vZHVsZXMvZG9tLWVzc2VudGlhbHMvbm9kZV9tb2R1bGVzL2l0ZXItc2hpbXMvZm9yRWFjaC5qcyIsIi9ob21lL2Zsb3JpYW4vV29ya3NwYWNlcy9nZXR0aW5nc3RhcnRlZHdpdGhjb21tb25saXNwL2Fzc2V0cy9qcy9ub2RlX21vZHVsZXMvZG9tLWVzc2VudGlhbHMvbm9kZV9tb2R1bGVzL2l0ZXItc2hpbXMvbWFwLmpzIiwiL2hvbWUvZmxvcmlhbi9Xb3Jrc3BhY2VzL2dldHRpbmdzdGFydGVkd2l0aGNvbW1vbmxpc3AvYXNzZXRzL2pzL25vZGVfbW9kdWxlcy9kb20tZXNzZW50aWFscy9ub2RlX21vZHVsZXMvaXRlci1zaGltcy9maWx0ZXIuanMiLCIvaG9tZS9mbG9yaWFuL1dvcmtzcGFjZXMvZ2V0dGluZ3N0YXJ0ZWR3aXRoY29tbW9ubGlzcC9hc3NldHMvanMvbm9kZV9tb2R1bGVzL2RvbS1lc3NlbnRpYWxzL25vZGVfbW9kdWxlcy9pdGVyLXNoaW1zL2V2ZXJ5LmpzIiwiL2hvbWUvZmxvcmlhbi9Xb3Jrc3BhY2VzL2dldHRpbmdzdGFydGVkd2l0aGNvbW1vbmxpc3AvYXNzZXRzL2pzL25vZGVfbW9kdWxlcy9kb20tZXNzZW50aWFscy9ub2RlX21vZHVsZXMvaXRlci1zaGltcy9zb21lLmpzIiwiL2hvbWUvZmxvcmlhbi9Xb3Jrc3BhY2VzL2dldHRpbmdzdGFydGVkd2l0aGNvbW1vbmxpc3AvYXNzZXRzL2pzL25vZGVfbW9kdWxlcy9kb20tZXNzZW50aWFscy9ub2RlX21vZHVsZXMvaXRlci1zaGltcy9maW5kLmpzIiwiL2hvbWUvZmxvcmlhbi9Xb3Jrc3BhY2VzL2dldHRpbmdzdGFydGVkd2l0aGNvbW1vbmxpc3AvYXNzZXRzL2pzL25vZGVfbW9kdWxlcy9kb20tZXNzZW50aWFscy9ub2RlX21vZHVsZXMvaXRlci1zaGltcy9maW5kSW5kZXguanMiLCIvaG9tZS9mbG9yaWFuL1dvcmtzcGFjZXMvZ2V0dGluZ3N0YXJ0ZWR3aXRoY29tbW9ubGlzcC9hc3NldHMvanMvbm9kZV9tb2R1bGVzL2RvbS1lc3NlbnRpYWxzL25vZGVfbW9kdWxlcy9ieS9jbGFzcy5qcyIsIi9ob21lL2Zsb3JpYW4vV29ya3NwYWNlcy9nZXR0aW5nc3RhcnRlZHdpdGhjb21tb25saXNwL2Fzc2V0cy9qcy9ub2RlX21vZHVsZXMvZG9tLWVzc2VudGlhbHMvbm9kZV9tb2R1bGVzL2J5L25hbWUuanMiLCIvaG9tZS9mbG9yaWFuL1dvcmtzcGFjZXMvZ2V0dGluZ3N0YXJ0ZWR3aXRoY29tbW9ubGlzcC9hc3NldHMvanMvbm9kZV9tb2R1bGVzL2RvbS1lc3NlbnRpYWxzL25vZGVfbW9kdWxlcy9ieS9xdWVyeS5qcyIsIi9ob21lL2Zsb3JpYW4vV29ya3NwYWNlcy9nZXR0aW5nc3RhcnRlZHdpdGhjb21tb25saXNwL2Fzc2V0cy9qcy9ub2RlX21vZHVsZXMvZG9tLWVzc2VudGlhbHMvbm9kZV9tb2R1bGVzL2J5L3RhZy5qcyIsIi9ob21lL2Zsb3JpYW4vV29ya3NwYWNlcy9nZXR0aW5nc3RhcnRlZHdpdGhjb21tb25saXNwL2Fzc2V0cy9qcy9ub2RlX21vZHVsZXMvZG9tLWVzc2VudGlhbHMvbm9kZV9tb2R1bGVzL2J5L3F1ZXJ5QWxsLmpzIiwiL2hvbWUvZmxvcmlhbi9Xb3Jrc3BhY2VzL2dldHRpbmdzdGFydGVkd2l0aGNvbW1vbmxpc3AvYXNzZXRzL2pzL25vZGVfbW9kdWxlcy9kb20tZXNzZW50aWFscy9ub2RlX21vZHVsZXMvYnkvbm9kZV9tb2R1bGVzL2dsb2JhbC9kb2N1bWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKCcuL3NsaWRlcycpO1xucmVxdWlyZSgnLi9tZW51Jyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGJ5ID0gcmVxdWlyZSgnZG9tLWVzc2VudGlhbHMvYnknKSxcbiAgICBmb3JFYWNoID0gcmVxdWlyZSgnZG9tLWVzc2VudGlhbHMvaXRlcicpLmZvckVhY2gsXG4gICAgc2xpZGVzID0gYnkucXVlcnlBbGwoJy5zbGlkZScpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHNldFNpemUpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldFNpemUpO1xuXG5mdW5jdGlvbiBzZXRTaXplKCkge1xuICAgIHZhciBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMDA7XG5cbiAgICBmb3JFYWNoKHNsaWRlcywgZnVuY3Rpb24oc2xpZGUpIHtcbiAgICAgICAgc2xpZGUuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgICB9KTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgYnkgPSByZXF1aXJlKCdkb20tZXNzZW50aWFscy9ieScpLFxuICAgIGxpcyA9IGJ5LnF1ZXJ5QWxsKCcjbWVudSBsaScpLFxuICAgIHVsID0gYnkucXVlcnkoJyNtZW51IHVsJyksXG4gICAgYXJ0aWNsZSA9IGJ5LnF1ZXJ5KCdhcnRpY2xlJyksXG4gICAgZGl2cyA9IGFydGljbGUuY2hpbGRyZW47XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgc2V0V2lkdGgpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldFdpZHRoKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzZXRBY3RpdmUpO1xuXG5mdW5jdGlvbiBzZXRXaWR0aCgpIHtcbiAgICB2YXIgd2lkdGggPSAwO1xuXG4gICAgd2lkdGggPSBbXS5yZWR1Y2UuY2FsbChsaXMsIGZ1bmN0aW9uKHAsIGMpIHtcbiAgICAgICAgcmV0dXJuIHAgKyBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjKS53aWR0aCwgMTApO1xuICAgIH0sIDApICsgMTA7IC8vIGZpeCBmb3Igc29tZSBicm93c2Vyc1xuXG4gICAgdWwuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZShlKSB7XG4gICAgdmFyIGluZGV4ID0gMCxcbiAgICAgICAgaGVpZ2h0ID0gLTEwLCAvLyBkb24ndCBhc2tcbiAgICAgICAgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xuXG4gICAgW10uZXZlcnkuY2FsbChkaXZzLCBmdW5jdGlvbihkaXYpIHtcbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgaGVpZ2h0IG9mIGFsbCB0aGUgZGl2cyB1cCB0aWxsIG5vd1xuICAgICAgICBoZWlnaHQgKz0gZGl2Lm9mZnNldEhlaWdodDtcblxuICAgICAgICBpZiAoc2Nyb2xsWSA+IGhlaWdodCkge1xuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBieS5xdWVyeSgnI21lbnUgLmFjdGl2ZScpLmNsYXNzTmFtZSA9ICcnO1xuICAgIGxpc1tpbmRleF0uY2xhc3NOYW1lID0gJ2FjdGl2ZSc7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdieScpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnaXRlci1zaGltcycpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgXCJjbGFzc1wiOiByZXF1aXJlKFwiLi9jbGFzc1wiKVxuICAgICwgaWQ6IHJlcXVpcmUoXCIuL2lkXCIpXG4gICAgLCB0YWc6IHJlcXVpcmUoXCIuL3RhZ1wiKVxuICAgICwgbmFtZTogcmVxdWlyZShcIi4vbmFtZVwiKVxuICAgICwgcXVlcnk6IHJlcXVpcmUoXCIuL3F1ZXJ5XCIpXG4gICAgLCBxdWVyeUFsbDogcmVxdWlyZShcIi4vcXVlcnlBbGxcIilcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBmb3JFYWNoOiByZXF1aXJlKCcuL2ZvckVhY2gnKSxcbiAgICBtYXA6IHJlcXVpcmUoJy4vbWFwJyksXG4gICAgZmlsdGVyOiByZXF1aXJlKCcuL2ZpbHRlcicpLFxuICAgIGV2ZXJ5OiByZXF1aXJlKCcuL2V2ZXJ5JyksXG4gICAgc29tZTogcmVxdWlyZSgnLi9zb21lJyksXG4gICAgZmluZDogcmVxdWlyZSgnLi9maW5kJyksXG4gICAgZmluZEluZGV4OiByZXF1aXJlKCcuL2ZpbmRJbmRleCcpXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBieUlkXG5cbmZ1bmN0aW9uIGJ5SWQoaWQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnIsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgaWYgKEFycmF5LnByb3RvdHlwZS5mb3JFYWNoKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJyLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoY29udGV4dCwgYXJyW2ldLCBpLCBhcnIpO1xuICAgICAgICB9XG4gICAgfVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFyciwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICBpZiAoQXJyYXkucHJvdG90eXBlLm1hcCkge1xuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGFyciwgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIHJldCA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgcmV0LnB1c2goY2FsbGJhY2suY2FsbChjb250ZXh0LCBhcnJbaV0sIGksIGFycikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnIsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgaWYgKEFycmF5LnByb3RvdHlwZS5maWx0ZXIpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChhcnIsIGNhbGxiYWNrLCBjb250ZXh0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciByZXQgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjay5jYWxsKGNvbnRleHQsIGFycltpXSwgaSwgYXJyKSkge1xuICAgICAgICAgICAgICAgIHJldC5wdXNoKGFycltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnIsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgaWYgKEFycmF5LnByb3RvdHlwZS5ldmVyeSkge1xuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmV2ZXJ5LmNhbGwoYXJyLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjay5jYWxsKGNvbnRleHQsIGFycltpXSwgaSwgYXJyKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXJyLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgIGlmIChBcnJheS5wcm90b3R5cGUuc29tZSkge1xuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNvbWUuY2FsbChhcnIsIGNhbGxiYWNrLCBjb250ZXh0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwoY29udGV4dCwgYXJyW2ldLCBpLCBhcnIpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFyciwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICBpZiAoQXJyYXkucHJvdG90eXBlLmZpbmQpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5maW5kLmNhbGwoYXJyLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjay5jYWxsKGNvbnRleHQsIGFycltpXSwgaSwgYXJyKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcnJbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXJyLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgIGlmIChBcnJheS5wcm90b3R5cGUuZmluZCkge1xuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbmQuY2FsbChhcnIsIGNhbGxiYWNrLCBjb250ZXh0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwoY29udGV4dCwgYXJyW2ldLCBpLCBhcnIpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiKGZ1bmN0aW9uKCl7dmFyIGRvY3VtZW50ID0gcmVxdWlyZShcImdsb2JhbC9kb2N1bWVudFwiKVxudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG5cbm1vZHVsZS5leHBvcnRzID0gYnlDbGFzc1xuXG5mdW5jdGlvbiBieUNsYXNzKGNvbnRleHQsIHNlbGVjdG9yKSB7XG4gICAgaWYgKHR5cGVvZiBjb250ZXh0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHNlbGVjdG9yID0gY29udGV4dFxuICAgICAgICBjb250ZXh0ID0gbnVsbFxuICAgIH1cblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gZG9jdW1lbnRcbiAgICB9XG5cbiAgICByZXR1cm4gc2xpY2UuY2FsbChjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc2VsZWN0b3IpKVxufVxuXG59KSgpIiwiKGZ1bmN0aW9uKCl7dmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKFwiZ2xvYmFsL2RvY3VtZW50XCIpXG5cbm1vZHVsZS5leHBvcnRzID0gYnlOYW1lXG5cbmZ1bmN0aW9uIGJ5TmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIHNsaWNlLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUobmFtZSkpXG59XG5cbn0pKCkiLCIoZnVuY3Rpb24oKXt2YXIgZG9jdW1lbnQgPSByZXF1aXJlKFwiZ2xvYmFsL2RvY3VtZW50XCIpXG5cbm1vZHVsZS5leHBvcnRzID0gYnlRdWVyeVxuXG5mdW5jdGlvbiBieVF1ZXJ5KGNvbnRleHQsIHF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBjb250ZXh0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHF1ZXJ5ID0gY29udGV4dFxuICAgICAgICBjb250ZXh0ID0gbnVsbFxuICAgIH1cblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gZG9jdW1lbnRcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGV4dC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KVxufVxuXG59KSgpIiwiKGZ1bmN0aW9uKCl7dmFyIGRvY3VtZW50ID0gcmVxdWlyZShcImdsb2JhbC9kb2N1bWVudFwiKVxudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG5cbm1vZHVsZS5leHBvcnRzID0gYnlUYWdcblxuZnVuY3Rpb24gYnlUYWcoY29udGV4dCwgdGFnKSB7XG4gICAgaWYgKHR5cGVvZiBjb250ZXh0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHRhZyA9IGNvbnRleHRcbiAgICAgICAgY29udGV4dCA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgY29udGV4dCA9IGRvY3VtZW50XG4gICAgfVxuXG4gICAgcmV0dXJuIHNsaWNlLmNhbGwoY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWcpKVxufVxuXG59KSgpIiwiKGZ1bmN0aW9uKCl7dmFyIGRvY3VtZW50ID0gcmVxdWlyZShcImdsb2JhbC9kb2N1bWVudFwiKVxudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG5cbm1vZHVsZS5leHBvcnRzID0gYnlRdWVyeUFsbFxuXG5mdW5jdGlvbiBieVF1ZXJ5QWxsKGNvbnRleHQsIHF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBjb250ZXh0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHF1ZXJ5ID0gY29udGV4dFxuICAgICAgICBjb250ZXh0ID0gbnVsbFxuICAgIH1cblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gZG9jdW1lbnRcbiAgICB9XG5cbiAgICByZXR1cm4gc2xpY2UuY2FsbChjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpKVxufVxuXG59KSgpIiwiKGZ1bmN0aW9uKCl7LypnbG9iYWwgZG9jdW1lbnQqL1xuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnRcbn1cblxufSkoKSJdfQ==
;