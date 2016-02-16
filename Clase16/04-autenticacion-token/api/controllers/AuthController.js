
var passport = require('passport');

function verificarAuth(req, res, error, user, info) {
  if (error) return res.serverError(error);
  if (!user) return res.forbidden();
 
  return res.ok({
    token: CipherService.createToken(user),
    user: user
  });
}
 
module.exports = {
  registrar: function (req, res) {
    User
      .create(_.omit(req.allParams(), 'id'))
      .then(function (user) {
        return {
          token: CipherService.createToken(user),
          user: user
        };
      })
      .then(res.created)
      .catch(res.serverError);
  },
 
  login: function (req, res) {
    passport.authenticate('local', 
      verificarAuth.bind(this, req, res))(req, res);
  },
};