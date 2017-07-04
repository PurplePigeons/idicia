const async = require('async');
const keystone = require('keystone');

/**
 * Dynamically return data for the given page. ie. /api/sitePages/Solutions will return the data in
 * the Solutions schema
 */
exports.sitePagesHandler = (req, res) => {
  const schema = keystone.list(req.params.page);
  schema.model
    .find()
    .then(data => res.json({ page: data[0] }))
    .catch(err => res.apiError('database error', err));
}
