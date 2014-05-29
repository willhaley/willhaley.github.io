'use strict';

var move = {

  somethingMoved: false,
  rows: null,
  right: function(tiles){

    this.rows =  _.groupBy(tiles, 'row');

    for ( var idx in this.rows ){

      var values = _.pluck(this.rows[idx], 'value');
      values = this.consolidate( _.filter(values, function(value){ return (value)}) );

      var i = 4;
      while(i>=0){
        this.rows[idx][i].value =  _(values).pop();
        i--;
      }

    }

    return this.reassemble(this.rows, tiles);

  },

  left: function(tiles){

    this.rows =  _.groupBy(tiles, 'row');

    for ( var idx in this.rows ){

      var values = _.pluck(this.rows[idx], 'value');
      values = this.consolidate( _.filter(values, function(value){ return (value)}).reverse() );

      var i = 0;
      while(i<5){
        this.rows[idx][i].value =  _(values).pop();
        i++;
      }

    }

    return this.reassemble(this.rows, tiles);

  },

  up: function(tiles){

    this.rows =  _.groupBy(tiles, 'column');

    for ( var idx in this.rows ) {

      var values = _.pluck(this.rows[idx], 'value');
      values = this.consolidate( _.filter(values, function (value) { return (value) }).reverse() );

      var i = 0;
      while (i < 5) {
        this.rows[idx][i].value = _(values).pop();
        i++;
      }
    }
    return this.reassemble(this.rows, tiles);
  },

  down: function(tiles){

    this.rows =  _.groupBy(tiles, 'column');

    for ( var idx in this.rows ){

      var values = _.pluck(this.rows[idx], 'value');
      values = this.consolidate( _.filter(values, function(value){ return (value)}) );

      var i = 4;
      while(i>=0){
        this.rows[idx][i].value =  _(values).pop();
        i--;
      }

    }

    return this.reassemble(this.rows, tiles);

  },

  reassemble: function(rows, tiles){

    var idx = 0;
    _.forEach(rows, function(row){
      _.forEach(row, function(cell){ tiles[idx] = cell; idx++; }, this);
    }, this);

    return tiles;
  },

  consolidate: function(values){

    if ( values.length < 2 ){
      return values;
    }
    for( var i in values ) {
      if ( values[i] == values[i*1+1] ){
        values[i*1+1] = values[i]*2;
        values[i] = null;
      }
    }
    return values;
  }

};

