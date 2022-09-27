var allowed_tokens = ['hcd', 'ide', 'tud', 'ams', 'test', 'booster', 'derek', 'milo', 'mia', 'julika', 'erik', 'willem', 'caiseal', 'pj', 'aadjan', 'iaonnis', 'jmck', 'vcow4', 'xrxjl', 'bxteu'];

exports.handler = async event => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 501,
            body: 'GET NOT ALLOWED HERE',
            headers: {'content-type': 'application/json', 'Allow': 'POST'}
        }
    }
    if (event.body) {
        var body = JSON.parse(event.body); 
        var user_token = body.user_token; // the "user_token" field is to be sent from frontend, mymainscript.js
    }


    const check_result = allowed_tokens.some(element => {
    return element.toLowerCase() === user_token.toLowerCase();});

    if (check_result)
    {
        return {
            statusCode: 200,
            body: "AUTH_SUCCESS"
        }
    }
    else
    {
        return {
            statusCode: 488,
            body: "AUTH_FAILURE"
        }
    }
}