<script setup>
const props = defineProps({
    placeholder: {
        type: String,
        default: 'Masukkan angka...',
    },
})
</script>
<template>
    <div class=" mb-5">
        <input type="number" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-sky-500 block w-full p-2.5 " :placeholder="placeholder">
    </div>
</template>