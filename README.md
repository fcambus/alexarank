## Description

A simple node package to get Alexa traffic rank for a domain or URL.

This package is now deprecated, Alexa will be [retired][1] on May 1, 2022.

## Installation

Install the module:

	npm install -g alexarank


## Usage example

Using the module is pretty straightforward:

	var alexa = require('alexarank');

	alexa("http://www.echojs.com/", function(error, result) {
	    if (!error) {
	        console.log(JSON.stringify(result));
	    } else {
	        console.log(error);
	    }
	});


## CLI tool

There is a bundled `alexarank` CLI tool:

	USAGE   : alexarank domain

	EXAMPLES: alexarank http://www.echojs.com
	          alexarank echojs.com

## License

alexarank is released under the BSD 2-Clause license. See `LICENSE` file for
details.

## Author

alexarank is developed by Frederic Cambus.

- Site: https://www.cambus.net

[1]: https://support.alexa.com/hc/en-us/articles/4410503838999
