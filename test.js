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

describe('Remove all webkit scrollbar styles', function() {
	it('Should remove all properties for -webkit-scrollbar', function(done) {
		var input = 'body ::-webkit-scrollbar {-webkit-appearance: none; width: 10px;}';
		var output = 'body ::-webkit-scrollbar {}';
		test(input, output, done);
	});
	it('Should remove all properties for -webkit-scrollbar-button', function(done) {
		var input = 'body::-webkit-scrollbar-button {background-color: red;}';
		var output = 'body::-webkit-scrollbar-button {}';
		test(input, output, done);
	});
	it('Should remove all properties for -webkit-scrollbar-track', function(done) {
		var input = 'body ::-webkit-scrollbar-track {background: rgba(0, 0, 0, 0.1); border-radius: 0px;}';
		var output = 'body ::-webkit-scrollbar-track {}';
		test(input, output, done);
	});
	it('Should remove all properties for -webkit-scrollbar-track-piece', function(done) {
		var input = 'body ::-webkit-scrollbar-track-piece {background: rgba(0, 0, 0, 0.1); border-radius: 0px;}';
		var output = 'body ::-webkit-scrollbar-track-piece {}';
		test(input, output, done);
	});
	it('Should remove all properties for -webkit-scrollbar-thumb', function(done) {
		var input = 'body ::-webkit-scrollbar-thumb {cursor: pointer; border-radius: 5px; background: rgba(0, 0, 0, 0.25); -webkit-transition: color 0.2s ease; transition: color 0.2s ease;}';
		var output = 'body ::-webkit-scrollbar-thumb {}';
		test(input, output, done);
	});
	it('Should remove all properties for -webkit-scrollbar-corner', function(done) {
		var input = 'body ::-webkit-scrollbar-corner {border-radius: 5px;}';
		var output = 'body ::-webkit-scrollbar-corner {}';
		test(input, output, done);
	});
});

describe('Leave other styled untouched', function() {
	it('Should not remove styles not relating to the scrollbar when using an element selector', function(done) {
		var input = 'body {background-color: green;}';
		test(input, input, done);
	});
	it('Should not remove styles not relating to the scrollbar when using a class selector', function(done) {
		var input = '.myClass {border-radius: 10px;}';
		test(input, input, done);
	});
});