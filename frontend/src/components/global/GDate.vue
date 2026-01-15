<template>
    <q-input
        @update:model-value="onInputRawChange"
        mask="##/##/####"
        outlined
        v-model="inputValue"
        :rules="computedRules"
    >
        <template v-if="!$attrs.readonly" v-slot:prepend>
            <q-icon name="calendar_month" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-date
                        :color="color"
                        mask="DD/MM/YYYY"
                        v-model="inputValue"
                        @update:model-value="onInputRawChange"
                    >
                        <template v-slot:default>
                            <q-btn :color="color" v-close-popup label="Fechar" />
                        </template>
                    </q-date>
                </q-popup-proxy>
            </q-icon>
        </template>
    </q-input>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import moment from "moment";

interface Props {
    rules?: Array<(val: string | null, rules?: any) => true | string>;
    data?: string | null;
    modelValue?: string | null;
    obrigatorio?: boolean;
    color?: string;
    emitirFormatoAmericano?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    rules: () => [],
    color: "primary",
    emitirFormatoAmericano: true,
});

const emit = defineEmits<{
    (e: "update:model-value", value: string | null): void;
    (e: "update:data", value: string | null): void;
}>();

const inputValue = ref<string | null>(null);
const ignoreNextWatch = ref(false);

const computedModel = computed<string | null>(() => {
    return props.data ?? props.modelValue ?? null;
});

const computedRules = computed(() => {
    const rules: Array<(val: string | null, rules?: any) => true | string> = [];

    rules.push(
        (val) => !val || val.length === 10 || "Data inválida",
        (val, rulesCtx) =>
        !val ||
        rulesCtx?.date(
            moment(val, "DD/MM/YYYY").format("YYYY/MM/DD")
        ) ||
        "Data inválida"
    );

    if (props.obrigatorio) {
        rules.push((val) => !!val || "Campo obrigatório");
    }

    rules.push(...props.rules);

    return rules;
});

watch(
    computedModel,
    (val) => {
        if (ignoreNextWatch.value) {
            ignoreNextWatch.value = false;
            return;
        }

        if (!val) {
            inputValue.value = null;
            return;
        }

        const isIso = /^\d{4}-\d{2}-\d{2}$/.test(val);
        const isBr = /^\d{2}\/\d{2}\/\d{4}$/.test(val);

        let iso: string;
        let br: string;

        if (isIso) {
            iso = val;
            br = moment(val, "YYYY-MM-DD").format("DD/MM/YYYY");
        } else if (isBr) {
            br = val;
            iso = moment(val, "DD/MM/YYYY").format("YYYY-MM-DD");
        } else {
            return;
        }

        inputValue.value = br;

        if (isBr) {
        ignoreNextWatch.value = true;

        const saida = props.emitirFormatoAmericano ? iso : br;

        emit("update:model-value", saida);
        emit("update:data", saida);
        }
    },
    { immediate: true }
);

/* =====================
   METHODS
===================== */

function onInputRawChange(val: string | number | null): void {
    ignoreNextWatch.value = true;

    if (!val || val.length < 10) {
        emit("update:model-value", null);
        emit("update:data", null);
        return;
    }

    const parsed = moment(val, "DD/MM/YYYY", true);
    const iso = parsed.isValid() ? parsed.format("YYYY-MM-DD") : null;

    inputValue.value = val;

    const saida = props.emitirFormatoAmericano ? iso : val;

    emit("update:model-value", saida);
    emit("update:data", saida);
}

function handleChange(val: string | null): void {
    onInputRawChange(val);
}

defineOptions({
    name: "g-date"
});
</script>
