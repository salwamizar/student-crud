<script setup>
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
            <div class="mt-4">
                <StudentCard />
            </div>
        </div>
    </div>
</template>
