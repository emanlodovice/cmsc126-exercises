var assert = chai.assert;

var testCases = [
    {
        uri: 'http://www.sample.com/?test=1#id',
        parts: {
            scheme: 'http',
            authority: 'www.sample.com',
            path: '/',
            query: 'test=1',
            fragment: 'id'
        }
    },
    {
        uri: 'https://localhost:8000/index.html',
        parts: {
            scheme: 'https',
            authority: 'localhost:8000',
            path: '/index.html',
            query: '',
            fragment: ''
        }
    },
    {
        uri: 'awesome://cmsc126@up.com:80?cool=1#yes?no=1',
        parts: {
            scheme: 'awesome',
            authority: 'cmsc126@up.com:80',
            path: '',
            query: 'cool=1',
            fragment: 'yes?no=1'
        }
    },
]

testCases.forEach(function(testCase) {
    describe('parse url ' + testCase.uri, function() {
        var result = parseUri(testCase.uri);
        it('should parse scheme ' + testCase.parts.scheme, function() {
            assert.equal(result.scheme, testCase.parts.scheme);
        });

        it('should parse authority ' + testCase.parts.authority, function() {
            assert.equal(result.authority, testCase.parts.authority);
        });

        it('should parse path ' + testCase.parts.path, function() {
            assert.equal(result.path, testCase.parts.path);
        });

        it('should parse query ' + testCase.parts.query, function() {
            assert.equal(result.query, testCase.parts.query);
        });

        it('should parse fragment ' + testCase.parts.fragment, function() {
            assert.equal(result.fragment, testCase.parts.fragment);
        });
    });
});