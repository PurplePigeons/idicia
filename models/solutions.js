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
  nocreate: true,
  nodelete: true,
});

Solutions.add({
  title: {
    type: String,
    required: true,
    default: 'Solutions',
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
    content: {
      type: Types.Markdown,
    },
  },
  block3: {
    column1: {
      title: {
        type: String,
      },
      content: {
        type: Types.Markdown,
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
  },
  block4: {
    title: {
      type: String,
    },
    column1: {
      title: {
        type: String,
      },
      content: {
        type: Types.Markdown,
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
    column3: {
      title: {
        type: String,
      },
      content: {
        type: Types.Markdown,
      },
    },
  },
});

Solutions.defaultColumns = 'title';
Solutions.register();
