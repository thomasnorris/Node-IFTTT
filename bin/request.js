
var _client = require('node-rest-client').Client;
const IFTTT_KEY = requireLocal('ifttt-key.js').GetKey();

class Request {
    constructor(eventName, val1 = '', val2 = '', val3 = '') {
        this.Client = new _client();
        this.EventName = eventName;
        this.Url = 'https://maker.ifttt.com/trigger/' + eventName + '/with/key/' + IFTTT_KEY;
        this.Args = {
            data: {
                'value1': val1,
                'value2': val2,
                'value3': val3
            },
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }

    // --A POST vs GET does not matter since IFTTT only looks for the Event Name on any request
    Send(callback) {
        this.Client.post(this.Url, this.Args, (data, res) => {
            callback(data, res);
        });
    }
}

module.exports.Request = Request;