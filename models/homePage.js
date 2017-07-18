const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * HomePage Page Model, hacky version of singleton until support is released in full
 * Keystone 4.0...
 * ==========
 */

const HomePage = new keystone.List('HomePage', {
  map: {
    name: 'title',
  },
  autokey: {
    path: 'slug',
    from: 'title',
    unique: true,
  },
  // nocreate: true,
  nodelete: true,
});

HomePage.add({
  title: {
    type: String,
    required: true,
    default: 'Home Page',
  },
  welcome: { type: Types.Markdown },
  quickFacts: {
    title: { type: String },
    idicia: { 
      title: { type: String },
      text: { type: Types.Markdown },
    },
    telified: { 
      title: { type: String },
      text: { type: Types.Markdown },
    },
    digDeeper: { 
      title: { type: String },
      text: { type: Types.Markdown },
    },
    customers: { 
      title: { type: String },
      text: { type: Types.Markdown },
    },
    info: { 
      title: { type: String },
      text: { type: Types.Markdown },
    },
  },
  whatWeDo: { type: Types.Markdown },
  columns: {
    verification: {
      title: { type: String },
      icon: {
        type: Types.CloudinaryImage,
        folder: 'idicia/images/pages/homePage/',
        allowedTypes: 'image/jpeg,image/svg+xml,image/png',
        autoCleanup : true,
      },
      text: { type: Types.Markdown },
    },
    enrichment: {
      title: { type: String },
      icon: {
        type: Types.CloudinaryImage,
        folder: 'idicia/images/pages/homePage/',
        allowedTypes: 'image/jpeg,image/svg+xml,image/png',
        autoCleanup : true,
      },
      text: { type: Types.Markdown },
    },
    comparison: {
      title: { type: String },
      icon: {
        type: Types.CloudinaryImage,
        folder: 'idicia/images/pages/homePage/',
        allowedTypes: 'image/jpeg,image/svg+xml,image/png',
        autoCleanup : true,
      },
      text: { type: Types.Markdown },
    },
  },
});

HomePage.defaultColumns = 'title';
HomePage.register();
