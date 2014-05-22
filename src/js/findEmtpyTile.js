'use strict';

var populatEmptyTitle = {

  init: function (tiles) {

    var filteredTiles = _.filter(tiles, function(obj) { return ! obj.value; });
    var randomTile = _.sample(filteredTiles, 1);
    var newNumber = _.random(1,2) * 2;
    var idx = _.indexOf(tiles, randomTile[0]);
    tiles[idx].value = newNumber;

    return tiles;

  }

}