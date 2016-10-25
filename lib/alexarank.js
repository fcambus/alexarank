'use strict';

/*****************************************************************************/
/*                                                                           */
/* alexarank 0.2.0                                                           */
/* Copyright (c) 2013-2016, Frederic Cambus                                  */
/* https://github.com/fcambus/alexarank                                      */
/*                                                                           */
/* Created: 2013-12-14                                                       */
/* Last Updated: 2016-10-25                                                  */
/*                                                                           */
/* alexarank is released under the BSD 2-Clause license.                     */
/* See LICENSE file for details.                                             */
/*                                                                           */
/*****************************************************************************/

require('es6-promise').polyfill();
var fetch = require('isomorphic-fetch');
var xml2js = require('xml2js');

module.exports = function(url, callback) {
	fetch('https://data.alexa.com/data?cli=10&url=' + encodeURIComponent(url))
	.then(function (res) {
		return res.text();
	})
	.then(function (body) {
		xml2js.parseString(body, {
			normalizeTags: true,
			explicitArray: false
		}, function(error, result) {
			if (error) {
				callback(new Error('Cannot parse Alexa API Data'));
			} else {
				var alexa = {};

				alexa.url = result.alexa.$.URL;
				alexa.idn = result.alexa.$.IDN;

				if (typeof result.alexa.sd != "undefined") {
					alexa.rank = result.alexa.sd.popularity.$.TEXT;
					alexa.reach = result.alexa.sd.reach.$.RANK;
				}

				callback(null, alexa);
			}
		});
	})
	.catch(function (err) {
		callback(err);
	});
};
