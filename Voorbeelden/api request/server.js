
const https = require("https");
const fs = require("fs");

const options = {
    hostname: "https://en.wikipedia.org/",
    port: 443,
    path: "w/api/Elon_Musk",
    method: "GET"
};

/*
const req = https.request(options, (res) => {

    const responseBody = "";

    console.log('\x1b[32m Response from server started. \x1b[37m');
    console.log('\x1b[32m Server status: \x1b[37m', res.statusCode);
    console.log('\x1b[32m Response headers: \x1b[37m    \n', res.headers);

    //res.setEncoding("UTF-8");

    res.on('data', (datachunk) => {
        //console.log(datachunk);
        process.stdout.write(datachunk);
    });

    res.on("end", function () {
        fs.writeFile("george-washington.html", responseBody, function (err) {
            if (err) {
                throw err;
            }
            console.log("File Downloaded");
        });
    });
});*/




const req = https.request(options, (res) => {

    var responseBody = "";

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