'use strict';

var _marked = /*#__PURE__*/regeneratorRuntime.mark(generate);

function generate() {
    return regeneratorRuntime.wrap(function generate$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    console.log('Start');
                    _context.next = 3;
                    return;

                case 3:
                    console.log('Finish');

                case 4:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}

var iterator = generate();

iterator.next();