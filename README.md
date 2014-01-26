# alexarank [![Build Status](https://travis-ci.org/fcambus/alexarank.png?branch=master)](https://travis-ci.org/fcambus/alexarank)

## Description

A simple node package to get Alexa traffic rank for a domain or URL.

## Installation

Install the module :

	npm install -g alexarank


## Usage example

Using the module is pretty straightforward :

	var alexa = require('alexarank');

	alexa("http://www.echojs.com/", function(error, result) {
	    if (!error) {
	        console.log(JSON.stringify(result));
	    } else {
	        console.log(error);
	    }
	});


## CLI tool

There is a bundled `alexarank` CLI tool : 

	USAGE    : alexarank domain

	EXAMPLES : alexarank http://www.echojs.com
	           alexarank echojs.com

## License

alexarank is released under the BSD 2-Clause license. See `LICENSE` file for details.

## Author

alexarank is developed by Frederic Cambus

- Site : http://www.cambus.net
- Twitter: http://twitter.com/fcambus
