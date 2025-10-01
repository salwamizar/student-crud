<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import foto from '~/assets/pic1.jpg'

const props = defineProps({
    foto: String, //foto
    title: String, //nama
    nameData1: String, //kolom nama
    nameData2: String, //kolom kelas
    nameData3: String, //kolom nis
    nameData4: String, //kolom nomorhp
    nameData5: String, //kolom email
    nameData6: String, //kolom nilai
    data1: String, //kelas
    data2: String, //nis
    data3: String, //nomorhp
    data4: String, //email
    value: {
        type: Array,
        default: () => []
    }
})
const showDetail = ref(false)
</script>
<template>
<div class="flex flex-col drop-shadow-lg rounded-xl bg-white max-w-48 h-80 p-2">
    <div class="aspect-square bg-gray-500 w-full rounded-lg overflow-hidden">
        <img :src="foto" alt="" class="rounded-lg object-cover">
    </div>
    <div class="flex flex-col p-2 h-48">
        <p class="text-xl font-bold mb-2">{{ title }}</p>
            <div class="flex w-full justify-between align-center mb-2 text-gray-600 text-sm">
                <div class="">
                    <ul class="space-y-2">
                        <li>{{ nameData2 }}</li>
                        <li>{{ nameData3 }}</li>
                        <li>{{ nameData4 }}</li>
                    </ul>
                </div>
                <div class="mb-2">
                    <ul class="space-y-2">
                        <li>{{ data1 }}</li>
                        <li>{{ data2 }}</li>
                        <li>
                            <span class="w-8 bg-green-200 p-1 justify-center text-center rounded-lg font-bold text-green-800">{{ value[0] }}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="flex flex-row gap-x-2 justify-center">
                <button 
                @click="showDetail = true"
                class="group bg-blue-200 rounded-lg w-8 p-1 flex justify-center hover:w-20 duration-300 overflow-hidden">
                    <Icon icon="humbleicons:eye" class="w-5 h-5 text-blue-800 flex-shrink-0 group-hover:hidden" />
                    <span class="ml-2 text-blue-800 text-sm font-medium hidden group-hover:inline transition-discrete">Lihat</span>
                </button>
                <button class="group bg-yellow-200 rounded-lg w-8 p-1 flex justify-center hover:w-20 duration-300 overflow-hidden">
                    <Icon icon="material-symbols:edit-outline-sharp" class="w-5 h-5 text-yellow-800 flex-shrink-0 group-hover:hidden" />
                    <span class="ml-2 text-yellow-800 text-sm font-medium hidden group-hover:inline transition-discrete">Edit</span>
                </button>
                <button class="group bg-red-200 rounded-lg w-8 p-1 flex justify-center hover:w-20 duration-300 overflow-hidden">
                    <Icon icon="mdi:trash" class="w-5 h-5 text-red-800 flex-shrink-0 group-hover:hidden" />
                    <span class="ml-2 text-red-800 text-sm font-medium hidden group-hover:inline transition-discrete">Hapus</span>
                </button>
            </div>
    </div>
</div>

<div v-if="showDetail" click.self="showDetail = false" class="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div class="bg-white max-w-3xl rounded-xl p-4 flex flex-col drop-shadow-lg">
        <div class="flex flex-row relative">
            <div class="w-full aspect-square max-w-48 mr-4 bg-gray-500 rounded-lg">
                <img :src="foto" alt="" class="rounded-lg object-cover">
            </div>
            <div class="flex">
                <div class="flex flex-col mr-4">
                    <div class="flex flex-col mb-2">
                        <label for="Nama" class="text-xs mb-1">{{ nameData1 }}</label>
                        <input type="text" name="" id="" class="rounded-lg py-2 px-3 w-full text-sm truncate w-64 bg-gray-100" :value="title" readonly>
                    </div>
                    <div class="flex flex-col mb-2">
                        <label for="Nama" class="text-xs mb-1">{{ nameData2 }}</label>
                        <input type="text" name="" id="" class="rounded-lg py-2 px-3 w-full text-sm truncate w-64 bg-gray-100" :value="data1" readonly>
                    </div>
                    <div class="flex flex-col mb-2">
                        <label for="Nama" class="text-xs mb-1">{{ nameData3 }}</label>
                        <input type="text" name="" id="" class="rounded-lg py-2 px-3 w-full text-sm truncate w-64 bg-gray-100" :value="data2" readonly>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="flex flex-col mb-2">
                        <label for="Nama" class="text-xs mb-1">{{ nameData4 }}</label>
                        <input type="text" name="" id="" class="rounded-lg py-2 px-3 w-full text-sm truncate w-64 bg-gray-100" :value="data3" readonly>
                    </div>
                    <div class="flex flex-col mb-2">
                        <label for="Nama" class="text-xs mb-1">{{ nameData5 }}</label>
                        <input type="text" name="" id="" class="rounded-lg py-2 px-3 w-full text-sm truncate w-64 bg-gray-100" :value="data4" readonly>
                    </div>
                    <div class="flex flex-col mb-2">
                    <label for="Nilai" class="text-xs mb-1">{{ nameData6 }}</label>
                    <div class="">
                        <ul class="flex flex-row flex-wrap gap-2">
                            <li v-for="(n, i) in value" :key="i"> 
                                <span 
                                class="w-8 p-1 justify-center text-center rounded-lg font-bold"
                                 :class="n >= 80 ? 'bg-green-200 text-green-800' : n >= 60 ? 'bg-yellow-200 text-yellow-800' : 'bg-red-200 text-red-800'">{{ n }}</span></li>
                            <!-- <li> <span class="w-8 bg-green-200 p-1 justify-center text-center rounded-lg font-bold text-green-800">90</span></li>
                            <li> <span class="w-8 bg-yellow-200 p-1 justify-center text-center rounded-lg font-bold text-yellow-800">60</span></li>
                            <li> <span class="w-8 bg-red-200 p-1 justify-center text-center rounded-lg font-bold text-red-800">30</span></li>
                            <li> <span class="w-8 bg-red-200 p-1 justify-center text-center rounded-lg font-bold text-red-800">30</span></li>
                            <li> <span class="w-8 bg-red-200 p-1 justify-center text-center rounded-lg font-bold text-red-800">30</span></li>
                            <li> <span class="w-8 bg-red-200 p-1 justify-center text-center rounded-lg font-bold text-red-800">30</span></li>
                            <li> <span class="w-8 bg-red-200 p-1 justify-center text-center rounded-lg font-bold text-red-800">30</span></li> -->
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            <button @click="showDetail = false" class=" absolute -top-10 -right-10" >
                <Icon icon="material-symbols:close-rounded" class="size-6 text-white" />
            </button>
        </div>
        <div class="flex flex-row-reverse gap-2">
            <button class="bg-red-200 p-2 rounded-lg text-red-800 text-base">Hapus</button>
            <button class="bg-yellow-200 p-2 rounded-lg text-yellow-800">Edit</button>
        </div>
    </div>
</div>
</template>