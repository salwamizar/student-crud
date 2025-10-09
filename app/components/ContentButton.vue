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
    type: {
        type: String,
        default: 'button'
    },
    to: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    }
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
    },
    done: {
        bg: 'bg-green-200',
        hoverbg: 'hover:bg-green-600'
    }
}
</script>
<template>
    <NuxtLink 
    v-if="to"
    :to="to"
        class="inline-block px-4 py-2 rounded-full font-bold text-white text-center duration-300"
    :class="[typeStyles[variant].bg, typeStyles[variant].hoverbg]"
    >
        {{ text }}
    </NuxtLink>
    <button
        v-else
        :type="type"
        :disabled="disabled"
        class="px-4 py-2 rounded-full font-bold text-white duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        :class="[typeStyles[variant].bg, typeStyles[variant].hoverbg]"
    >
        {{ text }}
    </button>
</template>