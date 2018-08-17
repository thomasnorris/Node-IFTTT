global.requireLocal = require('local-modules.js').GetModule;

(function() {
    var Request = requireLocal('request.js').Request;
    // 'test_event' is the IFTTT event name that will be triggered, the other parameters are optional and correspond to Value1, Value2, Value3 within the IFTTT Webhook
    var req = new Request('test_event', 'dummyValue1', 'dummyValue2', 'dummyValue3');

    // Send the request and handle the response
    req.Send((data, res) => {
        console.log(data, res);
    });
})();
