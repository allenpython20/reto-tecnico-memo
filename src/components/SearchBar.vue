<template>
    <div class="mb-3">
        <input type="text" class="form-control" placeholder="Buscar por nombre o apellido de usuario" v-model="searchTerm" @keyup="$emit('onSendSearchTerm',searchTerm)">
    </div>
    
</template>

<script lang='ts' setup>
import { ref } from 'vue';

interface Emits {
    (e:'onSendSearchTerm',value:string): void
}

const searchTerm = ref('')

defineEmits<Emits>()

</script>

<style scoped>

</style>