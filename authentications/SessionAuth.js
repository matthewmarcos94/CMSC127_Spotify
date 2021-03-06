/*
  SessionAuth
  - Responsible for checking sessions
*/

exports.isNotLoggedIn = function(req, res, next){
  if(!req.session.user) {
    console.log("Not logged in!");
    next();
  } else { 
    console.log("logged in!");

    res.redirect('/home');
  }
};


exports.isLoggedInPage = function(req, res, next){
  if(!!req.session.user) {
    console.log("logged in!");
    next();
  } else {
      console.log("not logged in!");
      res.redirect('/');
  }
};


exports.isLoggedIn = function(req, res, next){
  // Kailangan approved account
  if(!!req.session.user && !!req.session.user.isapproved) next();
  else res.sendStatus(403);
};


// Checks if isAdmin variable in session is true
exports.isAdmin = function(req, res, next){
  if(!!req.session.user && !!req.session.user.isadmin) next();
  else res.sendStatus(403 + ': Log in as admin first');
};
