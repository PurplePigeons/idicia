const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Comparison Page Model, hacky version of singleton until support is released in full
 * Keystone 4.0...
 * ==========
 */

const Comparison = new keystone.List('Comparison', {
  map: {
    name: 'title',
  },
  autokey: {
    path: 'slug',
    from: 'title',
    unique: true,
  },
  // nocreate: true,
  // nodelete: true,
});

Comparison.add({
  title: {
    type: String,
    required: true,
    default: 'Comparison',
  },
  section1: {
    title: { type: String },
    line1: { type: Types.Markdown },
    comparison1: { type: Types.Markdown },
    comparison2: { type: Types.Markdown },
    contentBody: { type: Types.Markdown },
  },
  section2: { type: Types.Markdown },
});

Comparison.defaultColumns = 'title';
Comparison.register();
