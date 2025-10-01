<script setup>
import {ref} from 'vue'
import NavigationBar from '~/components/NavigationBar.vue'
import OptionDropdown from '~/components/OptionDropdown.vue'

const newStudent = ref({
    name: '',
    nis: '',
    no_hp: '',
    email: '',
    kelas: '',
    nilai: ''
})

async function tambahSiswa() {
    await $fetch('http://localhost:3001/students', {
        method: 'POST',
        body: newStudent.value
    })
    alert('Data Siswa berhasil ditambahkan')
}
</script>
<template>
    <div class="flex justify-center pt-4">
        <div class="max-w-96 bg-white flex flex-col p-4 rounded-lg drop-shadow-lg">
            <h1 class="text-xl font-bold mb-2">Tambahkan Data Siswa</h1>
            <hr>
            <form class="max-w-sm mt-2" @submit.prevent="tambahSiswa">
                <div class="label-text flex max-w-24">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nama</label> 
                    <p class="text-red-500 pl-2">*</p>
                </div>
                <InputText placeholder="Nama"/>
                <div class="label-text flex max-w-24">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">NIS</label> 
                    <p class="text-red-500 pl-2">*</p>
                </div>
                <InputText placeholder="123456"/>
                <div class="label-text flex max-w-24">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nomor Hp</label> 
                    <p class="text-red-500 pl-2">*</p>
                </div>
                <InputText placeholder="08xxxxxxxxx"/>
                <div class="label-text flex max-w-24">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email</label> 
                    <p class="text-red-500 pl-2">*</p>
                </div>
                <InputText placeholder="example@gmail.com"/>
                <div class="label-text flex max-w-24">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Kelas</label> 
                    <p class="text-red-500 pl-2">*</p>
                </div>
                <OptionDropdown optionsvalue="XII MIPA 1, XII MIPA 2"/>
                <div class="label-text flex max-w-24">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nilai</label> 
                    <p class="text-red-500 pl-2">*</p>
                </div>
                <InputNumber placeholder="Contoh: 90"/>
                <div class="flex gap-2">
                    <ContentButton text="Batal" variant="delete" />
                    <ContentButton text="Tambah" variant="submit" />
                </div>
            </form>
        </div>
    </div>
</template>