var primeFactorsOf = require('./lib/prime.factors.of');

var primeFactors = function(request, response) {
    
	var number = request.query['number'];

    if(isNaN(number))
    {
    	var result = { number: number, error: 'not a number' };

    } else if(number > 1000000) {

    	var result = { number: parseInt(number), error: 'too big number (>1e6)' };

    } else {

    	var number = parseInt(number);
    	var decomposition = primeFactorsOf(number);
    	var result = { number: number, decomposition: decomposition };
    }

    	response.setHeader('Content-Type', 'application/json');
	    response.send(JSON.stringify(result));
};

module.exports = primeFactors;