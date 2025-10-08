<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const newStudent = ref({
    name: '',
    nis: '',
    no_hp: '',
    email: '',
    kelas: '',
    nilai: ''
})

const loading = ref(false)

const submitForm = async () => {
    loading.value = true
    const payload = {
        ...newStudent.value,
        nis: String(newStudent.value.nis),
        nilai: Number(newStudent.value.nilai)
    }

    try {
        await $fetch('http://localhost:3001/students', {
            method: 'POST',
            body: payload
        })

        await navigateTo('/siswa')
        alert('Data berhasil ditambahkan!')
    } catch (err) {
        console.error(err)
        alert('Gagal menambahkan data siswa')
    } finally {
        loading.value = false
    }
}

</script>
<template>
    <div class="flex justify-center pt-4">
        <div class="max-w-96 bg-white flex flex-col p-4 rounded-lg drop-shadow-lg">
            <h1 class="text-xl font-bold mb-2">Tambahkan Data Siswa</h1>
            <hr>
            <form @submit.prevent="submitForm" class="max-w-sm mt-2">
                <div class="label-text flex max-w-24">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nama</label> 
                    <p class="text-red-500 pl-2">*</p>
                </div>
                <InputText v-model="newStudent.name" required placeholder="Nama"/>
                <div class="label-text flex max-w-24">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">NIS</label> 
                    <p class="text-red-500 pl-2">*</p>
                </div>
                <InputText v-model="newStudent.nis" required placeholder="12345"/>
                <div class="label-text flex max-w-24">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nomor Hp</label> 
                    <p class="text-red-500 pl-2">*</p>
                </div>
                <InputText v-model="newStudent.no_hp" required placeholder="08xxxxxxxxx"/>
                <div class="label-text flex max-w-24">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email</label> 
                    <p class="text-red-500 pl-2">*</p>
                </div>
                <InputText v-model="newStudent.email" required placeholder="example@gmail.com"/>
                <div class="label-text flex max-w-24">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Kelas</label> 
                    <p class="text-red-500 pl-2">*</p>
                </div>
                <OptionDropdown v-model="newStudent.kelas"  required optionsvalue="XII MIPA 1, XII MIPA 2"/>
                <div class="label-text flex max-w-24">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nilai</label> 
                    <p class="text-red-500 pl-2">*</p>
                </div>
                <InputNumber v-model="newStudent.nilai" required placeholder="Contoh: 90"/>
                <div class="flex gap-2">
                    <ContentButton text="Batal" variant="delete" />
                    <ContentButton type="submit" :text="loading ? 'Menambahkan...' : 'Tambah'" variant="submit" :disabled="loading" />
                </div>
            </form>
        </div>
    </div>
</template>