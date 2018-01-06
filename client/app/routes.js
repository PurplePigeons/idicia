// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer } = getAsyncInjectors(store);

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/StaticPages/reducer'),
          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('staticPages', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/blog',
      name: 'blog',
      indexRoute: {
        onEnter: (nextState, replace) => replace('/blog/page/1'),
      },
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Blog/reducer'),
          import('containers/Blog'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('blog', reducer.default);
          renderRoute(component);
          console.log('Blog reducer and component mounted');
        });

        importModules.catch(errorLoading);
      },
      childRoutes: [
        {
          path: 'page(/:pageId)',
          name: 'blogPages',
          getComponent(nextState, cb) {
            import('containers/Blog/PostListContainer')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
        },
        {
          path: 'post',
          name: 'BlogPostRequiresSlug',
          onEnter: (nextState, replace) => replace('/blog/page/1'),
        },
        {
          path: 'post/:postSlug',
          name: 'blogPost',
          getComponent(nextState, cb) {
            import('containers/Blog/PostContainer')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
        },
      ],
    },
    {
      path: '/solutionsOld',
      name: 'solutionsOld',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/StaticPages/reducer'),
          import('containers/Solutions'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('staticPages', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/verification',
      name: 'verification',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/StaticPages/reducer'),
          import('containers/Solutions/Verification'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('staticPages', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/enrichment',
      name: 'enrichment',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/StaticPages/reducer'),
          import('containers/Solutions/Enrichment'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('staticPages', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/comparison',
      name: 'comparison',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/StaticPages/reducer'),
          import('containers/Solutions/Comparison'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('staticPages', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/telecom',
      name: 'telecom',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/StaticPages/reducer'),
          import('containers/Solutions/Telecom'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('staticPages', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/healthcare',
      name: 'healthcare',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/StaticPages/reducer'),
          import('containers/Solutions/Healthcare'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('staticPages', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/compliance',
      name: 'compliance',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/StaticPages/reducer'),
          import('containers/Solutions/Compliance'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('staticPages', reducer.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/telified',
      name: 'telified',
      getComponent(nextState, cb) {
        import('components/TelifiedTemplate')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: 'about-us',
      name: 'about us',
      getComponent(nextState, cb) {
        import('components/AboutUsTemplate')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/solutions',
      name: 'solutions',
      getComponent(nextState, cb) {
        import('components/SolutionsTemplate')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/services',
      name: 'services',
      getComponent(nextState, cb) {
        import('components/ServicesTemplate')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
