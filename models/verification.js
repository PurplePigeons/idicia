const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Verification Page Model, hacky version of singleton until support is released in full
 * Keystone 4.0...
 * ==========
 */

const Verification = new keystone.List('Verification', {
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

Verification.add({
  title: {
    type: String,
    required: true,
    default: 'Verification',
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
    element5: {
      title: {
        type: String,
      },
      content: {
        type: Types.Markdown,
      },
    },
    element6: {
      title: {
        type: String,
      },
      content: {
        type: Types.Markdown,
      },
    }
  },
});

Verification.defaultColumns = 'title';
Verification.register();
