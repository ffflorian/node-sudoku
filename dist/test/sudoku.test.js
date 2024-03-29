'use strict';

var _chai = require('chai');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var board = '090000006\n' + '000960485\n' + '000581000\n' + '004000000\n' + '517200900\n' + '602000370\n' + '100804020\n' + '706000810\n' + '300090000';

var solver = new _index2.default(board);

describe('Sudoku Solver', function () {
    describe('#parseBoard()', function () {
        it('should parse a sudoku board into a 2D array', function () {
            var expectedBoard = [[0, 9, 0, 0, 0, 0, 0, 0, 6], [0, 0, 0, 9, 6, 0, 4, 8, 5], [0, 0, 0, 5, 8, 1, 0, 0, 0], [0, 0, 4, 0, 0, 0, 0, 0, 0], [5, 1, 7, 2, 0, 0, 9, 0, 0], [6, 0, 2, 0, 0, 0, 3, 7, 0], [1, 0, 0, 8, 0, 4, 0, 2, 0], [7, 0, 6, 0, 0, 0, 8, 1, 0], [3, 0, 0, 0, 9, 0, 0, 0, 0]];

            (0, _chai.expect)(solver.board.length).to.equal(9);
            (0, _chai.expect)(solver.board[0].length).to.equal(9);
            (0, _chai.expect)(solver.board).to.eql(expectedBoard);
        });
    });

    describe('#saveEmptyPositions()', function () {
        it('should save all of the empty positions, 0s, in a parsed board', function () {
            var expectedPositions = [[0, 0], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [1, 0], [1, 1], [1, 2], [1, 5], [2, 0], [2, 1], [2, 2], [2, 6], [2, 7], [2, 8], [3, 0], [3, 1], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8], [4, 4], [4, 5], [4, 7], [4, 8], [5, 1], [5, 3], [5, 4], [5, 5], [5, 8], [6, 1], [6, 2], [6, 4], [6, 6], [6, 8], [7, 1], [7, 3], [7, 4], [7, 5], [7, 8], [8, 1], [8, 2], [8, 3], [8, 5], [8, 6], [8, 7], [8, 8]];

            (0, _chai.expect)(solver.emptyPositions.length).to.equal(51);
            (0, _chai.expect)(solver.emptyPositions).to.eql(expectedPositions);
        });
    });

    describe('#checkRow()', function () {
        it('should check that each value in the row does not equal the input', function () {
            (0, _chai.expect)(solver.checkRow(0, 2)).to.be.ok;
            (0, _chai.expect)(solver.checkRow(0, 9)).to.not.be.ok;
        });
    });

    describe('#checkColumn()', function () {
        it('should check that each value in a column does not equal the input', function () {
            (0, _chai.expect)(solver.checkColumn(0, 9)).to.be.ok;
            (0, _chai.expect)(solver.checkColumn(0, 5)).to.not.be.ok;
        });
    });

    describe('#check3x3Square()', function () {
        it('should check that each value in a 3x3 square does not match the input', function () {
            (0, _chai.expect)(solver.check3x3Square(2, 2, 1)).to.be.ok;
            (0, _chai.expect)(solver.check3x3Square(7, 7, 9)).to.be.ok;
            (0, _chai.expect)(solver.check3x3Square(2, 2, 9)).to.not.be.ok;
            (0, _chai.expect)(solver.check3x3Square(7, 7, 1)).to.not.be.ok;
        });
    });

    describe('#checkValue()', function () {
        it('should check whether a value is valid for a particular position', function () {
            (0, _chai.expect)(solver.checkValue(0, 0, 2)).to.be.ok;
            (0, _chai.expect)(solver.checkValue(3, 7, 3)).to.be.ok;
            (0, _chai.expect)(solver.checkValue(0, 0, 9)).to.not.be.ok;
            (0, _chai.expect)(solver.checkValue(3, 7, 1)).to.not.be.ok;
        });
    });

    describe('#solvePuzzle()', function () {
        it('should find a solution to the puzzle passed in', function () {
            var expectedSolution = [[8, 9, 5, 7, 4, 2, 1, 3, 6], [2, 7, 1, 9, 6, 3, 4, 8, 5], [4, 6, 3, 5, 8, 1, 7, 9, 2], [9, 3, 4, 6, 1, 7, 2, 5, 8], [5, 1, 7, 2, 3, 8, 9, 6, 4], [6, 8, 2, 4, 5, 9, 3, 7, 1], [1, 5, 9, 8, 7, 4, 6, 2, 3], [7, 4, 6, 3, 2, 5, 8, 1, 9], [3, 2, 8, 1, 9, 6, 5, 4, 7]];

            var solution = solver.solvePuzzle();

            (0, _chai.expect)(solution).to.eql(expectedSolution);
        });
    });
});