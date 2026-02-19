<script setup lang="ts">
import { ref } from 'vue';
import type { User } from '../types/types';


const props = defineProps<{
    user: User,
    buttonText: string
}>();

const emit = defineEmits(['submit']);

const form = ref({ ...props.user});

const handleSubmit = () => emit('submit', form.value);
</script>

<template>

    <form @submit.prevent="handleSubmit">
        <label>email:</label>
        <input v-model="form.email" type="text" required />

        <label>Password:</label>
        <input v-model="form.password" type="text" required />

        <button type="submit">{{ props.buttonText }}</button>

    </form>
    
</template>