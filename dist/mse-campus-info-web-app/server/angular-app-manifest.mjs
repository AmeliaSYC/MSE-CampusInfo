
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
    'index.csr.html': {size: 23711, hash: '0cf3da0c115c0547207ca8027d523ea0fb19cdf4fba84d95b3a875dd8a86687c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17330, hash: '0267c6ead7c43c5edb05248cf2f28d5a2d476b8a2dd7bbb4cea75a53ea571856', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'location/index.html': {size: 30540, hash: 'eebf4d93f6bcdb934ab25c5dd2d1049eaecf34fe906e8952fbff5efc429283f6', text: () => import('./assets-chunks/location_index_html.mjs').then(m => m.default)},
    'schedule/index.html': {size: 30532, hash: '1a17ce61913f87a6e3481b0508d8095041b7f3559adf6de993897f2b48d8e628', text: () => import('./assets-chunks/schedule_index_html.mjs').then(m => m.default)},
    'styles-CYCN7I4T.css': {size: 7160, hash: 'BhUDCpaJWZ8', text: () => import('./assets-chunks/styles-CYCN7I4T_css.mjs').then(m => m.default)}
  },
};
