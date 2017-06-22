(function() {

    var MINIMUM_SIZE = 1.0;

    var MAXIMUM_SIZE = 6.0;


    // Return a random number between `low` (inclusive) and `high` (exclusive)

    function randFloat(low, high) {

        return low + Math.random() * (high - low);

    }


    var self = this;

    this.preload = function(entityID) {

        self.intervalID = Script.setInterval(function() {
        	
        	var randNum = randFloat(MINIMUM_SIZE, MAXIMUM_SIZE)

            Entities.editEntity(entityID, {

                dimensions: {x: randNum, y: randNum, z: randNum}

            });

        }, 100);

    };

    this.unload = function() {

        Script.clearInterval(self.intervalID);

    }

});