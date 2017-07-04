const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Compliance Page Model, hacky version of singleton until support is released in full
 * Keystone 4.0...
 * ==========
 */

const Compliance = new keystone.List('Compliance', {
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

Compliance.add({
  title: {
    type: String,
    required: true,
    default: 'Compliance',
  },
  column1: {
    title: { type: String },
    section1: { type: Types.Markdown },
    section2: { type: Types.Markdown },
    section3: { type: Types.Markdown },
    section4: { type: Types.Markdown },

  },
  column2: {type: Types.Markdown },
  section1: { type: Types.Markdown },
});

Compliance.defaultColumns = 'title';
Compliance.register();
