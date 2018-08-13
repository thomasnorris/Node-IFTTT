global.requireLocal = require('local-modules.js').GetModule;

(function() {
    var RestClient = require('node-rest-client').Client;
    var _client = new RestClient();

    // --Add key
    const KEY = requireLocal('ifttt-key.js').GetKey();
    var testRequest = new Request('test_event', 'test value 1', 'test value 1', 'test value 3');
    // _client.post(testRequest.Url, testRequest.Args, (data, res) => {

    // });

    function Request(eventName, val1, val2, val3) {
        this.EventName = eventName;
        this.Url = 'https://maker.ifttt.com/trigger/' + eventName + '/with/key/' + KEY;
        this.Args = {
            data: {
                'value1': val1,
                'value2': val2,
                'value3': val3
            },
            headers: {
                "Content-Type": "application/json"
            }
        };
    }
})();