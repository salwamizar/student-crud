<script setup>
import { Icon } from '@iconify/vue'
</script>
<template>
    <div class="flex align-middle drop-shadow-lg bg-green-200 max-w-96 p-3 rounded-xl">
        <div class="bg-white/60 p-3 mr-2 rounded-xl">
            <Icon icon="mdi:success-circle-outline" class="text-green-600 size-8" />
        </div>
        <div class="flex justify-between w-full">
            <div>
                <h2 class="text-lg font-semibold">Status - Success</h2>
                <p class="text-sm truncate w-64">ini pesan errorasgbfyasdddddddddddddddddddddddddd</p>
            </div>
            <button class="close">
                <Icon icon="material-symbols:close-rounded" class="size-6 text-gray-500" />
            </button>
        </div>
    </div>
</template>