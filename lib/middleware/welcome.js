var helpers = require("./util/helpers.js");
const cred = require("./../mods/accounts");

module.exports = function(req, next) {
  // case when user hasn't logged in
  if (req.creds == null) {
    helpers.trunc(
      (req.config.name || "Mercury").red +
        " powered by ".grey +
        req.config.platform.red +
        " modded by ".grey +
        "Yash Kumar Verma ".red
    );

    req.cred = cred;
    // force a new user
  }
  return next();
};
