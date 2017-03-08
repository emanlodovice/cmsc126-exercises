var assert = chai.assert;

var testCases = [
    {
        uri: 'http://www.sample.com',
        parts: {
            scheme: 'http',
            authority: 'www.sample.com',
            path: '',
            query: '',
            fragment: ''
        }
    },
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
    {
        uri: 'https://tools.ietf.org/html/rfc3986#section-3',
        parts: {
            scheme: 'https',
            authority: 'tools.ietf.org',
            path: '/html/rfc3986',
            query: '',
            fragment: 'section-3'
        }
    },
    {
        uri: 'file://user:pass@host.com:9000/index.html#section-3?test=1',
        parts: {
            scheme: 'file',
            authority: 'user:pass@host.com:9000',
            path: '/index.html',
            query: '',
            fragment: 'section-3?test=1'
        }
    },
    {
        uri: 'mailto:sample@example.com',
        parts: {
            scheme: 'mailto',
            authority: '',
            path: 'sample@example.com',
            query: '',
            fragment: ''
        }
    },
    {
        uri: 'http://ex.sample.com?data=1#section-3',
        parts: {
            scheme: 'http',
            authority: 'ex.sample.com',
            path: '',
            query: 'data=1',
            fragment: 'section-3'
        }
    },

    {
        uri: 'http://www.ex.sample.com?data=1?/&g=1#section-3?c=1',
        parts: {
            scheme: 'http',
            authority: 'www.ex.sample.com',
            path: '',
            query: 'data=1?/&g=1',
            fragment: 'section-3?c=1'
        }
    },
    {
        uri: 'http://www.ex.sample.com/tester/?data=1?/&g=1#section-3?c=1',
        parts: {
            scheme: 'http',
            authority: 'www.ex.sample.com',
            path: '/tester/',
            query: 'data=1?/&g=1',
            fragment: 'section-3?c=1'
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