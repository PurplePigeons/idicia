const keystone = require('keystone');
const Solutions = keystone.list('Solutions');

// Seed an inital solutions page since it is a unique page that cannot be created (to prevent dupes)
exports = module.exports = (done) => {
  new Solutions.model().save(done);
};
