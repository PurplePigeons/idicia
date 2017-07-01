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
  section1: {
    title: {
      type: String,
    },
    content: {
      type: Types.Markdown,
    },
  },
  section2: {
    element1: {
      title: {
        type: String,
      },
      content: {
        type: Types.Markdown,
      },
    },
    element2: {
      title: {
        type: String,
      },
      content: {
        type: Types.Markdown,
      },
    },
    element3: {
      title: {
        type: String,
      },
      content: {
        type: Types.Markdown,
      },
    },
    element4: {
      title: {
        type: String,
      },
      content: {
        type: Types.Markdown,
      },
    },
  },
});

Enrichment.defaultColumns = 'title';
Enrichment.register();
