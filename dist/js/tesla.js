'use strict';

//visibility  tesla=open,close,toggle tsopen tstoggle tsclose


//OPEN

window.addEventListener('load', function () {
    var loader = document.getElementsByTagName('ts-loader');
    if (loader.length) {
        loader[0].style.display = 'none';
    }
});

var events = {
    'ts-open': function tsOpen(val) {
        var elems = document.querySelectorAll(val);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = elems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var el = _step.value;

                el.style.display = 'flex';
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    },
    'ts-close': function tsClose(val) {
        var elems = document.querySelectorAll(val);
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = elems[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var el = _step2.value;

                el.style.display = 'none';
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
    },
    'ts-toggle': function tsToggle(val) {
        var elems = document.querySelectorAll(val);
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
            for (var _iterator3 = elems[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var el = _step3.value;

                if (el.style.display == 'none') {
                    el.style.display = 'flex';
                } else {
                    el.style.display = 'none';
                }
            }
        } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                }
            } finally {
                if (_didIteratorError3) {
                    throw _iteratorError3;
                }
            }
        }
    },
    'ts-tab': function tsTab(val) {
        var el = document.querySelector(val);

        var inactiveEls = el.parentElement.querySelectorAll(".ts-tab");
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
            for (var _iterator4 = inactiveEls[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var inactiveEl = _step4.value;

                inactiveEl.style.display = 'none';
            }
        } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                    _iterator4.return();
                }
            } finally {
                if (_didIteratorError4) {
                    throw _iteratorError4;
                }
            }
        }

        el.style.display = 'flex';
    }
    // 'tsclose'

};

document.addEventListener('click', function (e) {
    Object.keys(events).forEach(function (eventName) {
        var val = e.target.getAttribute(eventName);
        if (val) {
            events[eventName](val);
        };
    });
}, false);