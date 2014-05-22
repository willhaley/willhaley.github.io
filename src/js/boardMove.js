'use strict';

var move = {

  rows: null,

  right: function(tiles){

    var rows =  _.groupBy(tiles, 'row');

    for ( var idx in rows ){
      rows[idx]=this.orderRight(rows[idx]);
    }

    return this.reassemble(rows, tiles);

  },

  left: function(tiles){

    this.rows = _.groupBy(tiles, 'row');

    for ( var idx in  this.rows ){

      this.rows[idx] = this.orderLeft( this.rows[idx], idx);
    }

    return this.reassemble(this.rows, tiles);

  },

  up: function(tiles){},
  down: function(tiles){},

  reassemble: function(rows, tiles){

    var idx = 0;
    _.forEach(rows, function(row){
      _.forEach(row, function(cell){ tiles[idx] = cell; idx++; }, this);
    }, this);

    return tiles;
  },

  orderRight: function(row){

    for( var idx in row ){

      var next = (idx*1)+1;

      if ( idx != 5 && row[idx].value && !_.isUndefined(row[next]) && !row[next].value) {
        row[next].value = row[idx].value;
        row[idx].value = null;
      }
    }

    return row;
  },

  orderLeft: function(row, i){

    _.forEachRight(row, function(obj){

      if ( obj.column != 1 && obj.value ){

        var idx = _.indexOf(row, obj);
        var nextIdx = idx - 1;

        if ( !row[nextIdx].value ){
          this.rows[i][nextIdx].value = obj.value;
          this.rows[i][idx].value = null;
        }

      }

    });
    return;
  }

};

