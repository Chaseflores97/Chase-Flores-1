const functions = require("firebase-functions");
const mysql = require("mysql");

exports.getAllContacts = functions.https.onCall(async (body, context) => {
    // connect to the MYSQL database!
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        port: 8889,
        database: 'contact_manager_db'
    });

    const connectToMySQL = new Promise((accept, reject) => {
        // BLOCK START
        connection.connect(function (connectionError) {
            if (connectionError) {
                reject(); // calls the "catch"
            } else {
                accept(); // calls the "then"
            }
        });
        // BLOCK END
    });

    await connectToMySQL;

    // execute the query 

    
    const runQuery = new Promise((accept, reject) => {

    

        connection.query("SELECT * FROM contacts" , function (err, result, fields) {
            if (err) {
                reject();
            } else {
                accept(result);
            }
        });
    });

    const resultSet = await runQuery;

return resultSet;
    




});
exports.getContact = functions.https.onCall(async (payload, context) => {

    


    // connect to the MYSQL database!
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        port: 8889,
        database: 'contact_manager_db'
    });

    const connectToMySQL = new Promise((accept, reject) => {
        // BLOCK START
        connection.connect(function (connectionError) {
            if (connectionError) {
                reject(); // calls the "catch"
            } else {
                accept(); // calls the "then"
            }
        });
        // BLOCK END
    });

    await connectToMySQL;

    // execute the query
    const runQuery = new Promise((accept, reject) => {
        connection.query("SELECT * FROM contacts WHERE id = "+payload+"",function (err, result, fields) {
            if (err) {
                reject();
            } else {
                accept(result);
            }
        });
    });

    const resultSet = await runQuery;
    console.log(resultSet)
    return resultSet;


});


exports.createContact = functions.https.onCall(async (payload, context) => {
    console.log('Hello Chase we are in the backend');


    console.log(payload);


    // connect to the MYSQL database!
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        port: 8889,
        database: 'contact_manager_db'
    });

    console.log("after the connection object");

    const connectToMySQL = new Promise((accept, reject) => {
        // BLOCK START
        connection.connect(function (connectionError) {
            if (connectionError) {
                reject(); // calls the "catch"
            } else {
                accept(); // calls the "then"
            }
        });
        // BLOCK END
    });



    await connectToMySQL;

    console.log("conected to mysql");

    // execute the query
    const runQuery = new Promise((accept, reject) => {



        const sqlQuery = `
            INSERT INTO
             contacts (firstName, lastName, email, phone)
            VALUES ("${payload.firstN}", "${payload.lastName}", "${payload.emailInfo}", "${payload.phoneInfo}") 
        `;

        console.log(sqlQuery);


        connection.query(sqlQuery,
            function (err, result, fields) {
                if (err) {
                    reject();
                } else {
                    accept(result);
                }
            });
    });

    const resultSet = await runQuery;

    return resultSet;



});