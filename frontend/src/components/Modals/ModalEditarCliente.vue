<template>
    <q-dialog>
        <g-card title="Perfil do Cliente">
            <div class="row q-gutter-md">
                <g-input
                    v-model="dados.nome"
                    dense
                    class="col"
                    outlined
                    label="Nome"
                />
                <g-input
                    v-model="dados.cpf"
                    dense
                    class="col"
                    outlined
                    :mask="dados.cpf.length > 14 ? '##.###.###/####-##' : '###.###.###-##'"
                    label="Cpf/Cnpj"
                />
            </div>
                <g-input
                    v-model="dados.observacao"
                    dense
                    class="q-mt-md"
                    outlined
                    label="Observação interna"
                />
            <div class="row q-gutter-x-md q-mt-md">
                <g-date
                    v-model="dados.data_nascimento"
                    label="Data de nascimento"
                    class="col"
                    outlined
                    dense
                />
                <g-input
                    v-model="dados.email"
                    dense
                    class="col"
                    outlined
                    label="E-mail"
                />
            </div>

            <div class="row q-gutter-x-md q-mt-md items-start">
                <q-list bordered class="rounded-borders col">
                    <q-expansion-item
                        expand-separator
                        icon="phone"
                        class="text-bold"
                        label="Telefones"
                    >
                        <!-- <div v-for="telefone in dados.telefone" :key="telefone.id" class="row q-gutter-sm q-mt-sm q-ml-sm">
                            <g-input
                                v-model="telefone.telefone"
                                dense
                                outlined
                                label="Telefone"
                            />
                            <g-btn
                                color="negative"
                                icon="delete"
                                @click="removerTelefone(telefone.id)"
                            />
                        </div>
                            <g-btn
                            class="q-mt-sm"
                            label="Adicionar Telefone"
                            @click="adicionarTelefone"
                            icon="add"
                        /> -->
                        <div class="q-pa-sm">
                            <g-input
                                v-model="dados.telefone"
                                dense
                                outlined
                                label="Telefone"
                            />
                        </div>
                    </q-expansion-item>
                </q-list>

                <q-list bordered class="rounded-borders col">
                    <q-expansion-item
                        expand-separator
                        icon="home"
                        label="Endereços"
                        class="text-bold"
                    >
                    <!-- <div v-for="endereco in dados.endereco" :key="endereco.id" class="row q-gutter-sm q-mt-sm q-ml-sm">
                        <q-checkbox
                                v-model="endereco.principal"
                                dense
                                :true-value="true"
                                :false-value="false"
                            />
                        <g-input
                            v-model="endereco.endereco"
                            dense
                            outlined
                            label="Endereço"
                        />
                        <g-btn
                            label="Editar"
                            @click="editarEndereco(endereco.id)"
                        />
                    </div>
                        <g-btn
                            label="Adicionar Endereço"
                            @click="adicionarEndereco"
                            icon="add"
                        /> -->
                        <div class="q-pa-sm">
                        <!-- <q-checkbox
                            v-model="endereco.principal"
                            dense
                            :true-value="true"
                            :false-value="false"
                        /> -->
                        <g-input
                            v-model="dados.endereco"
                            dense
                            outlined
                            label="Endereço"
                        />
                    </div>
                    </q-expansion-item>
                </q-list>
            </div>

            <g-btn
                class="q-mt-md"
                label="Atualizar Dados"
                @click="salvarDados"
            />
        </g-card>
    </q-dialog>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {Clientes} from "../cliente";

const props = defineProps<{
    cliente: Clientes;
}>();

const selected = ref<string | boolean>(false);
const dados = ref({...props.cliente});

const adicionarTelefone = () => {
    console.log("Adicionar Telefone");
}

const removerTelefone = (id: number) => {
    console.log("Remover telefone", id);
}

const adicionarEndereco = () => {
    dados.value.endereco.push({
        id: Date.now(),
        endereco: "",
        principal: false
    })
}

const editarEndereco = (id: number) => {
    console.log("Editar Endereço", id);
}

const salvarDados = () => {
    console.log("Salvar Dados", dados.value);
}
</script>