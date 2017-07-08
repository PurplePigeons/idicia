const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Enrichment Page Model, hacky version of singleton until support is released in full
 * Keystone 4.0...
 * ==========
 */

const Enrichment = new keystone.List('Enrichment', {
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

Enrichment.add({
  title: {
    type: String,
    required: true,
    default: 'Enrichment',
  },
  section1: { type: Types.Markdown },
  section2: {
    content1: { type: Types.Markdown },
    content2: { type: Types.Markdown },
    content3: { type: Types.Markdown },
    content4: { type: Types.Markdown },
  },
});

Enrichment.defaultColumns = 'title';
Enrichment.register();
