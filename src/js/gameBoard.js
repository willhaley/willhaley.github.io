'use strict';

var gameBoard = {

  tiles: null,
  svg: null,

  drawBoard: function(svg, tiles, color){

    _.forEach( tiles, function(tile){
      var tileText = svg.select('g#'+tile.id + ' text');
      var tilePath = svg.select('g#'+tile.id + ' path');

          tileText.node.textContent = tile.value ;

          if ( tile.value )
            tilePath.attr({ fill: color[tile.value] });
          else{
            tilePath.attr({ fill: '#FFF' });
          }
    });

  }

};
