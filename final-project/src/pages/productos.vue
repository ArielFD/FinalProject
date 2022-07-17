<template>
  <div
    class="col q-pa-xl text-primary"
    style="background-color: rgb(235, 241, 229)"
  >
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
</template>

<script>
import { defineComponent } from "vue";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
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