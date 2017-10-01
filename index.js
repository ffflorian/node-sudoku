class Sudoku{
	constructor(board){
		this._board = board;
		this._emptyPositions = null;
		this.parseBoard();
		this.saveEmptyPositions();
	}

	get emptyPositions(){
		return this._emptyPositions;
	}

	get board(){
		return this._board;
	}

	set board(board){
		this._board = board;
	}

	set emptyPositions(e){
		this._emptyPositions = e;
	}

	parseBoard() {
		this.board = this.board
						.split('\n')
						.map((row) => row.split('').map((num) => +num));
	}

	saveEmptyPositions () {
		this.emptyPositions = [];
		for(var i = 0; i < this.board.length; i++) {
			for(var j = 0; j < this.board[i].length; j++) {
				if(this.board[i][j] === 0) {
					this.emptyPositions.push([i, j]);
				}
			}
		}
	}

	checkRow (row, value) {
		for(var i = 0; i < this.board[row].length; i++) {
			if(this.board[row][i] === value) {
				return false;
			}
		}
		return true;
	}

	checkColumn (column, value) {
		for(let row of this.board) {
			if(row[column] === value) {
				return false;
			}
		}
		return true;
	}

	check3x3Square (column, row, value) {
		let columnCorner = 0;
		let rowCorner    = 0;
		let squareSize   = 3;

		while(column >= columnCorner + squareSize) {
			columnCorner += squareSize;
		}

		while(row >= rowCorner + squareSize) {
			rowCorner += squareSize;
		}

		for(let i = rowCorner; i < rowCorner + squareSize; i++) {
			for(let j = columnCorner; j < columnCorner + squareSize; j++) {
				if(this.board[i][j] === value) {        
					return false;
				}
			}
		}
		return true;
	}

	checkValue (column, row, value) {
		if(this.checkRow(row, value) &&
		   this.checkColumn(column, value) &&
		   this.check3x3Square(column, row, value)) {
			return true;
		} else {
			return false;
		}
	}


	
	draw(board){
		for(let i=0; i<9; i++){
			let tmp = '';
			for(let j=0; j<9; j++){
				if(board[i][j] !== 0) tmp += board[i][j] + ' ';
				else tmp += '- ';
				if (j === 2 || j === 5) tmp += '║'
			}
			if(i===3 || i===6) console.log('═══════════════════')
			console.log(tmp);
		}
	}

	solvePuzzle () {
		let limit = 9, i, row, column, value, found;

		for(i = 0; i < this.emptyPositions.length;) {
            
			row    = this.emptyPositions[i][0];
			column = this.emptyPositions[i][1];
			value  = this.board[row][column] + 1;
			found  = false;

			while(!found && value <= limit) {
				if(this.checkValue(column, row, value)) {
					found = true;
					this.board[row][column] = value;
					i++;
				} else {
					value++;
				}
			}

			if(!found) {
				this.board[row][column] = 0;
				i--;
			}
		}
		return this.board;
	}

	solveSudoku () {
		const solved = this.solvePuzzle();
		return solved;
	}

}

module.exports = Sudoku;