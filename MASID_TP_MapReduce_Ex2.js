 /***************** Question 1 *******************/

exo2q1map = function () {
            if (this.pop >= 100000)
            emit(this.city, this.pop) ;
            }

exo2q1red = function(key, values) {
            return {key: values};
            };

db.zips.mapReduce(exo2q1map, exo2q1red, { out : "exo2q1"});
db.exo2q1.find()




/***************** Question 2 *******************/

exo2q2map = function () {
            emit(this.city, this.pop) ;
            }

exo2q2red = function(key, values) {
            return {key: values};
            };

db.zips.mapReduce(exo2q2map, exo2q2red,
            {out: 'exo2q2', query: {pop: { $gte : 100000}}});
db.exo2q2.find()


/* La deuxième solution est à priviégier car il effectue moins de recherche*/





/***************** Question 3 *******************/
    /* La population totale de chaque état */

exo2q3map = function() {
            emit(this.state, this.pop) ;
            }
exo2q3red = function(key, values) {
            return Array.sum(values);
            };

db.zips.mapReduce(exo2q3map, exo2q3red, { out: "exo2q3"});
db.exo2q3.find()
