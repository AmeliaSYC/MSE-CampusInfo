
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/MSE-CampusInfo/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/MSE-CampusInfo/schedule",
    "route": "/MSE-CampusInfo"
  },
  {
    "renderMode": 2,
    "route": "/MSE-CampusInfo/schedule"
  },
  {
    "renderMode": 2,
    "route": "/MSE-CampusInfo/location"
  },
  {
    "renderMode": 2,
    "route": "/MSE-CampusInfo/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23704, hash: '5718b906338974fa25197a6b94cf4b212dcb576724f1986920103b665722bb6b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17323, hash: '9726976a59353add0f9e3b747cbecc58916d6e90b8644823d003da742bc9ed0f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'schedule/index.html': {size: 30525, hash: '3d78a0958503e14f91f57c63043cdcd938734298dce3c6c1ec053da62a22cf99', text: () => import('./assets-chunks/schedule_index_html.mjs').then(m => m.default)},
    'location/index.html': {size: 30533, hash: '76e8ce67d65c60998dc6ac279690500a3f2fc0b92327da16ec8f7ebb4ea9b62d', text: () => import('./assets-chunks/location_index_html.mjs').then(m => m.default)},
    'styles-CYCN7I4T.css': {size: 7160, hash: 'BhUDCpaJWZ8', text: () => import('./assets-chunks/styles-CYCN7I4T_css.mjs').then(m => m.default)}
  },
};
