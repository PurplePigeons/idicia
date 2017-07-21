const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Slider Model, used to create each slide in the Home Page carousel section
 * ==========
 */

const Slider = new keystone.List('Slider', {
  map: {
    name: 'title',
  },
  autokey: {
    path: 'slug',
    from: 'title',
    unique: true,
  },
  defaultSort: 'order',
});

Slider.add({
  title: {
    type: String,
    required: true,
    default: 'slider',
  },
  order: { type: Types.Number },
  headline: { type: String },
  secondaryText: { type: String },
  link: {
    text: { type: String },
    route: { type: String },
  },  
});

Slider.defaultColumns = 'title, order';
Slider.register();
