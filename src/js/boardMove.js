'use strict';

var move = {

  factory: function(direction){
    switch(direction){
      case 'right':
        return moveRight;
        break;
      case 'left':
        return moveLeft;
        break;
      case 'up':
        break;
      case 'down':
        break;
    }
  },

  reassembleTiles: function(rows, tiles){

    var idx = 0;
    _.forEach(rows, function(row){
      _.forEach(row, function(cell){ tiles[idx] = cell; idx++; }, this);
    }, this);

    return tiles;
  }

};

var moveRight = {

  tiles: [],
  rows: {},

  init: function(tiles){

    this.rows =  _.groupBy(tiles, 'row');

    for ( var idx in this.rows ){
      this.rows[idx] =this.orderRow(this.rows[idx]);
    }

    this.tiles = move.reassembleTiles(this.rows, this.tiles);
    return this.tiles;
  },

  orderRow: function(row){

    for( var idx in row ){

      var next = (idx*1)+1;

      if ( idx != 5 && row[idx].value && !_.isUndefined(row[next]) && !row[next].value) {
        row[next].value = row[idx].value;
        row[idx].value = null;
      }
    }

    return row;
  }

}

var moveLeft = {

}