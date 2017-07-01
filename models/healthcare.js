const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Healthcare Page Model, hacky version of singleton until support is released in full
 * Keystone 4.0...
 * ==========
 */

const Healthcare = new keystone.List('Healthcare', {
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

Healthcare.add({
  title: {
    type: String,
    required: true,
    default: 'Healthcare',
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
    content: {
      type: Types.Markdown,
    },
    image: {
      type: Types.CloudinaryImage,
      folder: 'idicia/images/pages/healthcare/',
      allowedTypes: 'image/jpeg,image/svg+xml,image/png',
      autoCleanup : true,
    },
    stub1: {
      type: Types.Markdown,
    },
    stub2: {
      type: Types.Markdown,
    },
    stub3: {
      type: Types.Markdown,
    },
    example: {
      type: Types.Markdown,
    },
  },
});

Healthcare.defaultColumns = 'title';
Healthcare.register();
