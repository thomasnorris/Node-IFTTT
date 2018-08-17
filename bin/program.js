global.requireLocal = require('local-modules.js').GetModule;

(function() {
    var Request = requireLocal('request.js').Request;
    // 'test_event' is the IFTTT event name that will be triggered, the other parameters are optional
    var req = new Request('test_event', 'dummyVal1', 'dummyVal2', 'dummyVal3');
    
    // Send the request and handle the response
    req.Send((data, res) => {
        console.log(data, res);
    });
})();
