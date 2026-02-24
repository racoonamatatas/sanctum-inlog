<script setup lang="ts">
import { useRouter } from 'vue-router';
import { User } from '../types/types';
import { ref } from 'vue';
import UserForm from '../components/UserForm.vue';
import axios from 'axios';
import { postRequest } from '../../../service/http';


const router = useRouter();

const user = ref<User>({
    email: '',
    password: ''
});

const buttonText = 'Login';

const handleSubmit = async (data: User) => {
    await axios.get('/sanctum/csrf-cookie').then(async () => {
        await postRequest('/login', data);
        router.push({name: 'users.welcome'});
    });   
}
</script>

<template>
    <UserForm :user="user" :buttonText="buttonText"  @submit="handleSubmit" />

</template>