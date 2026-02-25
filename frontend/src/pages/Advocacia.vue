<template>
  <div>
    <section class="hero-section row items-center relative-position">
      <div class="hero-overlay absolute-full"></div>
      <div class="container-limit q-px-md relative-position">
        <div class="row items-center q-col-gutter-xl">
          <div class="col-12 col-md-6">
            <div class="row items-center q-mb-md">
              <q-separator color="amber" style="width: 40px" class="q-mr-sm"/>
              <div class="text-amber text-uppercase letter-spacing-md text-caption text-bold">
                Excelência Jurídica
              </div>
            </div>

            <h1 class="text-h3 q-mb-md">
              Segurança jurídica e clareza para proteger o que é essencial na sua vida.
            </h1>

            <p class="text-body1 text-grey-4">
              No Estrela & Moraes Advocacia, acreditamos que o Direito não deve ser um peso, mas uma solução. 
              Atuamos com ética, rigor técnico e uma comunicação direta para resolver seus conflitos sem burocracias desnecessárias.
            </p>

            <div class="row q-gutter-md q-mt-sm">
              <g-btn
                label="Contatar Especialista"
                class="q-px-xl q-py-sm text-bold full-width-mobile"
                rounded
                @click="consulta"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container-limit q-px-md ">
      <div class="column items-start q-mb-xl">
        <h1 class=" text-h3 q-mb-md">Áreas de Atuação</h1>
        <p class="hero-description text-grey-8 text-h6">Soluções Estratégicas e Humanizadas.</p>
        <p class="text-body1 text-grey-4">
          No <span class="text-bold">Estrela & Moraes Advocacia </span>, cada demanda é tratada com rigor técnico e respeito à história de quem nos procura. 
          Nosso objetivo é transformar problemas complexos em caminhos seguros.
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
              <div class="text-h5 text-bold q-mb-sm line-height-tight">
                {{ area.nome }}
              </div>
              <div class="text-body1 text-grey-4 text-body">
                {{ area.descricao }}
              </div>
            </q-card-section>
            <q-card-actions align="left">
              <g-btn flat label="Saber mais" icon-right="arrow_forward" class="q-px-none" dense />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </section>

    <section class="container-limit q-px-md ">
      <div class="column items-start q-mb-xl">
        <h1 class="text-h3 q-mb-md">Sócias</h1>
        <span class="text-h4 text-amber">Quem somos</span>
        <p class="text-body1 text-grey-4 q-my-none q-mt-sm">
          O Estrela & Moraes Advocacia atua com responsabilidade, técnica e atendimento humanizado, oferecendo estratégias jurídicas seguras e acompanhamento próximo nas áreas Cível, Família, Saúde, Trabalhista e Previdenciária.
        </p>
      </div>

      <div class="row q-col-gutter-xl items-center">
        <div class="col-12 col-md-6 flex column items-center">
          <div class="image-frame relative-position q-mb-lg">
            <div class="absolute-top-right bg-amber" style="width: 100px; height: 100px; right: -20px; top: -20px; z-index: 0; opacity: 0.8"></div>
            <div class="absolute-bottom-left bg-blue-grey-9" style="width: 100px; height: 100px; left: -20px; bottom: -20px; z-index: 0;"></div>
            <q-img :src="imagem" style="max-width: 100%; width: 300px;" :ratio="1" class="rounded-borders shadow-20 relative-position" />
          </div>
          <div class="text-center" style="max-width: 400px;">
            <div class="text-h5 text-bold q-mb-xs">Luana Estrela</div>
            <p class="hero-description text-grey-8 text-body text-h6 q-mb-md">Advogada com foco em soluções claras e eficientes, garantindo que o Direito seja acessível, eficiente e justo.</p>
            <g-btn label="Ver perfil completo"/>
          </div>
        </div>

        <div class="col-12 col-md-6 flex column items-center">
          <div class="image-frame relative-position q-mb-lg">
            <div class="absolute-top-right bg-amber" style="width: 100px; height: 100px; right: -20px; top: -20px; z-index: 0; opacity: 0.8"></div>
            <div class="absolute-bottom-left bg-blue-grey-9" style="width: 100px; height: 100px; left: -20px; bottom: -20px; z-index: 0;"></div>
            <q-img :src="imagem2" style="max-width: 100%; width: 300px;" :ratio="1" class="rounded-borders shadow-20 relative-position" />
          </div>
          <div class="text-center" style="max-width: 400px;">
            <div class="text-h5 text-bold q-mb-xs">Paula Morais</div>
            <p class="hero-description text-grey-8 text-body text-h6 q-mb-md">Advogada reconhecida por seu perfil técnico, objetivo e rigoroso, conduz sua atuação com elevado padrão de correção jurídica.</p>
            <g-btn label="Ver perfil completo"/>
          </div>
        </div>
      </div>
    </section>

    <section class="q-py-xl"> 
      <div class="container-limit q-px-md">
        <div class="column items-center text-center">
          <h1 class="text-h3 q-mb-md">Por que nos escolher?</h1>
          <p class="hero-description text-grey-8 text-body text-h6">Nossos Diferenciais</p>
        </div>

        <div class="row q-col-gutter-lg">
          <div v-for="diferencial in diferenciais" :key="diferencial.id" class="col-12 col-sm-6 col-md-4">
            <q-card class="area-card full-height no-shadow cursor-pointer"> 
              <q-card-section>
                <div class="text-amber q-mb-sm">
                  <q-icon name="check_circle" size="md" /> </div>
                <div class="text-h6 text-bold q-mb-sm line-height-tight">
                  {{ diferencial.nome }}
                </div>
                <div class="text-body1 text-grey-4 text-body">
                  {{ diferencial.descricao }}
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <section class="container-limit q-px-md">
      <div class="row q-col-gutter-xl items-center q-mb-sm">
          <div class="col-12 col-md-6">
            <h1 class="text-h3 text-bold q-mb-md">Seu benefício foi negado?</h1>
            <p class="text-body1 text-grey-4 q-mb-lg">
              Muitos brasileiros enfrentam insegurança e frustração ao ter aposentadorias negadas ou benefícios indeferidos pelo INSS. Não deixe o seu benefício ser negado por falta de estratégia jurídica.
            </p>
            <g-btn
              label="Falar com Especialista em INSS"
              class="q-px-lg q-py-sm text-bold"
              rounded
              @click="consulta"
              icon="phone"
            />
          </div>
          <div class="col-12 col-md-6">
             <q-card class="bg-white q-pa-md">
                <q-card-section>
                  <div class="text-h6 text-bold q-mb-md text-dark">Nossos Serviços Previdenciários</div>
                  <q-list dense>
                    <q-item>
                      <q-item-section avatar><q-icon color="amber" name="check_circle" /></q-item-section>
                      <q-item-section class="text-dark">Aposentadorias e Revisões</q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section avatar><q-icon color="amber" name="check_circle" /></q-item-section>
                      <q-item-section class="text-dark">Salário Maternidade e BPC/LOAS</q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section avatar><q-icon color="amber" name="check_circle" /></q-item-section>
                      <q-item-section class="text-dark">Auxílio-Doença e Aposentadoria por Invalidez</q-item-section>
                    </q-item>
                  </q-list>
                </q-card-section>
             </q-card>
          </div>
        </div>
    </section>

    <section class="container-limit q-px-md q-mb-xl">
      <div class="column q-mb-xl">
        <h1 class="text-h3 q-mb-md">Perguntas Frequentes</h1>
        
        <q-list bordered class="rounded-borders">
          <q-expansion-item 
            v-for="faq in faqs" 
            :key="faq.id" 
            expand-separator
            header-class="text-bold text-h6"
          >
            <template v-slot:header>
              <q-item-section>
                {{ faq.pergunta }} </q-item-section>
            </template>

            <q-card class="bg-grey-1"> <q-card-section class="text-body1 text-black">
                {{ faq.resposta }}
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
    </section>
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
    { id: 4, nome: "Direito Trabalhista Empregado e Empresa", descricao: "Assessoria estratégica na relação de emprego, focando na redução de riscos e proteção de direitos."},
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

const consulta = () => {
    const numeroDestino = "5561920055898";
    const mensagem = `
        Olá, Dra.Luana Estrela, gostararia de verificar um processo com vocês.
    `;

    const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
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
  min-height: 50vh; /* Altura confortável */
  background: #300212;
  /* Sem padding-top extra para não gerar buraco */
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

.divider-amber { width: 60px; height: 4px; background: #f59e0b; }

.area-card {
  border: 1px solid;
  transition: all 0.3s ease;
  background: transparent;
}
.area-card:hover {
  border-color: #f59e0b;
  transform: translateY(-5px);
  box-shadow: 0 10px 30px -10px rgba(245, 158, 11, 0.2);
}
.line-height-tight { line-height: 1.2; }
.font-serif { font-family: 'Georgia', 'Times New Roman', serif; }
.letter-spacing-md { letter-spacing: 0.2em; }
</style>