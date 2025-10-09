<script setup>
import Card from '~/components/Card.vue'
import Toast from '~/components/Toast.vue'

const { data: students, pending, error, refresh } = await useFetch('http://localhost:3001/students', {
    key: 'students',
    immediate: true,
    dedupe: false,
    transform: (res) => res
})

const showToast = ref(false)
const toastData = ref({ type: '', title: '', message: ''})

function triggerToast(type, message = '') {
    if( type === 'success') {
        toastData.value = {
            type: 'success',
            title: 'Success',
            message: message || 'Data berhasil disimpan.'   
        }
    } else if (type === 'warning') {
        toastData.value = {
            type: 'warning',
            title: 'Warning!',
            message: message || 'Pastikan semua data terisi.'
        }
    } else if (type === 'error'){
        toastData.value = {
            type: 'error',
            title: 'Error',
            message: message || 'Terjadi kesalahan'
        }
    } else if (type === 'info'){
        toastData.value = {
            type: 'info',
            title: 'Information',
            message: message || 'Ada pemberitahuan'
        }
    }

    showToast.value = true

    setTimeout(() => {
      showToast.value = false  
    }, 3000)
}

const handleDelete = async (id) => {
    try {
        students.value = students.value.filter(s => s.id !== id)

        const res = await fetch(`http://localhost:3001/students/${id}`, {
            method: 'DELETE',
        })

        if (!res.ok) {
            throw new Error('Gagal menghapus data')
        }
        triggerToast('success', 'Data berhasil dihapus!')
        await refresh()
    } catch (err) {
        console.error(err)
        triggerToast('error', 'Terjadi kesalahan saat menghapus data')
    }
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
            <div class="mt-4 flex gap-2 flex-wrap">
                <Card 
                v-for="s in students"
                :key="s.id"
                :id="s.id"
                nameData1="Nama",
                :title="s.name"
                nameData2="Kelas"
                :data1="s.kelas"
                nameData3="NIS"
                :data2="s.nis"
                nameData4="Nomor Hp"
                :data3="s.no_hp"
                nameData5="Email"
                :data4="s.email"
                nameData6="Nilai"
                :value="Array.isArray(s.nilai) ? s.nilai : [s.nilai]"
                @delete="handleDelete"/>
            </div>

            <transition 
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="translate-y-10 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition-all duration-300 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-10 opacity-0"
            >
                <Toast 
                v-if="showToast" 
                :type="toastData.type"
                :title="toastData.title"
                :message="toastData.message"
                class="fixed top-5 right-5 z-50"
                />
            </transition>
        </div>
    </div>
</template>
