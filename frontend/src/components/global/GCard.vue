<template>
    <q-card
        flat
        style="max-width: 100vw; max-height: 100vh;"
    >
        <q-bar
            v-if="!hideTopBorder"
            dense
            style="height: 4px;"
            :class="borderBgColor"
        />

        <q-toolbar
            class="q-mt-xs"
        >
            <q-toolbar-title>{{ title }}</q-toolbar-title>
            <div class="q-gutter-sm row items-center">
                <slot name="top-right"/>

                <q-btn
                    v-close-popup
                    icon="close"
                />
            </div>
        </q-toolbar>

        <q-card-section>
            <slot></slot>
        </q-card-section>

        <q-card-actions v-if="$slots['bottom-left']">
            <slot name="bottom-left"/>
        </q-card-actions>

        <q-card-actions align="right" v-if="$slots['bottom-right']">
            <slot name="bottom-right"/>
        </q-card-actions>
    </q-card>
</template>

<script setup lang="ts">

defineOptions({
    name: "g-card"
});

interface Props {
    title?: string;
    hideTopBorder?: boolean;
    hideCloseButton?: boolean;
    borderBgColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
    borderBgColor: "bg-primary"
});
</script>