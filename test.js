var postcss = require('postcss');
var expect = require('chai').expect;
var process = require('./');

function test(input, output, done) {
	postcss([process()]).process(input).then(function (result) {
		expect(result.css).to.eql(output);
		if (done) {
			done();
		}
	}).catch(function(error) {
		if (done) {
			done(error);
		}
	})
}

describe('Remove all styles', function() {
	it('Should remove all properties for -webkit-scrollbar', function(done) {
		var input = 'body ::-webkit-scrollbar {-webkit-appearance: none; width: 10px;}'
		var output = 'body ::-webkit-scrollbar {-webkit-appearance: ; width: ;}'
		test(input, output, done);
	});
	it('Should remove all properties for -webkit-scrollbar-track', function(done) {
		var input = 'body ::-webkit-scrollbar-track {background: rgba(0, 0, 0, 0.1); border-radius: 0px;}'
		var output = 'body ::-webkit-scrollbar-track {background: ; border-radius: ;}'
		test(input, output, done);
	})
	it('Should remove all properties for -webkit-scrollbar-thumb', function(done) {
		var input = 'body ::-webkit-scrollbar-thumb {cursor: pointer; border-radius: 5px; background: rgba(0, 0, 0, 0.25); -webkit-transition: color 0.2s ease; transition: color 0.2s ease;}'
		var output = 'body ::-webkit-scrollbar-thumb {cursor: ; border-radius: ; background: ; -webkit-transition: ; transition: ;}'
		test(input, output, done);
	})
})