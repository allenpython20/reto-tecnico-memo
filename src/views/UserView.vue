<template>
    <div class="container mt-4">
        <h1 class="mb-3">Reto técnico,búsqueda de usuarios</h1>
        <SearchBar @on-send-search-term="handleSearchTerm"/>
        <NationalityFilter @on-select-nationality="handleChangeNationality"/>
        <hr>
        <UserTable :users="users"/>
    </div>
    
    
</template>

<script lang='ts' setup>
import NationalityFilter from '@/components/NationalityFilter.vue';
import SearchBar from '@/components/SearchBar.vue';
import UserTable from '@/components/UserTable.vue';


import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

onMounted(()=>{
    store.dispatch('fetchUsers');
})

const searchTerm = ref('')
const selectedNationalities = ref<string[]>([])
const users = computed(() => store.getters.filteredUsers(searchTerm.value));

const handleSearchTerm = (value:string) => {
    searchTerm.value = value
}

const handleChangeNationality = (nationalities:string[]) => {
    selectedNationalities.value = nationalities;
    store.dispatch('setNationalities', nationalities);
  
}

</script>

<style scoped>

</style>