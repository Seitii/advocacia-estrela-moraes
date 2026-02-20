<template>
  <div>
    <div class="hero-section row items-center relative-position">
      <div class="hero-overlay absolute-full"></div>
      <div class="container-limit q-px-md relative-position">
        <div class="row items-center q-col-gutter-xl">
          
          <div class="col-12 col-md-6">
            <div class="row items-center q-mb-md">
              <q-separator color="amber" style="width: 40px" class="q-mr-sm" />
              <div class="text-amber text-uppercase letter-spacing-md text-caption text-bold">
                Excelência Jurídica
              </div>
            </div>

            <div class="hero-title text-h3 q-mb-md">
              Segurança jurídica e clareza para proteger oque é essencial na sua vida.<br />
            </div>

            <p class="hero-description text-grey-4 text-body">
              No Estrela & Moraes Advocacia, acreditamos que o Direito não deve ser um peso, mas uma solução. 
              Atuamos com ética, rigor técnico e uma comunicação direta para resolver seus conflitos sem burocracias desnecessárias.
            </p>

            <div class="row q-gutter-md q-mt-sm">
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
        </div>
      </div>
    </div>

      <div class="container-limit q-px-md q-mt-xl">
        <div class="column items-start q-mb-xl">
            <div class="hero-title text-h3 q-mb-md">
              Áreas de Atuação
            </div>

            <p class="hero-description text-grey-4 text-body">
              Soluções Estratégicas e Humanizadas.
            </p>

            <p class="text-body1 q-my-none q-mt-sm" style="max-width: 600px">
              No <span class="text-bold">Estrela & Moraes Advocacia </span>cada demanda é tratada com rigor técnico e respeito à história de quem nos procura. 
              Nosso objetivo é transformar problemas complexos em caminhos seguros.
            </p>
        </div>

        <div class="row q-col-gutter-lg">
          <div
            v-for="area in areas"
            :key="area.id"
            class="col-12 col-sm-6 col-md-3"
          >
            <q-card class="area-card full-height no-shadow cursor-pointer" @click="saibaMais(area.id)">
              <q-card-section>
                <div class="area-index text-h2 text-weight-thin text-grey-5 q-mb-md">
                  {{ area.id }}
                </div>
                <div class="text-h6 text-dark text-bold q-mb-sm line-height-tight">
                  {{ area.nome }}
                </div>
                <div class="text-grey-6 text-body2 q-mb-md">
                  {{ area.descricao }}
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

        <div class="container-limite q-px-md q-mt-xl">
          <div class="column items-start">
            <div class="hero-title text-h3 q-mb-md">
              Sócias
            </div>
          </div>

          <div>
            <span class="text-h4">Quem somos</span>
            <p class="text-body1 q-my-none q-mt-sm" style="max-width: 600px">
              O Estrela & Moraes Advocacia atua com responsabilidade, técnica e atendimento humanizado, oferecendo estratégias jurídicas seguras e acompanhamento próximo nas áreas Cível, Família, Saúde, Trabalhista e Previdenciária.
            </p>
          </div>

          <div>
            <span class="text-h4">Conheça as Especialistas.</span>
            <div class="row q-gutter-sm q-mt-md">
              <!-- <div class="col-12 col-md-6 flex flex-center"> -->
                <div class="image-frame relative-position q-mr-xl">
                  <div class="absolute-top-right bg-amber" style="width: 100px; height: 100px; right: -20px; top: -20px; z-index: 0; opacity: 0.8"></div>
                    <div class="absolute-bottom-left bg-blue-grey-9" style="width: 100px; height: 100px; left: -20px; bottom: -20px; z-index: 0;"></div>
                    
                    <q-img
                      :src="imagem"
                      style="max-width: 100%; width: 300px;"
                      :ratio="1"
                      class="hero-img rounded-borders shadow-20 relative-position"
                    />
                    <p>

                    </p>
                    <g-btn
                      label="Ver perfil completo"
                    />
                </div>
              <!-- </div> -->
                <div class="image-frame relative-position q-ml-xl">
                  <div class="absolute-top-right bg-amber" style="width: 100px; height: 100px; right: -20px; top: -20px; z-index: 0; opacity: 0.8"></div>
                    <div class="absolute-bottom-left bg-blue-grey-9" style="width: 100px; height: 100px; left: -20px; bottom: -20px; z-index: 0;"></div>
                    
                    <q-img
                      :src="imagem2"
                      style="max-width: 100%; width: 300px;"
                      :ratio="1"
                      class="hero-img rounded-borders shadow-20 relative-position"
                    />
                    <p>

                    </p>
                    <g-btn
                      label="Ver perfil completo"
                    />
                </div>
            </div>
          </div>
        </div>

        <div class="container-limite q-px-md q-mt-xl">
          <div class="column items-start">
            <div class="hero-title text-h3 q-mb-md">
              Diferenciais
            </div>
          </div>

           <div class="row q-col-gutter-lg">
            <div
              v-for="diferencial in diferenciais"
              :key="diferencial.id"
              class="col-12 col-sm-6 col-md-3"
            >
              <q-card class="area-card full-height no-shadow cursor-pointer" @click="saibaMais(diferencial.id)">
                <q-card-section>
                  <div class="area-index text-h2 text-weight-thin text-grey-5 q-mb-md">
                    {{ diferencial.id }}
                  </div>
                  <div class="text-h6 text-dark text-bold q-mb-sm line-height-tight">
                    {{ diferencial.nome }}
                  </div>
                  <div class="text-grey-6 text-body2 q-mb-md">
                    {{ diferencial.descricao }}
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

        <div class="container-limite q-px-md q-mt-xl">
          <div class="column q-mb-xl">
            <div class="hero-title text-h3 q-mb-md">
              Foco Previdenciário
            </div>
          </div>

        </div>

        <div class="container-limite q-px-md q-mt-xl">
          <div class="column q-mb-xl">
            <div class="hero-title text-h3 q-mb-md">
              FAQ
            </div>
            <q-list
              bordered
              class="rounded-borders "
            >
              <q-expansion-item v-for="faq in faqs" :key="faq.id" expand-separator>
                <template v-slot:header>
                  <!-- <q-item-section avatar>
                      <q-avatar icon="bluetooth" color="primary" text-color="white" />
                  </q-item-section> -->

                  <q-item-section>
                    <span class="text-bold text-h6">
                      {{ faq.id }} - {{ faq.pergunta }}
                    </span>
                  </q-item-section>
                
                  <q-item-section side>
                    <div class="row items-center">
                      
                    </div>
                  </q-item-section>
                </template>

                <q-card class="bg-grey-9">
                  <q-card-section>
                    {{ faq.resposta }}
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const areas = ref([
    { id: 1, nome: "Direito das Famílias e Sucessões", descricao: "Conduzimos questões familiares com o equilíbrio entre a firmeza necessária e a sensibilidade humana."},
    { id: 2, nome: "Direito do Consumidor e Civil", descricao: "Protegemos seus direitos em relações de consumo e conflitos contratuais com foco na reparação de danos e proteção patrimonial."},
    { id: 3, nome: "Direito da Saúde", descricao: "Atuação técnica e célere para garantir o acesso ao direito fundamental à saúde."},
    { id: 4, nome: "Direito Trabalhista (Empregado e Empresa)", descricao: "Oferecemos assessoria estratégica para ambos os lados da relação de emprego, focando na redução de riscos e proteção de direitos."},
    { id: 5, nome: "Direito Previdenciário", descricao: "Análise rigorosa para garantir que você receba o benefício que lhe é devido por direito."},
]);

