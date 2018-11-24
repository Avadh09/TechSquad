module.exports.get_recommendation_page = function(req,res){
  res.render('recommend.hbs', {currentYear: new Date().getFullYear()});
}

module.exports.get_about_page = function(req,res){
  res.render('about.hbs', {currentYear: new Date().getFullYear()});
}

module.exports.get_company_page = function(req,res){
  res.render('company.hbs', {currentYear: new Date().getFullYear()});
}

module.exports.get_contact_page = function(req,res){
  res.render('contact.hbs', {currentYear: new Date().getFullYear()});
}

module.exports.get_home_page = function(req,res){
  res.render('home.hbs', {currentYear: new Date().getFullYear()});
}

module.exports.get_dashboard_page = function(req,res){
  res.render('dashboard.hbs', {currentYear: new Date().getFullYear()});
}
module.exports.get_talent_page = function(req,res){
  res.render('talent.hbs', {currentYear: new Date().getFullYear()});
}

module.exports.get_credits_page = function(req,res){
  res.render('credits.hbs', {currentYear: new Date().getFullYear()});
}

module.exports.get_jobs_page = function(req,res){
  res.render('jobs.hbs', {currentYear: new Date().getFullYear()});
}
module.exports.get_top_hotels_page = function(req,res){
  res.render('hchart.hbs', {currentYear: new Date().getFullYear()});
}
