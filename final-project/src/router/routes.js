
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',name:"inicio", component: () => import('pages/Index.vue') },
      { path: 'about',name:"about", component: () => import('pages/about.vue') },
      { path: 'cesta',name:"cesta", component: () => import('pages/cesta.vue') },
      { path: 'compra',name:"compra", component: () => import('pages/compra.vue') },
      { path: 'contact',name:"contact", component: () => import('pages/contact.vue') },
      { path: 'productos',name:"productos", component: () => import('pages/productos.vue') },
      { path: 'marco',name:"marco", component: () => import('pages/marco.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