const faqs = ref([
  {id: 1, pergunta: "O INSS negou meu pedido. Ainda tenho chance?", resposta: "Sim. Muitos benefícios são negados por falhas na documentação ou erros de análise do órgão. Avaliamos o motivo do indeferimento e definimos a melhor estratégia para reverter a decisão, seja administrativamente ou na Justiça."},
  {id: 2, pergunta: "O que é o Salário Maternidade e quem tem direito? ", resposta: "É um benefício pago à pessoa que se afasta da atividade por motivo de nascimento de filho, adoção ou aborto não criminoso. A elegibilidade depende da qualidade de segurada e do cumprimento de carência, dependendo do caso."},
  {id: 3, pergunta: "Preciso de um advogado para pedir minha aposentadoria? ", resposta: "Embora não seja obrigatório, o planejamento e a análise técnica de um especialista evitam erros comuns que podem levar a uma aposentadoria com valor inferior ao que você teria direito"},
])

const diferenciais = ref([
  {id: 1, nome: "Atendimento próximo e individualizado", descricao: "Cada caso é analisado de forma única. Não trabalhamos com soluções padronizadas. Entendemos a realidade de cada cliente antes de definir qualquer estratégia jurídica."},
  {id: 2, nome: "Clareza e transparência na comunicação", descricao: "Explicamos cada etapa do processo de forma objetiva, sem excesso de termos técnicos. O cliente sabe exatamente quais são as possibilidades, riscos e próximos passos."},
  {id: 3, nome: "Estratégia jurídica fundamentada", descricao: "Nossa atuação é baseada em análise técnica rigorosa, estudo aprofundado da legislação e avaliação realista do cenário jurídico. Decisões são tomadas com planejamento, não por impulso."},
  {id: 4, nome: "Organização e acompanhamento constante", descricao: "Mantemos controle detalhado de prazos, documentos e movimentações processuais, garantindo segurança e previsibilidade na condução do caso."},
  {id: 5, nome: "Postura ética e responsável", descricao: "Não trabalhamos com promessas irreais. Nosso compromisso é com orientação honesta, atuação correta e construção de soluções juridicamente sustentáveis."},
  {id: 6, nome: "Equilíbrio entre firmeza e sensibilidade", descricao: "Sabemos que muitos conflitos envolvem questões pessoais delicadas. Atuamos com firmeza quando necessário, mas sempre com respeito à história e à dignidade de cada cliente."},
])

const imagem = ref("/images/luana.jpg");
const imagem2 = ref("/images/paula.jpg"); 

const saibaMais = (id: number) => {
    // logica
}
</script>
<!-- 
<style scoped>
/* ESSA É A CLASSE MÁGICA DO ALINHAMENTO */
.container-limit {
  max-width: 1200px; /* Largura igual para todos */
  margin: 0 auto;
  width: 100%;
}

.hero-section {
  min-height: 85vh; /* Altura confortável */
  background: #300212;
  /* Sem padding-top extra para não gerar buraco */
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
</style> -->