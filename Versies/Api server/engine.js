
const https = require('https');
const fs = require('fs');
const mysql = require('mysql');



const CreateEngine = class Engine {


    constructor( ) {
        console.log('Engine started!');

        this.initalize();
    }

    initalize() {
        console.log('Initializing');

        //this.mysql = mysql;
        this.dbCon = mysql.createConnection({
            host: "localhost",
            user: "yourusername",
            password: "yourpassword"
        });

        this.options = {
            host: 'www.cryptocompare.com',
            port: '',
            path: '/api/data/coinlist',
            method: 'GET',
        };
    }

    updateCoinInfo() {

    }

    getCoinInfo() {
        console.log(this.dbCon);



        var responseBody = "";



        const req = https.request(options, (res) => {

                //console.log('\x1b[32m Response from server started. \x1b[37m');
                //console.log('\x1b[32m Server status: \x1b[37m', res.statusCode);
                //console.log('\x1b[32m Response headers: \x1b[37m    \n', res.headers);

                res.setEncoding("UTF-8");

        res.on('data', (datachunk) => {

            responseBody += datachunk;
        //process.stdout.write(datachunk);
    });

        //console.log(this.fs);



        res.on("end", () => {

            //this.fs.writeFile('test.txt', 'test');

            //console.log(this.constructor.https);

            var parsed = JSON.parse(responseBody);
        fs.writeFile("apirequest.json", JSON.stringify(parsed, null, '\t'), 'utf8', function (err) {
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
    }

}


let program = new CreateEngine();

program.getCoinInfo();