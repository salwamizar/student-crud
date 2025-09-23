<script setup>
const props = defineProps({
    text: {
        type: String,
        default: 'Submit'
    },
    variant: {
        type: String,
        default: 'submit'
    },
})

const typeStyles = {
    submit: {
        bg: 'bg-blue-200',
        hoverbg: 'hover:bg-blue-600'
    },
    edit: {
        bg: 'bg-yellow-200',
        hoverbg: 'hover:bg-yellow-600'
    },
    delete: {
        bg: 'bg-red-200',
        hoverbg: 'hover:bg-red-600'
    }
}
</script>
<template>
    <div class="">
        <button :class="['px-4 py-2 rounded-full font-bold duration-300', typeStyles[variant].bg, typeStyles[variant].hoverbg, ' hover:text-white']">
            <a href="">{{ text }}</a>
        </button>
    </div>
</template>