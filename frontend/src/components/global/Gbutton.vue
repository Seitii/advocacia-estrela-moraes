<template>
    <q-btn
        :color="$q.dark.isActive ? 'white' : 'black'"
        :text-color="$q.dark.isActive ? 'black' : 'white'"
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