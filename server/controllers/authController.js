const passport = require("passport");

module.exports = {

    register: function(req, res){
        console.log("register route hit");
        passport.authenticate("register", {session: false}), async (req, res, next) => {
            res.json({message: "register successful",
                      user: req.user})
        };
    },

    logIn: function(req, res){

        passport.authenticate('local-signin', {successRedirect: "/", failureRedirect: "/"})
    },

    logOut: function(req, res){

        req.session.destroy(function(err){

            res.redirect("/");
        })
    }
}