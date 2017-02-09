/*global Proxy */

module.exports = function(ctx) {
  
  //delegate all read to `ctx.req`, `ctx.request or `ctx` itself
  //delegate all write to `ctx` itself
  return new Proxy(ctx, {
    get: function(receiver, key) {
      return ctx.req[key] || ctx.request[key] || ctx[key];
    }
  });
  
};