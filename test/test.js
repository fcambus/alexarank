var alexa = require('../lib/alexarank');
var should = require('should');

describe('alexarank', function() {
    it('Should return an object with correct elements types', function(done) {
        alexa("http://www.echojs.com", function(error, result) {
            should.not.exist(error);

            result.should.be.an.Object;

            result.url.should.equal('echojs.com/');
            result.idn.should.equal('echojs.com/');

            parseInt(result.rank).should.be.a.Number;
            parseInt(result.reach).should.be.a.Number;

            done();
        });
    });
});
