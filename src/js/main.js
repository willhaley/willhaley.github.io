window.onload = function () {
  'use strict';

  var svg = Snap("#gameboard");
  tiles = populatEmptyTitle.init(tiles);
  gameBoard.drawBoard(svg, tiles, colors);


};

  function moveTiles(direction){

    var svg = Snap("#gameboard");
    tiles = move[direction](tiles);

    tiles = populatEmptyTitle.init(tiles);

    gameBoard.drawBoard(svg, tiles, colors);

  }
