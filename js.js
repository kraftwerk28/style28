'use strict';

const colsw = document.getElementById('clswitch');

colsw.addEventListener('change', () => {
  if (colsw.checked) {
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
});

// const _switch = (bool) => {
//   const all = document.getElementsByTagName('*');
//   Array.prototype.forEach.call(all, (el) => {
//     el.style.filter = bool ? 'invert(100%)' : 'invert(0%)';
//   });
// };
