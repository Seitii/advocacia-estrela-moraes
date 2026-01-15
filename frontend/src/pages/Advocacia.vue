<template>
  <q-page>
    <section class="hero-section row items-center relative-position">
      <div class="hero-overlay absolute-full"></div>

      <div class="container-limit q-px-md relative-position">
        <div class="row items-center q-col-gutter-xl">
          
          <div class="col-12 col-md-6 text-white">
            <div class="row items-center q-mb-md">
              <q-separator color="amber" style="width: 40px" class="q-mr-sm" />
              <div class="text-amber text-uppercase letter-spacing-md text-caption text-bold">
                Excelência Jurídica
              </div>
            </div>

            <h1 class="hero-title text-white q-mb-md">
              Compromisso <br />
              <span class="text-italic font-serif text-weight-thin">& Resultados.</span>
            </h1>

            <p class="hero-description text-grey-4 text-body1 q-mb-xl">
              Representação estratégica pautada na ética e na precisão técnica. 
              Focada em soluções corporativas e contencioso de alta complexidade.
            </p>

            <div class="row q-gutter-md">
              <q-btn
                color="amber"
                text-color="dark"
                label="Contatar Especialista"
                class="q-px-xl q-py-sm text-bold full-width-mobile"
                no-caps
                rounded
              />
              
              <div class="row items-center q-ml-md-lg q-mt-sm-none q-mt-md">
                <div class="text-h4 text-amber text-bold q-mr-sm">100+</div>
                <div class="text-caption text-grey-5 text-uppercase" style="line-height: 1.2">
                  Casos<br>Resolvidos
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6 flex flex-center">
            <div class="image-frame relative-position">
              <div class="absolute-top-right bg-amber" style="width: 100px; height: 100px; right: -20px; top: -20px; z-index: 0; opacity: 0.8"></div>
              <div class="absolute-bottom-left bg-blue-grey-9" style="width: 100px; height: 100px; left: -20px; bottom: -20px; z-index: 0;"></div>
              
              <q-img
                :src="imagem"
                style="max-width: 100%; width: 300px;"
                :ratio="1"
                class="hero-img rounded-borders shadow-20 relative-position"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="areas-section q-py-xl">
      <div class="container-limit q-px-md">
        
        <div class="column items-start q-mb-xl">
            <h2 class="text-h4 text-md-h3 text-dark text-weight-light q-my-none">
              Atuação <span class="text-bold">Especializada</span>
            </h2>
            <div class="divider-amber q-my-md"></div>

            <p class="text-grey-8 text-body1 q-my-none" style="max-width: 600px">
              Uma nova visão do direito para um mercado em constante transformação,
              unindo tradição e inovação para proteger seu patrimônio.
            </p>
        </div>

        <div class="row q-col-gutter-lg">
          <div
            v-for="(area, index) in areas"
            :key="area.id"
            class="col-12 col-sm-6 col-md-3"
          >
            <q-card class="area-card full-height no-shadow cursor-pointer" @click="saibaMais(area.id)">
              <q-card-section>
                <div class="area-index text-h2 text-weight-thin text-grey-5 q-mb-md">
                  0{{ index + 1 }}
                </div>
                <div class="text-h6 text-dark text-bold q-mb-sm line-height-tight">
                  {{ area.nome }}
                </div>
                <div class="text-grey-6 text-body2 q-mb-md">
                  Soluções jurídicas adaptadas.
                </div>
              </q-card-section>
              
              <q-card-actions align="left">
                <q-btn
                  flat
                  color="amber-9"
                  label="Saber mais"
                  icon-right="arrow_forward"
                  class="q-px-none"
                  dense
                />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const areas = ref([
    { id: 1, nome: "Compliance ESG & Governança" },
    { id: 2, nome: "Direito Societário e M&A" },
    { id: 3, nome: "Tributário Estratégico" },
    { id: 4, nome: "Arbitragem e Mediação" },
]);

const imagem = ref("/images/luana.jpg"); 

const saibaMais = (id: number) => {
    // logica
}
</script>

<style scoped>
/* ESSA É A CLASSE MÁGICA DO ALINHAMENTO */
.container-limit {
  max-width: 1200px; /* Largura igual para todos */
  margin: 0 auto;
  width: 100%;
}

.hero-section {
  min-height: 85vh; /* Altura confortável */
  background: #0f172a;
  /* Sem padding-top extra para não gerar buraco */
}

.hero-overlay {
  background: linear-gradient(135deg, rgba(15, 23, 42, 1) 0%, rgba(15, 23, 42, 0.7) 100%);
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.1;
}

@media (max-width: 599px) {
  .full-width-mobile { width: 100%; }
  .hero-section { 
    text-align: left; 
    min-height: auto; 
    padding-top: 2rem; 
    padding-bottom: 3rem; 
  }
  .image-frame { margin-top: 3rem; }
}

.hero-img {
  filter: grayscale(100%);
  transition: all 0.5s ease;
}
.image-frame:hover .hero-img {
  filter: grayscale(0%);
  transform: translateY(-5px);
}

.areas-section { background: #ffffff; }
.divider-amber { width: 60px; height: 4px; background: #f59e0b; }

.area-card {
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  background: transparent;
}
.area-card:hover {
  background: #fff;
  border-color: #f59e0b;
  transform: translateY(-5px);
  box-shadow: 0 10px 30px -10px rgba(245, 158, 11, 0.2);
}
.line-height-tight { line-height: 1.2; }
.font-serif { font-family: 'Georgia', 'Times New Roman', serif; }
.letter-spacing-md { letter-spacing: 0.2em; }
</style>