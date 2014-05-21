window.onload = function () {
  'use strict';

  var svg = Snap("#gameboard");
  tiles = populatEmptyTitle.init(tiles);
  gameBoard.drawBoard(svg, tiles, colors);

  $('#right').click(function(){

    console.log(svg, moveRight.init(tiles));
    tiles = moveRight.init(tiles);
    tiles = populatEmptyTitle.init(tiles);
    gameBoard.drawBoard(svg, tiles, colors);
  });
};

