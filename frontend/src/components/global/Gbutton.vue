<template>
    <q-btn
        :style="{
            backgroundColor: $q.dark.isActive ? '#fbbf24' : '#fbbf24',
            border: '1px solid #fbbf24',
            padding: '4px 24px'
        }"
        text-color="black"
        dense
    >
    </q-btn>
</template>

<script setup lang="ts">
import {ref} from "vue";

defineOptions({
    name: "g-btn"
});
</script>