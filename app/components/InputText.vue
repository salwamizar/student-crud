<script setup>
const props = defineProps({
        modelValue: {
        type: [String, Number],
        default: ''
    },
    placeholder: {
        type: String,
        default: 'Masukkan angka...',
    },
})
const emit = defineEmits(['update:modelValue'])
</script>
<template>
    <div class="mb-5">
        <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        :placeholder="placeholder" 
        :value="modelValue" @input="emit('update:modelValue', $event.target.value)">
    </div>
</template>