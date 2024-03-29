'use strict';

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var board = '100007090\n' + '030020008\n' + '009600500\n' + '005300900\n' + '010080002\n' + '600004000\n' + '300000010\n' + '040000007\n' + '007000300';

var solver = new _index2.default(board);

solver.draw(solver.board);

var solved = solver.solveSudoku();

console.log('\n');
solver.draw(solved);