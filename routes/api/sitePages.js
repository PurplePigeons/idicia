const async = require('async');
const keystone = require('keystone');

/**
 * Dynamically return data for the given page. ie. /api/sitePages/Solutions will return the data in
 * the Solutions schema
 */
exports.sitePagesHandler = (req, res) => {
  // Convert incoming page param to uppercase to match Mongoose schema naming
  const page = req.params.page[0].toUpperCase() + req.params.page.slice(1);
  const schema = keystone.list(page);

  schema.model
    .find()
    .then(data => res.json({ page: data[0] }))
    .catch(err => res.apiError('database error', err));
}
