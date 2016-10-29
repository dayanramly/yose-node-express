primeFactorsOf = function(number) {
	//console.log(number);
	number = Math.floor(number);
    var root, factors = [], x, sqrt = Math.sqrt, doLoop = 1 < number;
    while( doLoop ){
        root = sqrt(number);
        x = 2;
        if (number % x) {
            x = 3;
            while ((number % x) && ((x += 2) < root));
        }
        x = (x > root) ? number : x;
        factors.push(x);
        doLoop = ( x != number );
        number /= x;
    	}
    	console.log(factors);
    return factors;
};

module.exports = primeFactorsOf;