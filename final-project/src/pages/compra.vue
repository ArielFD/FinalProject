<template>
  <q-page style="background-color: white text-primary" class="text-primary">
    <div class="row">
      <div class="col-8 q-pa-xl">
        <q-img src="div2.3.png" :ratio="16 / 9" />
      </div>
      <div class="col-4 q-pr-md">
        <h2>Sofa Contemporaneo</h2>
        <h6 class="text-weight-light">
          Illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur.
          <br /><br />
          299.00$
        </h6>
        <br />
        <q-btn
          color="primary"
          text-color="white"
          label="gregar a la cesta"
          class="q-pl-xl q-pr-xl"
          icon="shopping_cart"
          @click="aumentar"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { inject } from "vue";
import { defineComponent,reactive } from "vue";
export default defineComponent({
  setup() {
    const store = inject("store");
    let data = reactive({
      cant: store.state.cant,
    });

    function aumentar(params) {
        store.state.cant++
    }
    return {
      data,
      aumentar
    };
  },
});
</script>
