var allowed_tokens = [
    'BxTEu',
    'Hfyrz',
    'rBxGp',
    'm6j0X',
    'VcOW4',
    'Eh73H',
    'pDrkC',
    'qDQgg',
    'gjc3b',
    'XrXJl',
    'Ku8Je',
    'I0FI8',
    'F9EVy',
    'G6fmN',
    'NBLkl',
    'tUTvv',
    'u41BS',
    '6wpUo',
    'H6JAF',
    'AqQ8Z',
    ];

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