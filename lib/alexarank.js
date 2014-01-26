/*****************************************************************************/
/*                                                                           */
/* alexarank 0.1.1 (c) by Frederic Cambus 2013-2014                          */
/* https://github.com/fcambus/alexarank                                      */
/*                                                                           */
/* Created: 2013/12/14                                                       */
/* Last Updated: 2014/01/27                                                  */
/*                                                                           */
/* alexarank is released under the BSD 2-Clause license.                     */
/* See LICENSE file for details.                                             */
/*                                                                           */
/*****************************************************************************/

var request = require('request');
var xml2js = require('xml2js');

module.exports = function(url, callback) {
    request('http://data.alexa.com/data?cli=10&url=' + url, function(error, response, body) {
        if (error) {
            callback(new Error('Cannot reach Alexa API'));
        } else if (response.statusCode != 200) {
            callback(new Error('Cannot fetch Alexa API Data'));
        } else {
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
        }
    });
};
