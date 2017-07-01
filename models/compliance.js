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
    title: {
      type: String,
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
      title: {
        type: String,
      },
      content: {
        type: Types.Markdown,
      },
    },
    section3: {
      title: {
        type: String,
      },
      content: {
        type: Types.Markdown,
      },
    },
    section4: {
      title: {
        type: String,
      },
      content: {
        type: Types.Markdown,
      },
    },
  },
  column2: {
    title: {
      type: String,
    },
    content: {
      type: Types.Markdown,
    },
  },
  section1: {
    content: {
      type: Types.Markdown,
    },
  },
});

Compliance.defaultColumns = 'title';
Compliance.register();
