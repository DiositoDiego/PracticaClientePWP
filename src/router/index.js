import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/inicio"	
  },
  {
    path: "/",
    component: {
      render(c) {
        return c("router-view");
      }
    },
    children: [
      {
        path: "/main",
        name: "main",
        component: () => import("../components/HelloWorld.vue")
      },
      {
        path: "/formulario",
        name: "formulario",
        component: () => import("../components/Formulario.vue"),
      },
      {
        path: "/listaPersonas",
        name: "listaPersonas",
        component: () => import("../components/ListaPersonas.vue"),
      },
      {
        path: "/componente1",
        name: "componente1",
        //component: () => import("../components/Componente1.vue")
      },
      {
        path: "/componente2",
        name: "componente2",
        //component: () => import("../components/Componente2.vue")
      },
      {
        path: "/componente3",
        name: "componente3",
        //component: () => import("../components/Componente3.vue")
      },
      {
        path: "/electronicos",
        name: "electronicos",
        //component: () => import("../components/electronicos/Electronicos.vue"),
      },
      {
        path: "/juegosDeVideo",
        name: "juegosDeVideo",
        //component: () => import("../components/electronicos/JuegosDeVideo.vue"),
      },
      {
        path: "/kitchen",
        name: "kitchen",
        //component: () => import("../components/cocina/Kitchen.vue"),
      },
      {
        path: "/estufas",
        name: "estufas",
        //component: () => import("../components/cocina/Estufas.vue"),
      },
      {
        path: "/limpieza",
        name: "limpieza",
        //component: () => import("../components/hogar/Limpieza.vue"),
      },
      {
        path: "/detergentesIn",
        name: "detergentesIn",
        //component: () => import("../components/hogar/DetergentesIn.vue"),
      },
      {
        path: "/electrodomesticos",
        name: "electrodomesticos",
        //component: () => import("../components/cocina/Electrodomesticos.vue"),
      },
      {
        path: "/tiendajuguetes",
        name: "tiendajuguetes",
        //component: () => import("../components/electronicos/TiendaJuguetes.vue"),
      },
      {
        path: "/tiendahogar",
        name: "tiendahogar",
        //component: () => import("../components/hogar/TiendaHogar.vue"),
      },
    ]
  }
];

const router = new VueRouter({ routes });
export default router;