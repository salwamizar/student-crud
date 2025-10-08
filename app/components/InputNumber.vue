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
    <div class=" mb-5">
        <input type="number" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-sky-500 block w-full p-2.5 " 
        :placeholder="placeholder" 
        :value="modelValue" @input="emit('update:modelValue', $event.target.value)">
    </div>
</template>