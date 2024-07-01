<template>
    <div class="mb-3"> 
        <h5 class="text-left">Seleccione las nacionalidades de los usuarios a buscar</h5>
        <select class="form-select" v-model="selectedNationalities"  @change="changeNationality"  multiple>
            <option v-for="nat in listNationalitys" :key="nat.co" :value="nat">
                {{ nat.name }}
            </option>
        </select>
    </div>
    

</template>

<script lang='ts' setup>
import { ref } from 'vue';

interface Nationality {
  co: string;
  name: string;
}

interface Emits{
    (e:'onSelectNationality',value:string[]):void
}

const emits = defineEmits<Emits>();

const listNationalitys = ref<Nationality[]>([
    { co: 'AU', name: 'Australia' },
    { co: 'BR', name: 'Brazil' },
    { co: 'CA', name: 'Canada' },
    { co: 'CH', name: 'Switzerland' },
    { co: 'DE', name: 'Germany' },
    { co: 'DK', name: 'Denmark' },
    { co: 'ES', name: 'Spain' },
    { co: 'FI', name: 'Finland' },
    { co: 'FR', name: 'France' },
    { co: 'GB', name: 'United Kingdom' },
    { co: 'IE', name: 'Ireland' },
    { co: 'IR', name: 'Iran' },
    { co: 'NO', name: 'Norway' },
    { co: 'NL', name: 'Netherlands' },
    { co: 'NZ', name: 'New Zealand' },
    { co: 'TR', name: 'Turkey' },
    { co: 'US', name: 'United States' },
]);

const selectedNationalities = ref<Nationality[]>([]);

const changeNationality = () => {
    const selectedCodes = selectedNationalities.value.map(nat => nat.co);
    emits('onSelectNationality',selectedCodes)
    
}
    
</script>

<style scoped>
h5{
    text-align: left;
}
</style>