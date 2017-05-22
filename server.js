let express = require('express');
let app = express();
let request = require('request');

app.set('port', (process.env.PORT || 5000));

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render("index");
});

app.get('/api/whoami', function(req, res) {
    let ip = req.headers["x-forwarded-for"];
    let lang = req.headers["accept-language"].split(",")[0];
    let os = req.headers["user-agent"];
    os = os.substring(os.indexOf("(")+1, os.indexOf(")"));

    let result = {ipaddress: ip,
                  language: lang,
                  software: os};

    res.end(JSON.stringify(result));

});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

