'use strict';

var populatEmptyTitle = {

  tiles: null,

  init: function (tiles) {

    this.tiles = tiles;

    var idx = this.getRandomIndex(0,24);

    while ( ! this.isTileEmpty(idx, tiles ) ){
      idx = this.getRandomIndex(0,24);
    }

    var newNumber = this.getRandomIndex(1,2) * 2;

    tiles[idx].value = newNumber;
    return tiles;
  },

  getRandomIndex: function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  isTileEmpty: function(idx, tiles){
    return ( tiles[idx].value ) ? false : idx;
  }

}