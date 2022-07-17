<template>
  <router-view  style="background-color: rgb(235, 241, 229)"/>
</template>
<script>
import { defineComponent,provide } from 'vue';
import store from "./store"
export default defineComponent({
  name: 'App',
  setup(){
    provide("store",store)
  }
})
</script>
