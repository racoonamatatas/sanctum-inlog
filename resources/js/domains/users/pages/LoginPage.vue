<script setup lang="ts">
import { useRouter } from 'vue-router';
import { User } from '../types/types';
import { ref } from 'vue';
import UserForm from '../components/UserForm.vue';


const router = useRouter();

const user = ref<User>({
    email: '',
    password: ''
});

const buttonText = 'Login';

const handleSubmit = async (data: User) => {
    // await ...
    router.push({name: 'app.welcome'});
}
</script>

<template>
    <UserForm :user="user" :buttonText="buttonText"  @submit="handleSubmit" />

</template>