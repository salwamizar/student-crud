<script setup>
import { Icon } from '@iconify/vue'

const props = defineProps({
    type:{
        type: String, 
        default: 'success',
    },
    title:{
        type: String,
        default: 'Status',
    },
    message:{
        type: String,
        default: 'lorem ipsum',
    },
})

const typeStyles = {
    success: {
        bg: 'bg-green-200',
        iconBg: 'bg-white/60',
        icon: 'mdi:success-circle-outline',
        iconColor: 'text-green-600'
    },
    error: {
        bg: 'bg-red-200',
        iconBg: 'bg-white/60',
        icon: 'mdi:close-circle-outline',
        iconColor: 'text-red-600'
    },
    warning: {
        bg: 'bg-yellow-200',
        iconBg: 'bg-white/60',
        icon: 'mdi:alert-circle-outline',
        iconColor: 'text-yellow-600'
    },
    info: {
        bg: 'bg-blue-200',
        iconBg: 'bg-white/60',
        icon: 'mdi:information-outline',
        iconColor: 'text-blue-600'
    },
}

const style = computed(() => typeStyles[props.type] || typeStyles.success)

</script>

<template>
<div :class="['flex items-center drop-shadow-lg max-w-96 p-3 rounded-xl', style.bg]">
    <div :class="['p-3 mr-2 rounded-xl', style.iconBg]">
        <Icon :icon="style.icon" :class="[style.iconColor,'size-8']"/>
    </div>
    <div class="flex justify-between w-full">
        <div class="">
            <h2 class="text-lg font-semibold">{{ title }}</h2>
            <p class="text-sm truncate w-64">{{ message }}</p>
        </div>
        <button>
            <Icon icon="material-symbols:close-rounded" class="size-6 text-gray-500" />
        </button>
    </div>
</div>
</template>