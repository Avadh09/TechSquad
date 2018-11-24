module.exports.get_addCompanies = function(req, res){
//Monk commands
//use companyDB
//db.dropDatabase()
//show collections
//db.company.find().pretty()
    var jsonData = require('../companies_test5.json');
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbase = db.db("companyDB");
        dbase.createCollection("company", function(err, res) {
            if (err) throw err;
            console.log("Collection created!");
            dbase.collection("company").insertMany(jsonData, function (err, result) {
                if (err) throw err;
                console.log("Companies Inserted");
            });

        });
    });

    res.send('Successfully inserted company data into companyDB database');
};

module.exports.post_recommendation = function(req, res){

  var db = req.db;
  var collection = db.get('company');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("companyDB");
  dbo.collection("company").find({}, {}).toArray(function(err, companies) {
    if (err) throw err;

    db.close();

for (var i= 0; i < companies.length; i++) {

  var count = 0;
  // Create a new column called c_rating
  companies[i]["c_rating"] = 0;

  recommendation = "Personnalized Options: ";

  if (req.body.small == "1") {
    companies[i]["c_rating"] += companies[i]["small"];
    recommendation = recommendation + " Less than 1000 employees; "
    count += 1;
  }

  if (req.body.large == "1") {
    companies[i]["c_rating"] += companies[i]["Large"];
    recommendation = recommendation + " Above 1000 employees; "
    count += 1;
  }

  if (req.body.it_industry == "1") {
    companies[i]["c_rating"] += companies[i]["it_industry"];
    recommendation = recommendation + " Industry must be IT; "
    count += 1;
  }

  if (req.body.benefits == "1") {
    companies[i]["c_rating"] += companies[i]["benefits"];
    recommendation = recommendation + " Great benefits; "
    count += 1;
  }

  if (req.body.daycare == "1") {
    companies[i]["c_rating"] += companies[i]["daycare"];
      recommendation = recommendation + " Daycare on campus; "
    count += 1;
  }

  if (req.body.reputation == "1") {
    companies[i]["c_rating"] += companies[i]["reputation"];
      recommendation = recommendation + " Rated highly by employees; "
    count += 1;
  }

  if (req.body.opportunities == "1") {
    companies[i]["c_rating"] += companies[i]["opportunities"];
      recommendation = recommendation + " Career growth/opportunities; "
    count += 1;
  }

  if (count != 0) {
    companies[i]["c_rating"] /= count;
  }
}

// racCompanies = a new array of reccomended companies since we are slicing. We want the last 5 in
// descending order because the highest numbers are at the buttom. Therefore -5.

var racCompanies = companies.sort(function(a,b) {return a["c_rating"] - b["c_rating"]}).slice(-3);

racCompanies.reverse();

    res.render('displayRecommendations.hbs', {

        pageTitle: "Top 3 recommendations",
        recommendation: recommendation,
        docs: racCompanies,
        currentYear: new Date().getFullYear()
    })


  });
});

};
