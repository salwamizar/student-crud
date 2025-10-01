<script setup>
import foto from '~/assets/pic1.jpg'

const { data: students} = await useFetch('http://localhost:3001/students')

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
    <div>
        <div class="flex justify-center pt-4">
            <NavigationBar />
        </div>
        <div class="p-20">
            <h1 class="font-bold text-2xl mb-2">Daftar Data Siswa</h1>
            <hr class="max-w-96">
            <div class="mt-4 flex gap-2">
                <StudentCard 
                nameData1="Nama",
                title="John Doe"
                nameData2="Kelas"
                data1="XII MIPA 2"
                nameData3="NIS"
                data2="123456"
                nameData4="Nomor Hp"
                data3="08912345678"
                nameData5="Email"
                data4="johndoe@gmail.com"
                nameData6="Nilai"
                :value="[90, 60, 30]"/>
            </div>
        </div>
    </div>
</template>
