'use strict';

var moveRight = {

  tiles: [],
  rows: {},

  init: function(tiles){

    this.rows =  _.groupBy(tiles, 'row');

    for ( var idx in this.rows ){
      this.rows[idx] =this.orderRow(this.rows[idx]);
    }

     this.reassembleTiles();
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
  },

  reassembleTiles: function(){


    var idx = 0;
    _.forEach(this.rows, function(row){
      _.forEach(row, function(cell){
        this.tiles[idx] = cell;
        idx++;
      }, this);
    }, this);

  }

}