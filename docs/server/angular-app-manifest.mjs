
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/MSE-CampusInfo-WebApp/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/MSE-CampusInfo-WebApp/schedule",
    "route": "/MSE-CampusInfo-WebApp"
  },
  {
    "renderMode": 2,
    "route": "/MSE-CampusInfo-WebApp/schedule"
  },
  {
    "renderMode": 2,
    "route": "/MSE-CampusInfo-WebApp/location"
  },
  {
    "renderMode": 2,
    "route": "/MSE-CampusInfo-WebApp/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23711, hash: '57f1046a8ceac3b66f6123da19701348f369e6b056dab4911b2f1ab5872535ac', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17330, hash: '4b3d24e886e8960478c154da8ea0facb5cc19d97941737597ef0fd117174415a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'schedule/index.html': {size: 30532, hash: '7cee912cae799a182b8fde3b3553d798e6a896fdaf66fb4c502d92a5176b4903', text: () => import('./assets-chunks/schedule_index_html.mjs').then(m => m.default)},
    'location/index.html': {size: 30540, hash: '57e98d583b3a87bd5fba7f60dd017cd23871edcc802a2b05f05c5dde9115f484', text: () => import('./assets-chunks/location_index_html.mjs').then(m => m.default)},
    'styles-CYCN7I4T.css': {size: 7160, hash: 'BhUDCpaJWZ8', text: () => import('./assets-chunks/styles-CYCN7I4T_css.mjs').then(m => m.default)}
  },
};
