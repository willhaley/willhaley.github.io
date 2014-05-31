'use strict';

var boardConsolidate = {

  values: null,

  init: function(values){

    this.values = values;

    this.combine();
    //this.move();

    return this.values;

  },

  combine: function(){

    var values = this.values;

    if ( values.length < 2 ){
      return values;
    }

    var skip = null;

    for( var i in values ) {

      if ( i == skip ){
        skip = null;
        continue;
      }

      if ( values[i] == values[i*1+1] ){
        values[i*1+1] = values[i]*2;
        values[i] = '';
        skip = i*1+1;
      }

    }

    this.values = values;
  },

  move: function(){

  }

}

