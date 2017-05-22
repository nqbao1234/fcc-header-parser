let express = require('express');
let app = express();
let request = require('request');
let util = require('util');

app.set('port', (process.env.PORT || 5000));

// app.set('views', __dirname + '/views');
// app.set('view engine', 'pug');

app.get('/', function(req, res) {
    // res.render('index');
    let req_full = util.inspect(req.body);
    let req_str = JSON.stringify(req_full);
    res.send(req_full);
    console.log(req_full);
});



// app.get('/:date_str', function (req, res) {
//     let api_ext = "https://timestamp-ms.herokuapp.com/";
//     let req_link = api_ext + req.params.date_str;
//     request(req_link, function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             res.end(body);
//         }
//     });
// });

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

