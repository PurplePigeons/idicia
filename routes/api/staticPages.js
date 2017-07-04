const keystone = require('keystone');

/**
 * Dynamically return data for the given page. ie. /api/sitePages/Solutions will return the data in
 * the Solutions schema
 */
exports.handler = (req, res) => {
  // Convert incoming page param to uppercase to match Mongoose schema naming
  const page = req.params.page[0].toUpperCase() + req.params.page.slice(1);

  // Prevent unwanted access to non-static-page schemas, such as User
  const allowedStaticPages = [
    'Solutions',
    'Verification',
    'Enrichment',
    'Comparison',
    'Telecom',
    'Healthcare',
    'Compliance',
  ];
  if (!allowedStaticPages.includes(page)) return res.apiError(400, 'Requested page invalid or not permitted');

  // Assuming valid page requested, import the correct schema and query
  const schema = keystone.list(page);
  schema.model
    .find()
    // Access element 0 since result will be an array with only one value
    .then(data => res.json({ page: data[0] }))
    .catch(err => res.apiError('database error', err));
}
