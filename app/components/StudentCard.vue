<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import foto from '~/assets/pic1.jpg'

const showDetail = ref(false)
</script>
<template>
<div class="flex flex-col drop-shadow-lg rounded-xl bg-white max-w-48 h-80 p-2">
    <div class="bg-gray-500 w-full h-40 rounded-lg object-cover">
        <img src="" alt="" class="rounded-lg">
    </div>
    <div class="flex flex-col p-2 h-48">
        <p class="text-xl font-bold mb-2">John Doe</p>
            <div class="flex w-full justify-between align-center mb-2 text-gray-600 text-sm">
                <div class="">
                    <ul class="space-y-2">
                        <li>Kelas</li>
                        <li>NIS</li>
                        <li>Nilai</li>
                    </ul>
                </div>
                <div class="mb-2">
                    <ul class="space-y-2">
                        <li>XII MIPA A</li>
                        <li>123456</li>
                        <li>
                            <span class="w-8 bg-green-200 p-1 justify-center text-center rounded-lg font-bold text-green-800">90</span>
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
    <div class="bg-white max-w-2xl rounded-xl p-4 flex flex-col drop-shadow-lg">
        <div class="flex flex-row relative">
            <div class="max-w-48 mr-4 object-cover">
                <img :src="foto" alt="" class="rounded-lg">
            </div>
            <div class="flex">
                <div class="flex flex-col mr-4">
                    <div class="flex flex-col mb-2">
                        <label for="Nama" class="text-xs mb-1">Nama</label>
                        <input type="text" name="" id="" class="rounded-lg py-2 px-3 w-full text-sm truncate w-64 bg-gray-100" placeholder="John doeeeeeeeeeeeeeeeeeeeeeeeeeee">
                    </div>
                    <div class="flex flex-col mb-2">
                        <label for="Nama" class="text-xs mb-1">NIS</label>
                        <input type="text" name="" id="" class="rounded-lg py-2 px-3 w-full text-sm truncate w-64 bg-gray-100" placeholder="123456">
                    </div>
                    <div class="flex flex-col mb-2">
                        <label for="Nama" class="text-xs mb-1">Kelas</label>
                        <input type="text" name="" id="" class="rounded-lg py-2 px-3 w-full text-sm truncate w-64 bg-gray-100" placeholder="XII MIPA A">
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="flex flex-col mb-2">
                        <label for="Nama" class="text-xs mb-1">Email</label>
                        <input type="text" name="" id="" class="rounded-lg py-2 px-3 w-full text-sm truncate w-64 bg-gray-100" placeholder="johndoe@gmail.com">
                    </div>
                    <div class="flex flex-col mb-2">
                        <label for="Nama" class="text-xs mb-1">Nomor HP</label>
                        <input type="text" name="" id="" class="rounded-lg py-2 px-3 w-full text-sm truncate w-64 bg-gray-100" placeholder="089123456789">
                    </div>
                    <div class="flex flex-col mb-2">
                    <label for="Nilai" class="text-xs mb-1">Nilai</label>
                    <div class="">
                        <ul class="flex flex-row flex-wrap gap-2">
                            <li> <span class="w-8 bg-green-200 p-1 justify-center text-center rounded-lg font-bold text-green-800">90</span></li>
                            <li> <span class="w-8 bg-yellow-200 p-1 justify-center text-center rounded-lg font-bold text-yellow-800">60</span></li>
                            <li> <span class="w-8 bg-red-200 p-1 justify-center text-center rounded-lg font-bold text-red-800">30</span></li>
                            <li> <span class="w-8 bg-red-200 p-1 justify-center text-center rounded-lg font-bold text-red-800">30</span></li>
                            <li> <span class="w-8 bg-red-200 p-1 justify-center text-center rounded-lg font-bold text-red-800">30</span></li>
                            <li> <span class="w-8 bg-red-200 p-1 justify-center text-center rounded-lg font-bold text-red-800">30</span></li>
                            <li> <span class="w-8 bg-red-200 p-1 justify-center text-center rounded-lg font-bold text-red-800">30</span></li>
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