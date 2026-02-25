<template>
  <q-layout view="lHh Lpr lFf" class="bg-custom-dark font-montserrat text-white">
    <q-header class="bg-custom-dark text-white q-py-sm z-max border-bottom-slate" height-hint="98">
      <q-toolbar class="q-px-lg">
        <div class="flex items-center no-wrap cursor-pointer" @click="goTo('/')">
          <q-avatar rounded size="32px">
            <q-img :src="logo"/>
          </q-avatar>
          <q-toolbar-title class="tracking-widest text-weight-light">
            Estrela & Moraes Advocacia
          </q-toolbar-title>
        </div>

        <q-space />

        <div class="gt-sm q-gutter-md flex items-center">
          <q-btn flat no-caps label="Áreas" class="nav-link" />
          <q-btn flat no-caps label="Serviços" class="nav-link" />
          <q-btn flat no-caps label="Equipe" class="nav-link" />
          <!-- <q-btn flat no-caps label="Artigos" class="nav-link" /> -->
          <q-btn flat no-caps label="Quem Somos" class="nav-link" />
          <q-btn 
            flat 
            label="Consulta"
            @click="consulta"
            class="text-amber-4 border-amber hover-fill" 
            style="border: 1px solid #fbbf24; padding: 4px 24px;"
          />
        </div>

        <q-btn flat round icon="menu" class="lt-md text-amber-4" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <footer class="bg-custom-dark text-grey-4 q-py-md">
        <div class="row justify-center q-px-xl">
          <div class="col-12 col-md-4">
              <div class="text-h6 text-amber-4 text-uppercase tracking-wider q-mb-md text-amber-4">
                Onde me encontrar?
              </div>
              <div class="row items-center q-mt-sm">
                <q-icon :name="contato[0].icon" color="amber-4"/>
                <div class="q-ml-sm">{{ contato[0].info }}</div>
              </div>
              
              <div class="row items-center q-mt-sm">
                <q-icon :name="contato[1].icon" color="amber-4"/>
                <div class="q-ml-sm">{{ contato[1].info }}</div>
              </div>
              
              <div class="row items-center q-mt-sm">
                <q-icon :name="contato[2].icon" color="amber-4"/>
                <div class="q-ml-sm">{{ contato[2].info }}</div>
              </div>

              <div class="row items-center q-mt-sm">
                <q-icon :name="contato[3].icon" color="amber-4"/>
                <a :href="contato[3].info" target="_blank" class="q-ml-sm text-grey-4">
                  Instagram
                </a>
              </div>

              <div class="row items-center q-mt-sm">
                <q-icon :name="contato[4].icon" color="amber-4"/>
                <a :href="contato[4].info" target="_blank" class="q-ml-sm text-grey-4">
                  Youtube
                </a>
              </div>
          </div>
        </div>
    </footer>
  </q-layout>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import navButtons from 'src/router/navButtons.js'
import logo from "src/assets/logo.png";

const router = useRouter()
const $q = useQuasar()

const contato = ref([
  {
      icon: "place",
      title: "Endereço",
      info: "Rua teste, Brasilia DF", 
  },
  {
    icon: "phone",
    title: "Telefone",
    info: "(61) 92005-5898",
  },
  {
    icon: "email",
    title: "Email",
    info: "estrelaemoraesadvocacia.com.br"
  },
  {
    icon: "instagram",
    title: "Instagram",
    info: "https://www.instagram.com/luanaestrelaadv/"
  },
  {
    icon: "video_library",
    title: "Youtube",
    info: "https://www.youtube.com/@luanaestrela-ds"
  }
])

function goTo(url) {
  router.push(url)
}

const logout = () => {
  console.log("logout");
}

const consulta = () => {
    const numeroDestino = "5561920055898";
    const mensagem = `
        Olá, Dra.Luana Estrela, gostararia de verificar um processo com vocês.
    `;

    const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}
</script>

<style lang="scss">
/* Estilos Globais para replicar o Tailwind */
.bg-custom-dark {
  background-color: #300212 !important;
}

.text-amber-4 {
  color: #F7E0AC !important;
}

.border-bottom-slate {
  border-bottom: 1px solid #300212;
}

.border-top-slate {
  border-top: 1px solid #300212;
}

/* Tipografia e Espaçamento */
.font-serif {
  font-family: 'Times New Roman', serif; /* Ou importe uma fonte específica */
}

.tracking-widest {
  letter-spacing: 0.25em;
}

.tracking-wider {
  letter-spacing: 0.1em;
}

/* Links do Nav */
.nav-link {
  font-size: 0.85rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #e2e8f0;
  transition: color 0.3s;
  
  &:hover {
    color: #fbbf24 !important;
  }
}

.hover-fill {
  transition: all 0.3s;
  &:hover {
    background-color: #fbbf24;
    color: #0f172a !important;
  }
}
</style>