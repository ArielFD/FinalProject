<template>
  <q-page>
    <div class="column" style="height: 1800px">
      <div
        class="col q-pa-xl text-primary"
        style="background-color: rgb(235, 241, 229)"
      >
        <div class="row">
          <div class="col-8">
            <q-img src="div1.png" width="95%" :ratio="16 / 9" />
          </div>
          <div class="col-4">
            <h3>Muebles acogedores para tu hogar acogedor.</h3>
            <h5>Para ver nuestro producto haga click aqui</h5>
            <q-btn
              color="primary"
              text-color="white"
              label="Comprar Ahora"
              :to="{ name: 'productos' }"
            />
          </div>
        </div>
      </div>
      <div
        class="col q-pa-xl text-primary"
        style="background-color: rgb(204, 213, 191)"
      >
        <div class="row justify-between">
          <div><h6 class="text-center">Lo mas vendido</h6></div>
          <div>
            <h6 class="text-center">
              <a href="#/productos" style="color: rgb(0, 56, 44)"
                >Ver nuestros productos</a
              >
            </h6>
          </div>
        </div>
        <div class="row">
          <div class="col-4 q-pa-md">
            <q-card
              v-ripple
              class="my-box cursor-pointer q-hoverable"
              @click="onCardClick"
            >
              <q-img src="div2.1.png" :ratio="4 / 3" />
            </q-card>
            <p class="text-body1 text-center">Mesilla de noche<br />59.00$</p>
          </div>
          <div class="col-4 q-pa-md">
            <q-card
              v-ripple
              class="my-box cursor-pointer q-hoverable"
              @click="onCardClick"
            >
              <q-img src="div2.2.png" :ratio="4 / 3" />
            </q-card>

            <p class="text-body1 text-center">Wooden frame <br />79.00$</p>
          </div>
          <div class="col-4 q-pa-md">
            <q-card
              v-ripple
              class="my-box cursor-pointer q-hoverable"
              @click="onCardClick"
            >
              <q-img src="div2.3.png" :ratio="4 / 3" />
            </q-card>

            <p class="text-body1 text-center">
              Sofa Contemporaneo<br />299.00$
            </p>
          </div>
        </div>
      </div>
      <div
        class="col q-pa-xl text-secondary"
        style="background-color: rgb(0, 56, 44)"
      >
        <div class="row">
          <div class="col-6">
            <h6>SOBRE LA TIENDA</h6>
            <h3>
              Inmobilaria Borrego, tenemos todo lo necesario para el confort de
              su hogar
            </h3>
            <h5>
              <a href="#/about" style="color: white">Mas sobre nosotros</a>
            </h5>
          </div>
          <div class="col-6">
            <q-img src="div3.png" width="95%" :ratio="16 / 9" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  name: "PageIndex",
  setup() {
    const router = useRouter();

    function onCardClick(params) {
      router.push("/compra");
    }

    return {
      onCardClick,
    };
  },
});
</script>
