    /***************** Question 1 ********************/

exo1q1map = function() { emit('nb_doc', 1); };

exo1q1red = function( key, values ) {
            count = 0;
            for (let index = 0; index < values.length; ++index) {
            count += values[index];
            };
            return count;
            };

db.zips.mapReduce(exo1q1map, exo1q1red, { out: "exo1q1"});
db.exo1q1.find()



      /***************** Question 2 ********************/

exo1q2red = function(key, values) {
            var reducer = (accumulator, currentValue) => accumulator + currentValue;
            return values.reduce(reducer);
            };

db.zips.mapReduce(exo1q1map, exo1q2red, { out: "exo1q2"});
db.exo1q2.find()



      /***************** Question 3 **********************/

exo1q3red = function( key, values ) {
            var count = 0;
            values.forEach(function(v) {
            count +=v;
            });
            return count;
            };

db.zips.mapReduce(exo1q1map, exo1q3red, { out: "exo1q3"});
db.exo1q3.find()
