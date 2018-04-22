'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sudoku = function () {
	function Sudoku(board) {
		_classCallCheck(this, Sudoku);

		this._board = board;
		this._emptyPositions = null;
		this.parseBoard();
		this.saveEmptyPositions();
	}

	_createClass(Sudoku, [{
		key: 'parseBoard',
		value: function parseBoard() {
			this.board = this.board.split('\n').map(function (row) {
				return row.split('').map(function (num) {
					return +num;
				});
			});
		}
	}, {
		key: 'saveEmptyPositions',
		value: function saveEmptyPositions() {
			this.emptyPositions = [];
			var len = this.board.length;
			for (var i = 0; i < len; i++) {
				var rowLen = this.board[i].length;
				for (var j = 0; j < rowLen; j++) {
					if (this.board[i][j] === 0) {
						this.emptyPositions.push([i, j]);
					}
				}
			}
		}
	}, {
		key: 'checkRow',
		value: function checkRow(row, value) {
			for (var i = 0; i < this.board[row].length; i++) {
				if (this.board[row][i] === value) {
					return false;
				}
			}
			return true;
		}
	}, {
		key: 'checkColumn',
		value: function checkColumn(column, value) {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = this.board[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var row = _step.value;

					if (row[column] === value) {
						return false;
					}
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

			return true;
		}
	}, {
		key: 'check3x3Square',
		value: function check3x3Square(column, row, value) {
			var columnCorner = 0;
			var rowCorner = 0;
			var squareSize = 3;

			while (column >= columnCorner + squareSize) {
				columnCorner += squareSize;
			}

			while (row >= rowCorner + squareSize) {
				rowCorner += squareSize;
			}

			for (var i = rowCorner; i < rowCorner + squareSize; i++) {
				for (var j = columnCorner; j < columnCorner + squareSize; j++) {
					if (this.board[i][j] === value) {
						return false;
					}
				}
			}
			return true;
		}
	}, {
		key: 'checkValue',
		value: function checkValue(column, row, value) {
			if (this.checkRow(row, value) && this.checkColumn(column, value) && this.check3x3Square(column, row, value)) {
				return true;
			} else {
				return false;
			}
		}
	}, {
		key: 'draw',
		value: function draw(board) {
			for (var i = 0; i < 9; i++) {
				var tmp = '';
				for (var j = 0; j < 9; j++) {
					if (board[i][j] !== 0) tmp += board[i][j] + ' ';else tmp += '- ';
					if (j === 2 || j === 5) tmp += '║';
				}
				if (i === 3 || i === 6) console.log('═══════════════════');
				console.log(tmp);
			}
		}
	}, {
		key: 'solvePuzzle',
		value: function solvePuzzle() {
			var limit = 9,
			    i = void 0,
			    row = void 0,
			    column = void 0,
			    value = void 0,
			    found = void 0;

			for (i = 0; i < this.emptyPositions.length;) {

				row = this.emptyPositions[i][0];
				column = this.emptyPositions[i][1];
				value = this.board[row][column] + 1;
				found = false;

				while (!found && value <= limit) {
					if (this.checkValue(column, row, value)) {
						found = true;
						this.board[row][column] = value;
						i++;
					} else {
						value++;
					}
				}

				if (!found) {
					this.board[row][column] = 0;
					i--;
				}
			}
			return this.board;
		}
	}, {
		key: 'solveSudoku',
		value: function solveSudoku() {
			var solved = this.solvePuzzle();
			return solved;
		}
	}, {
		key: 'emptyPositions',
		get: function get() {
			return this._emptyPositions;
		},
		set: function set(e) {
			this._emptyPositions = e;
		}
	}, {
		key: 'board',
		get: function get() {
			return this._board;
		},
		set: function set(board) {
			this._board = board;
		}
	}]);

	return Sudoku;
}();

exports.default = Sudoku;