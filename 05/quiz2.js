var $select = null;

function printBoards() {
  var boardCount = 16;
  var $board = document.getElementById('board');
  var isWhite = false;
  var className = '';
  var boardLineCount = 4;
  var str = '';

  for (let i = 0; i < boardCount; i += 1) {
    className = isWhite ? 'black' : 'white';

    str += `<span class = "${className}"></span>`;

    isWhite = !isWhite;
    if (i % boardLineCount === boardLineCount - 1) {
      isWhite = !isWhite;
    }
  }
  $board.innerHTML = str;
}

function select(event) {
  if ($select) {
    $select.className = $select.className.replace('select', '');
  }
  const el = event.currentTarget;
  el.className += ' select';
  $select = el;
}

function addEvent() {
  var $boards = document.querySelectorAll('span');
  var boardsLength = $boards.length;
  for (let i = 0; i < boardsLength; i += 1) {
    $boards[i].addEventListener('click', select);
  }
}

printBoards();
addEvent();
