<script setup lang="ts">
import { ref } from 'vue';
import { getRequest } from '../../../service/http';


const fetchMe = async () => {
    const response = await getRequest('/me');
};

</script>

<template>
    <div>
        <button @click="fetchMe">Test /me</button>
    </div>
</template>