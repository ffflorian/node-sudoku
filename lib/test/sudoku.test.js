import { expect } from 'chai';
import Sudoku     from '../index';

const board  = '090000006\n' + 
               '000960485\n' +
               '000581000\n' +
               '004000000\n' +
               '517200900\n' +
               '602000370\n' +
               '100804020\n' +
               '706000810\n' +
               '300090000';

const solver = new Sudoku(board);

describe('Sudoku Solver', () => {
    describe('#parseBoard()', () => {
        it('should parse a sudoku board into a 2D array', () => {
            const expectedBoard = [
                [0,9,0,0,0,0,0,0,6],
                [0,0,0,9,6,0,4,8,5],
                [0,0,0,5,8,1,0,0,0],
                [0,0,4,0,0,0,0,0,0],
                [5,1,7,2,0,0,9,0,0],
                [6,0,2,0,0,0,3,7,0],
                [1,0,0,8,0,4,0,2,0],
                [7,0,6,0,0,0,8,1,0],
                [3,0,0,0,9,0,0,0,0]
            ];

            expect(solver.board.length).to.equal(9);
            expect(solver.board[0].length).to.equal(9);
            expect(solver.board).to.eql(expectedBoard);
        });
    });

    describe('#saveEmptyPositions()', () => {
        it('should save all of the empty positions, 0s, in a parsed board', () => {
            const expectedPositions = [
                [0,0],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[1,0],[1,1],
                [1,2],[1,5],[2,0],[2,1],[2,2],[2,6],[2,7],[2,8],[3,0],
                [3,1],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[4,4],[4,5],
                [4,7],[4,8],[5,1],[5,3],[5,4],[5,5],[5,8],[6,1],[6,2],
                [6,4],[6,6],[6,8],[7,1],[7,3],[7,4],[7,5],[7,8],[8,1],
                [8,2],[8,3],[8,5],[8,6],[8,7],[8,8]
            ];

            expect(solver.emptyPositions.length).to.equal(51);
            expect(solver.emptyPositions).to.eql(expectedPositions);
        });
    });

    describe('#checkRow()', () => {
        it('should check that each value in the row does not equal the input', () => {
            expect(solver.checkRow(0, 2)).to.be.ok;
            expect(solver.checkRow(0, 9)).to.not.be.ok;
        });
    });

    describe('#checkColumn()', () => {
        it('should check that each value in a column does not equal the input', () => {
            expect(solver.checkColumn(0, 9)).to.be.ok;
            expect(solver.checkColumn(0, 5)).to.not.be.ok;
        });
    });

    describe('#check3x3Square()', () => {
        it('should check that each value in a 3x3 square does not match the input', () => {
            expect(solver.check3x3Square(2, 2, 1)).to.be.ok;
            expect(solver.check3x3Square(7, 7, 9)).to.be.ok;
            expect(solver.check3x3Square(2, 2, 9)).to.not.be.ok;
            expect(solver.check3x3Square(7, 7, 1)).to.not.be.ok;
        });
    });

    describe('#checkValue()', () => {
        it('should check whether a value is valid for a particular position', () => {
            expect(solver.checkValue(0, 0, 2)).to.be.ok;
            expect(solver.checkValue(3, 7, 3)).to.be.ok;
            expect(solver.checkValue(0, 0, 9)).to.not.be.ok;
            expect(solver.checkValue(3, 7, 1)).to.not.be.ok;
        });
    });


    describe('#solvePuzzle()', () => {
        it('should find a solution to the puzzle passed in', () => {
            const expectedSolution = [
                [ 8,9,5,7,4,2,1,3,6 ],
                [ 2,7,1,9,6,3,4,8,5 ],
                [ 4,6,3,5,8,1,7,9,2 ],
                [ 9,3,4,6,1,7,2,5,8 ],
                [ 5,1,7,2,3,8,9,6,4 ],
                [ 6,8,2,4,5,9,3,7,1 ],
                [ 1,5,9,8,7,4,6,2,3 ],
                [ 7,4,6,3,2,5,8,1,9 ],
                [ 3,2,8,1,9,6,5,4,7 ]
            ];
            
            const solution = solver.solvePuzzle();

            expect(solution).to.eql(expectedSolution);
        });
    });

});

