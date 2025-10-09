<script setup>
import { ref } from 'vue'
import Toast from '~/components/Toast.vue'
import Form from '~/components/Form.vue'
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

const handleAdd = async (newStudent) => {
    try {
        const res = await $fetch('http://localhost:3001/students', {
            method: 'POST',
            body: newStudent,
            onRequestError: (err) => console.log('Request error:', err),
            onResponseError: (err) => console.log('Response error:', err)
        })

        triggerToast('success', 'Data berhasil ditambahkan!')
        setTimeout(() => navigateTo('/siswa'), 1000)
    } catch (err) {
        console.error(err)
        triggerToast('error', 'Terjadi kesalahan saat menambahkan data')
    }
}

</script>
<template>
    <Form @submit="handleAdd" />
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
</template>