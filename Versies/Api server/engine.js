


const CreateEngine = class Engine {

    constructor( ) {
        console.log('Engine started!');
        this.https = require('https');
        this.restart();
    }

    restart() {
        console.log('Restart');


        this.fs = require('fs');
        this.mysql = require('mysql');

        this.updateApiList();
    }

    updateApiList() {
        console.log('Update api list');



        this.dbCon = this.mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "apiserver"
        });




        this.options = {
            host: 'www.cryptocompare.com',
            port: '',
            path: '/api/data/coinlist',
            method: 'GET'
        };

        this.dbCon.connect( (err) => {

            if (err) throw err;
            this.dbCon.query("SELECT * FROM apilist", function (err, result) {
                if (err) throw err;
                console.log(result);

            });

            this.dbCon.end();

        });


    }

    routine() {

        var responseBody = "";

        const req = this.https.request(this.options, (res) => {

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
                this.fs.writeFile("apirequest.json", JSON.stringify(parsed, null, '\t'), 'utf8', function (err) {
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

};


let engine = new CreateEngine();


module.exports.routine          = engine.routine;
module.exports.restart          = engine.restart;
module.exports.updateApiList    = engine.updateApiList;