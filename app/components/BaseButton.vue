<script setup>
const props = defineProps({
    text: {
        type: String,
        default: 'Submit'
    }
})
</script>
<template>
    <div class="">
        <button class="px-4 py-2 bg-blue-300 rounded-full font-bold hover:bg-blue-600 duration-300 hover:text-white"><a href="">{{ text }}</a></button>
    </div>
</template>