<script setup>
const { data: students, refresh } = await useFetch('http://localhost:3001/students')

// fungsi untuk menghapus data
async function hapusSiswa(id) {
    await $fetch(`http://localhost:3001/students/${id}`, {
        method: 'DELETE'
    })
    alert(`Siswa dengan ID ${id} telah dihapus`)
    // refresh setelah hapus data
    refresh()
}

// fungsi untuk edit data
async function editSiswa(id, updatedData) {
    await $fetch(`http://localhost:3001/students/${id}`, {
        method: 'PUT',
        body: updatedData
    })
    alert('Data siswa berhasil diperbarui')
    
}

</script>

<template>
    <h1>ini halaman siswa</h1>
    <button><NuxtLink to="tambahsiswa">Tambah Data Siswa</NuxtLink></button>
    
    <div class="" v-if="!students || !students.length">
        Data not found
    </div>

    <div class="relative overflow-x-auto" v-else>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Nama Siswa
                    </th>
                    <th scope="col" class="px-6 py-3">
                        NIS
                    </th>
                    <th scope="col" class="px-6 py-3">
                        No Hp
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Kelas
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Nilai
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200" v-for="s in students" :key="s.id">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{s.id}}
                    </th>
                    <td class="px-6 py-4">
                        {{s.name}}
                    </td>
                    <td class="px-6 py-4">
                        {{s.nis}}
                    </td>
                    <td class="px-6 py-4">
                        {{s.no_hp}}
                    </td>
                    <td class="px-6 py-4">
                        {{s.email}}
                    </td>
                    <td class="px-6 py-4">
                        {{s.kelas}}
                    </td>
                    <td class="px-6 py-4">
                        {{s.nilai}}
                    </td>
                    <td>
                        <div class="">
                            <button @click="hapusSiswa(s.id)">Delete</button>
                            <button><NuxtLink to="editsiswa">Edit</NuxtLink></button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>
