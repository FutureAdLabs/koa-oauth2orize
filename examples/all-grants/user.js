/**
 * Module dependencies.
 */
var passport = require("koa-passport")
    , compose = require("koa-compose");

exports.info = compose([
  passport.authenticate("bearer", { session: false }),
  function*() {
    // this.authInfo is set using the `info` argument supplied by
    // `BearerStrategy`.  It is typically used to indicate scope of the token,
    // and used in access control checks.  For illustrative purposes, this
    // example simply returns the scope in the response.
    this.body = { "user_id": this.req.user.id, name: this.req.user.name, scope: this.passport.authInfo.scope };
  }
]);
