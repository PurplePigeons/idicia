const async = require('async');
const keystone = require('keystone');

const Solutions = keystone.list('Solutions');

/**
 * Return data for the Solutions Page
 */
exports.solutions = (req, res) => {
  Solutions.model
    .find()
    .then(solutions => res.json({ solutions: solutions[0] }))
    .catch(err => res.apiError('database error', err));
}
