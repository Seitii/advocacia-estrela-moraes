<template>
    <q-input
        v-model="inputValue"
        outlined
        :rules="computedRules"
        :type="computedType"
        :color="$q.dark.isActive ? 'white' : 'primary'"
        :text-color="$q.dark.isActive ? 'white' : 'black'"
        @update:model-value="handleOnChange"
    >
    </q-input>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch, onMounted, computed } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'text',
    },
    modelValue: {
        type: [String, Number, null],
        default: ''
    },
    validarCpf: {
        type: Boolean,
        default: false
    },
    rules: {
        type: Array as () => Array<(val: any) => true | string>,
        default: () => []
    }
});

const emit = defineEmits(['update:model-value']);
const inputValue = ref<string | number | null>(props.modelValue);

const handleOnChange = (value: string | number | null) => {
    inputValue.value = value;

    if(value !== props.modelValue) {
        emit("update:model-value", value);
    }
}

const computedType = computed<'text' | 'number'>(() => {
    return props.type === 'number' ? 'number' : 'text';
});

const computedRules = computed(() => {
    const regras = [...props.rules];

    if (props.validarCpf) {
        regras.push(regraCpf);
    }

    return regras;
});

const regraCpf = (value: string) => {
    if (!props.validarCpf) return true;

    if (!value || value.trim() === "") return true;

    const cpf = value.replace(/\D/g, "");
    if (cpf.length !== 11) return "CPF inválido";
    if (/^(\d)\1{10}$/.test(cpf)) return "CPF inválido";

    let soma = 0;
    for (let i = 1; i <= 9; i++) {
        soma += Number(cpf[i - 1]) * (11 - i);
    }

    let resto = (soma * 10) % 11;
    if (resto === 10) resto = 0;
    if (resto !== Number(cpf[9])) return "CPF inválido";

    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += Number(cpf[i - 1]) * (12 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10) resto = 0;
    if (resto !== Number(cpf[10])) return "CPF inválido";

    return true;
};


watch(() => props.modelValue, (newValue) => {
    if(newValue !== inputValue.value){
        inputValue.value = newValue;
    }
});

onMounted(() => {
    if(props.modelValue){
        // handleOnChange(props.modelValue);
        inputValue.value = props.modelValue;
    }
});

defineOptions({
    name: "g-input",
});
</script>