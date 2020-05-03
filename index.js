var express = require('express');
var app = express();
var path = require('path');
var cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');
app.use(cors());
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/static', express.static(path.join(__dirname, 'static')))


app.get('/campaign/active/:id', function (req, res) {
    res.sendFile(path.join(__dirname + '/campaigndata.json'));
});

app.get('/user/:userid', function (req, res) {
    res.json(
        [{
            1: {
                1: [
                    {1: 99},
                    {2: 90.92}
                ],
                2: [
                    {4: 90.92},
                    {3: 20.2},
                ]
            }
          }
        ]
    )
});

// app.get('/', function (req, res) {
//     axios.get('https://elpais.com/').then(response => {
//         const $ = cheerio.load(response.data);
//         $('head').append(`<script type="text/javascript" src="/static/bcio-client.js" ></script>`)
//         $('head').append(`<script type="text/javascript" src="/static/bcio-config.js" defer></script>`)
//         res.send($.html());
//     })
// });

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/static/index_smoda.htm'))
})


app.listen(8000);