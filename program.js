global.requireLocal = require('local-modules.js').GetModule;

(function() {
    var Request = requireLocal('request.js').Request;

    new Request('test_event', 'new val 1', 'something', 'hi mom').Post();
})();