
const https = require("https");
const fs = require("fs");

const options = {
    host: 'www.cryptocompare.com',
    port: '',
    path: '/api/data/coinlist',
    method: 'GET',
};


var responseBody = "";

const req = https.request(options, (res) => {



    console.log('\x1b[32m Response from server started. \x1b[37m');
    console.log('\x1b[32m Server status: \x1b[37m', res.statusCode);
    console.log('\x1b[32m Response headers: \x1b[37m    \n', res.headers);

    res.setEncoding("UTF-8");

    res.on('data', (datachunk) => {

        responseBody += datachunk;
        //process.stdout.write(datachunk);
    });


    res.on("end", function () {
        fs.writeFile("george-washington.html", responseBody, function (err) {
            if (err) {
                console.error(err);
            }
            console.log("File Downloaded");
        });
    });

});

/*req.on('error', (e) => {
    console.error(e);
});*/

req.end();

var profitability =





