# sudoku-solver

NPM package to solve sudokus. Both algorithm and test file are based
on the link bellow:

- [https://www.codefellows.org/blog/sudoku-solver-from-scratch-in-javascript-tdd-style-a-tutorial/](https://www.codefellows.org/blog/sudoku-solver-from-scratch-in-javascript-tdd-style-a-tutorial/)

## How to use?

```s 
    $ npm i node-sudoku
```

```js
const Sudoku = require('node-sudoku');
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

solver.draw(solver.board);

const solved = solver.solveSudoku();

solver.draw(solved);
```

- `new Sudoku(<string_board>)`. Use it to create an instance.
- `solveSudoku()`. Call it when you create an instance.
- `draw(<board>)`. Call it to draw the board before and after calculate the solution.

## Test

- Just run `npm test`.
- You can see/modify test in `test/sudoku.test.js` or create a new test file.
- Mocha + Chai