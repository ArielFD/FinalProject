<template>
  <div class="q-pa-md text-primary">
    <div class="row">
      <div class="col-6">
        <h3>Contactenos</h3>
        <q-avatar>
          <q-icon name="location_on" />
        </q-avatar>
        Borrego 26 entre Consejero arango y Sarabia
        <br />
        <q-avatar>
          <q-icon name="settings_phone" />
        </q-avatar>
        (+53) 55357290
        <br />
        <q-avatar>
          <q-icon name="email" />
        </q-avatar>
        arielferrera1992@gmail.com
        <br />
        <q-avatar>
          <q-icon name="public" />
        </q-avatar>
        @ArielFDev
      </div>
      <div class="col-6">
        <h3>Atencion al Ciudadano</h3>
        <h6>
          Por favor, introduce tus datos y te responderemos tan pronto nos sea
          posible.
        </h6>
        <h6>{{data.date}}</h6>
        <div class="q-gutter-sm q-ma-sm">
          <q-radio
            v-model="data.coment"
            checked-icon="task_alt"
            unchecked-icon="panorama_fish_eye"
            val="comentario"
            label="Comentario"
          />
          <q-radio
            v-model="data.coment"
            checked-icon="task_alt"
            unchecked-icon="panorama_fish_eye"
            val="queja"
            label="Queja"
          />
        </div>
        <div v-if="data.coment == 'queja'">
          <div class="q-gutter-sm q-ma-sm">
            <q-radio
              v-model="data.anonim"
              checked-icon="task_alt"
              unchecked-icon="panorama_fish_eye"
              val="anonima"
              label="Anonima"
            />
            <q-radio
              v-model="data.anonim"
              checked-icon="task_alt"
              unchecked-icon="panorama_fish_eye"
              val="personal"
              label="Personal"
            />
          </div>
          <div v-if="data.anonim == 'personal'">
            <q-input
              outlined
              v-model="data.nombre"
              label="Nombre"
              :dense="dense"
              class="q-ma-sm"
            />
            <q-input
              outlined
              v-model="data.apellidos"
              label="Apellidos"
              :dense="dense"
              class="q-ma-sm"
            />
            <q-input
              outlined
              v-model="data.direccion"
              label="Direccion Particular"
              :dense="dense"
              class="q-ma-sm"
            />
            <q-input
              outlined
              v-model="data.correo"
              label="Correo Electronico"
              type="email"
              :dense="dense"
              class="q-ma-sm"
            />
            <q-input
              outlined
              v-model="data.telefono"
              label="Telefono de Contacto"
              type="tel"
              :dense="dense"
              class="q-ma-sm"
            />
          </div>
        </div>
        <q-input v-model="data.planteamineto" filled type="textarea" class="q-ma-sm" />
        <q-btn
          color="primary"
          label="Enviar"
          class="q-ma-sm"
          @click="enviar"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive,onMounted } from "vue";
import { useQuasar ,} from "quasar";
export default {
  setup() {
    const $q = useQuasar();
    let data = reactive({
      date: "",
      coment: "",
      anonim: "",
      nombre: "",
      apellidos: "",
      direccion: "",
      correo: "",
      telefono:"",
      planteamineto: "",
    });

    function enviar(params) {
      $q.notify({ color: "positive", message: "Mensaje enviado, pronto le responderemos", icon: "done" });
      data.coment=""
      data.anonim=""
      data.nombre= ""
      data.apellidos= ""
      data.direccion= ""
      data.correo= ""
      data.telefono=""
      data.planteamineto= ""
    }
     onMounted(() => {
         let today=new Date()
         data.date=today.getDate()+"-"+(today.getMonth()+1)+"-"+today.getFullYear();
     })

    return {
      data,
      enviar
    };
  },
};
</script>