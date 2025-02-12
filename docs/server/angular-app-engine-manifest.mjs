
export default {
  basePath: '/MSE-CampusInfo-WebApp',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
