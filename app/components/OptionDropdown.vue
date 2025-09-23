<script setup>
const props = defineProps({
    options: {
        type: Array,
        default: () => ['Pilih Kelas..']
    },
})
</script>

<template>
    <div class="mb-5">
        <select name="" id="kelas" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
            <option disabled selected value="">{{ options[0] }}</option>
            <option 
            v-for="(opt, i) in options.slice(1)" 
            :key="i" 
            :value="opt"
            >
                {{ opt }}
            </option>
        </select>
    </div>
</template>