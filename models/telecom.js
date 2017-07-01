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
  block1: {
    title: {
      type: String,
    },
    content: {
      type: Types.Markdown,
    },
  },
  block2: {
    title: {
      type: String,
    },
    column1: {
      content: {
        type: Types.Markdown,
      },
    },
    column2: {
      content: {
        type: Types.Markdown,
      },
    },
    content: {
      type: Types.Markdown,
    },
  },
  block4: {
    title1: {
      type: String,
    },
    content1: {
      type: Types.Markdown,
    },
    title2: {
      type: String,
    },
    content2: {
      type: Types.Markdown,
    },
    title3: {
      type: String,
    },
    content3: {
      type: Types.Markdown,
    },
  },
});

Telecom.defaultColumns = 'title';
Telecom.register();
