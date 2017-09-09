'use strict';

var browsers = ['Chrome', 'Opera', 'Edge', 'Safari'];

// for (var browser in browsers) {
//     console.log(browser);
// }
//
// for (var index in browsers) {
//     console.log(browsers[index]);
// }

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = browsers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var browser = _step.value;

        console.log(browser);
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