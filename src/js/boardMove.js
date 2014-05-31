'use strict';
/**
 * @todo Need to break apart the consolidate into two function.  FIRST combine the like adjacent tiles THEN move the files over into blank tile cells.
 * @type {{somethingMoved: boolean, rows: null, right: Function, left: Function, up: Function, down: Function, reassemble: Function, consolidate: Function}}
 */
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

  /**
   * @todo put the numbers together in an order based on the direction.  up needs to be opposite of down, etc...
   * @param values
   * @returns {*}
   */
  consolidate: function(values){

    return boardConsolidate.init(values);

  }

};

