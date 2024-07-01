<template>
    <div class="table-responsive">
        <h3 class="">Lista de Usuarios</h3>
        <table class="table table-striped">
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Género</th>
                <th>Nacionalidad</th>
                <th>Foto</th>
                <th>Email</th>
            </tr>
            <tbody >
                <tr v-for="user in users" :key="user.email">
                    <td>{{ user.name.first }}</td>
                    <td>{{ user.name.last }}</td>
                    <td>{{ user.gender }}</td>
                    <td>{{ user.nat }}</td>
                    <td><img :src="user.picture.thumbnail" :alt="`Foto de ${user.name.first}`"></td>
                    <td>{{ user.email }}</td>
                </tr>
            </tbody>
            
        </table>
    </div>
    
</template>

<script lang='ts' setup>
import { User } from '@/interfaces/user.interface';


interface Props {
    users : User[]
}

defineProps<Props>()

</script>

<style scoped>

</style>