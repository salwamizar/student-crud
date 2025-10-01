<script setup>
const props = defineProps({
    placeholder: {
        type: String,
        default: "Pilih..."
    },
    optionsvalue: {
        type: String,
        default: "option 1, option 2"
    }
})

// convert string jadi array
const optionList = computed(() => props.optionsvalue.split(",").map(o => o.trim()))

</script>

<template>
    <div class="mb-5">
        <select name="" id="kelas" placeholder="Pilih" class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
            <option>{{ placeholder }}</option>
            <option v-for="(opt, i) in optionList" :key="i" value="opt">{{ opt }}</option>
        </select>
    </div>
</template>