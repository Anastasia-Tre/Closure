'use strict';

const seq = f => g => {
  if (typeof g === 'number') return f(g);
  return seq(x => f(g(x)));
};

// seq(x => x + 1)
//    (x => x * 2)
//    (x => x / 3)
//    (x => x - 4)(7);

module.exports = { seq };
