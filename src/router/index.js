import { createRouter, createWebHistory } from 'vue-router'
import firebase from 'firebase'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../components/Index')
  },
  {
    path: '/categorias',
    name: 'categorias',
    component: () => import('../components/Categorias')
  },
  {
    path: '/productos',
    name: 'productos',
    component: () => import('../components/Productos')
  },
  {
    path: '/restaurantes',
    name: 'restaurantes',
    component: () => import('../components/Restaurantes')
  },
  {
    path: '/formulario',
    name: 'formulario',
    component: () => import('../components/Formulario')
  },
  {
    path: '/promociona',
    name: 'promociona',
    component: () => import('../components/Promocionar')
  },
  {
    path: '/admin',
    name: 'login',
    component: () => import('../views/Autenticacion/Login')
  },
  {
    path: '/paginaadmin',
    name: 'paginaadmin',
    component: () => import('../components/Administrador'),
    meta: {
      requiresAuth: true
    }
  }, 
  {
    path: '/iniciocategorias',
    name: 'iniciocategorias',
    component: () => import('../components/InicioCategorias'),
    meta: {
    requiresAuth: true
    }
  },
  {
    path: '/inicioproductos',
    name: 'inicioproductos',
    component: () => import('../components/InicioProductos'),
    meta: {
    requiresAuth: true
    }
  },
  {
    path: '/iniciorestaurantes',
    name: 'iniciorestaurantes',
    component: () => import('../components/InicioRestaurantes'),
    meta: {
    requiresAuth: true
    }
  },
  {
    path: '/inicioclientes',
    name: 'inicioclientes',
    component: () => import('../components/InicioClientes'),
    meta: {
    requiresAuth: true
    }
  },
  {
    path: '/listacategorias',
    name: 'listacategorias',
    component: () => import('../components/ListaCategoria'),
    meta: {
    requiresAuth: true
    }
  },
  {
    path: '/listaproductos',
    name: 'listaproductos',
    component: () => import('../components/ListaProducto'),
    meta: {
    requiresAuth: true
    }
  },
  {
    path: '/listarestaurantes',
    name: 'listarestaurantes',
    component: () => import('../components/ListaRestaurante'),
    meta: {
    requiresAuth: true
    }
  },
  {
    path: '/listaclientes',
    name: 'listaclientes',
    component: () => import('../components/ListaCliente'),
    meta: {
    requiresAuth: true
    }
  },
  {
    path: '/agregarcategoria',
    name: 'agregarcategoria',
    component: () => import('../components/AgregarCategoria'),
    meta: {
    requiresAuth: true
    }
  },
  {
    path: '/agregarproducto',
    name: 'agregarproducto',
    component: () => import('../components/AgregarProducto'),
    meta: {
    requiresAuth: true
    }
  },
  {
    path: '/agregarrestaurante',
    name: 'agregarrestaurante',
    component: () => import('../components/AgregarRestaurante'),
    meta: {
    requiresAuth: true
    }
  },
  {
    path: '/agregarcliente',
    name: 'agregarcliente',
    component: () => import('../components/AgregarCliente'),
    meta: {
    requiresAuth: true
    }
  },
  {
    path: '/editarcategoria/:id',
    name: 'editarcategoria',
    component: () => import('../components/EditarCategoria'),
    meta: {
    requiresAuth: true
    }
  },
  {
    path: '/editarproducto/:id',
    name: 'editarproducto',
    component: () => import('../components/EditarProducto'),
    meta: {
    requiresAuth: true
    }
  },
  {
    path: '/editarrestaurante/:id',
    name: 'editarrestaurante',
    component: () => import('../components/EditarRestaurante'),
    meta: {
    requiresAuth: true
    }
  },
  {
    path: '/editarcliente/:id',
    name: 'editarcliente',
    component: () => import('../components/EditarCliente'),
    meta: {
    requiresAuth: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(ruta => ruta.meta.requiresAuth)){
    const user = firebase.auth().currentUser;
    if(user){
      next();
    }else{
      next({
        name: 'login'
      })
    }
  }else{
    next();
  }
})

export default router
