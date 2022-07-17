<template >
  <q-page style="background-color: white">
    <div class="text-primary text-center">
      <br />
      <h2>Cesta de la compra</h2>
      <h6 class="text-weight-light">
        Tu cesta esta vacia <br />
        Elige algo y Vuelve aqui
      </h6>
      <q-btn
        color="primary"
        text-color="white"
        label="Seguir Comprando"
        class="q-pl-xl q-pr-xl"
        :to="{ name: 'productos' }"
      />
    </div>
  </q-page>
</template>