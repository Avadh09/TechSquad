
var express = require('express');
let app = express();
var router = express.Router();
var cntrMain = require('../controllers/main');

app.use(express.static(__dirname+'/public'));

//MongoDB code
var modelMain = require("../models/modelMain");
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/hotelDB');

//MongoDB code
app.use(function(req, res, next)
{
    req.db = db;
    next();
});

router.get('/addCompanies', modelMain.get_addCompanies);
router.get('/recommend', cntrMain.get_recommendation_page);
router.get('/', cntrMain.get_home_page);
router.get('/dashboard', cntrMain.get_dashboard_page);
router.get('/talent', cntrMain.get_talent_page);
router.post('/get_recommendation', modelMain.post_recommendation);
router.get('/company', cntrMain.get_company_page);
router.get('/contact', cntrMain.get_contact_page);
router.get('/credits', cntrMain.get_credits_page);
router.get('/jobs', cntrMain.get_jobs_page);
router.get('/topHotels', cntrMain.get_top_hotels_page);

router.get('/about', cntrMain.get_about_page);

module.exports = router;
