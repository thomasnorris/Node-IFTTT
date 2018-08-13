global.requireLocal = require('local-modules.js').GetModule;

(function() {
    var Request = requireLocal('request.js').Request;
    // 'test_event' just sends an email with the params
    var req = new Request('test_event', 'new val 1', 'something', 'hi mom');

    req.Post((data, res) => {
        console.log(data, res);
    });
})();