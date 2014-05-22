window.onload = function () {
  'use strict';

  var svg = Snap("#gameboard");
  tiles = populatEmptyTitle.init(tiles);
  gameBoard.drawBoard(svg, tiles, colors);


};

  function moveTiles(direction){

    var svg = Snap("#gameboard");

    var boardMove = move.factory(direction);

    tiles = boardMove.init(tiles);

    gameBoard.drawBoard(svg, populatEmptyTitle.init(tiles), colors);

  }
