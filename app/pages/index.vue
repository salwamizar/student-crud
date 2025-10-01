<script setup>
import { ref, Transition } from 'vue'
import Toast from '~/components/Toast.vue'

const showToast = ref(false)
const toastData = ref({
    type: 'success',
    title: '',
    message:''
})

function triggerToast(type) {
    if( type === 'success') {
        toastData.value = {
            type: 'success',
            title: 'Success',
            message: 'Data berhasil disimpan.'   
        }
    } else if (type === 'warning') {
        toastData.value = {
            type: 'warning',
            title: 'Warning!',
            message: 'Pastikan semua data terisi.'
        }
    } else if (type === 'error'){
        toastData.value = {
            type: 'error',
            title: 'Error',
            message: 'Terjadi kesalahan'
        }
    } else if (type === 'info'){
        toastData.value = {
            type: 'info',
            title: 'Information',
            message: 'Ada pemberitahuan'
        }
    }

    showToast.value = true

    setTimeout(() => {
      showToast.value = false  
    }, 3000)
}
</script>

<template>
    <div class="flex flex-col">
        <div class="flex justify-center pt-4">
            <NavigationBar />
        </div>
        <div class="mt-20" for="konten">
            <div class="justify-center flex flex-row gap-2">
                <ContentButton text="Success" variant="done" @click.prevent="triggerToast('success')"/>
                <ContentButton text="Warning" variant="edit" @click.prevent="triggerToast('warning')"/>
                <ContentButton text="Error" variant="delete" @click.prevent="triggerToast('error')"/>
                <ContentButton text="Info" variant="submit" @click.prevent="triggerToast('info')"/>
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