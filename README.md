# sudoku-solver

[![https://travis-ci.org/jesusgn90/node-sudoku.svg?branch=master](https://travis-ci.org/jesusgn90/node-sudoku.svg?branch=master)](https://travis-ci.org/jesusgn90/node-sudoku.svg?branch=master)
[![https://img.shields.io/npm/v/node-sudoku.svg](https://img.shields.io/npm/v/node-sudoku.svg)](https://www.npmjs.com/package/node-sudoku)
[![https://img.shields.io/npm/dm/node-sudoku.svg](https://img.shields.io/npm/dm/node-sudoku.svg)](https://www.npmjs.com/package/node-sudoku)


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

You also have the following instance properties:

- `board`
- `emptyPositions`

In the above code the first draw call output is:

```s
- 9 - ║- - - ║- - 6 
- - - ║9 6 - ║4 8 5 
- - - ║5 8 1 ║- - - 
═══════════════════
- - 4 ║- - - ║- - - 
5 1 7 ║2 - - ║9 - - 
6 - 2 ║- - - ║3 7 - 
═══════════════════
1 - - ║8 - 4 ║- 2 - 
7 - 6 ║- - - ║8 1 - 
3 - - ║- 9 - ║- - - 
```

The second draw call output is:

```s
8 9 5 ║7 4 2 ║1 3 6 
2 7 1 ║9 6 3 ║4 8 5 
4 6 3 ║5 8 1 ║7 9 2 
═══════════════════
9 3 4 ║6 1 7 ║2 5 8 
5 1 7 ║2 3 8 ║9 6 4 
6 8 2 ║4 5 9 ║3 7 1 
═══════════════════
1 5 9 ║8 7 4 ║6 2 3 
7 4 6 ║3 2 5 ║8 1 9 
3 2 8 ║1 9 6 ║5 4 7 
```

And if you make a console.log(solved), the output is:

```js
[ [ 8, 9, 5, 7, 4, 2, 1, 3, 6 ],
  [ 2, 7, 1, 9, 6, 3, 4, 8, 5 ],
  [ 4, 6, 3, 5, 8, 1, 7, 9, 2 ],
  [ 9, 3, 4, 6, 1, 7, 2, 5, 8 ],
  [ 5, 1, 7, 2, 3, 8, 9, 6, 4 ],
  [ 6, 8, 2, 4, 5, 9, 3, 7, 1 ],
  [ 1, 5, 9, 8, 7, 4, 6, 2, 3 ],
  [ 7, 4, 6, 3, 2, 5, 8, 1, 9 ],
  [ 3, 2, 8, 1, 9, 6, 5, 4, 7 ] ]

```

## Test

- Just run `npm test`.
- You can see/modify test in `test/sudoku.test.js` or create a new test file.
- Mocha + Chai
