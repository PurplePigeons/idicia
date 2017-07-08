const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Solutions Page Model, hacky version of singleton until support is released in full
 * Keystone 4.0...
 * ==========
 */

const Solutions = new keystone.List('Solutions', {
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

Solutions.add({
  title: {
    type: String,
    required: true,
    default: 'Solutions',
  },
  block1: { type: Types.Markdown },
  block2: { type: Types.Markdown },
  block3: {
    column1: {
      title: { type: String },
      content1: { type: Types.Markdown },
      content2: { type: Types.Markdown },
      content3: { type: Types.Markdown },
      content4: { type: Types.Markdown },
      content5: { type: Types.Markdown },
      content6: { type: Types.Markdown },
    },
    column2: { type: Types.Markdown },
  },
  block4: {
    title: { type: String },
    column1: { type: Types.Markdown },
    column2: { type: Types.Markdown },
    column3: { type: Types.Markdown },
  },
});

Solutions.defaultColumns = 'title';
Solutions.register();
