import Sudoku from '../index';

const board  = '100007090\n' + 
               '030020008\n' +
               '009600500\n' +
               '005300900\n' +
               '010080002\n' +
               '600004000\n' +
               '300000010\n' +
               '040000007\n' +
               '007000300';


const solver = new Sudoku(board);

solver.draw(solver.board);

const solved = solver.solveSudoku();

console.log('\n')
solver.draw(solved);
