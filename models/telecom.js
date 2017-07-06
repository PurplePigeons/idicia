const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Telecom Page Model, hacky version of singleton until support is released in full
 * Keystone 4.0...
 * ==========
 */

const Telecom = new keystone.List('Telecom', {
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

Telecom.add({
  title: {
    type: String,
    required: true,
    default: 'Telecom',
  },
  block1: { type: Types.Markdown },
  block2: {
    title: { type: String },
    column1: { type: Types.Markdown },
    column2: { type: Types.Markdown },
    content: { type: Types.Markdown },
  },
  block3: { type: Types.Markdown },
});

Telecom.defaultColumns = 'title';
Telecom.register();
