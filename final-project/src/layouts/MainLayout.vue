<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn round href="https://www.facebook.com/" target="_blank">
          <q-avatar size="42px">
            <img src="https://img.icons8.com/ios/50/000000/facebook-new.png"/>
          </q-avatar>
        </q-btn>
        <q-btn round href="https://twitter.com/?lang=es" target="_blank">
          <q-avatar size="42px">
            <img src="https://img.icons8.com/ios/50/000000/twitter--v1.png"/>
          </q-avatar>
        </q-btn>
        <q-btn round href="https://www.instagram.com/" target="_blank">
          <q-avatar size="42px">
            <img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"/>
          </q-avatar>
        </q-btn>
      </q-toolbar>
      <q-toolbar style="background-color: rgb(235,241,229); color: rgb(0, 56, 44)">
        <q-toolbar-title> Tienda de Muebles </q-toolbar-title>

        <q-btn flat color="primary" label="Inicio" :to="{ name: 'inicio' }"/>
        <q-btn flat color="primary" label="Productos" :to="{ name: 'productos' }"/>
        <q-btn flat color="primary" label="Sobre Nosotros" :to="{ name: 'about' }"/>
        <q-btn flat color="primary" label="Contactenos" :to="{ name: 'contact' }"/>
        <q-btn flat color="primary" label="Marco Legal" :to="{ name: 'marco' }"/>
        <q-separator vertical inset />
        <q-btn flat color="primary" label="Cesta" icon-right="shopping_cart" :to="{ name: 'cesta' }">
          <q-badge color="primary" floating transparent v-if="store.state.cant!=0">
            {{store.state.cant}}
      </q-badge>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-footer elevated>
      <q-toolbar style="background-color: rgb(235,241,229); color: rgb(0, 56, 44)">
        <div class="col">
          <div class="row justify-between">
            <div>© 2022 Todos los derechos reservados</div>
            <div>Creado por ArielFDev y EL Negrito de Espejuelitos</div>
          </div>
        </div>
      </q-toolbar>
    </q-footer>

    <q-page-container >
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import {inject } from "vue";
import { defineComponent} from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const store = inject("store");

    return {
      store
    };
  },
});
</script>
