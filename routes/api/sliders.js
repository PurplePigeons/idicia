const keystone = require('keystone');

const Slider = keystone.list('Slider');

/**
 * Return data for all home page carousel sliders, sorted
 */
exports.allSliders = (req, res) => {
  // Grab sliders and sort by user-defined order
  Slider.model
    .find()
    .sort({ order: 1 })
    .then(data => res.json(data))
    .catch(err => res.apiError('database error', err));
}
