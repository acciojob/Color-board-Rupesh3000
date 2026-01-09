// How many squares you want (adjust as needed)
const TOTAL_SQUARES = 800;

const container = document.querySelector('.container');

for (let i = 1; i <= TOTAL_SQUARES; i++) {
  const sq = document.createElement('div');   // use <div> (or <span>) – both work
  sq.className = 'square';
  container.appendChild(sq);
}