<template>
  <div class="min-h-screen bg-slate-50 flex flex-col justify-center items-center font-hanken p-6">
    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 max-w-md w-full text-center">
      <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <span class="material-symbols-outlined text-4xl">home</span>
      </div>
      <h1 class="text-2xl font-bold text-slate-800 mb-2">Welcome to EduSocial!</h1>
      <p class="text-sm text-slate-500 mb-6">You have successfully logged in. This is your academic social network dashboard homepage.</p>
      
      <button @click="handleLogout" class="px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm">
        Log Out
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { deleteCookie } from '@/utils/cookie'

const router = useRouter()

const handleLogout = () => {
  deleteCookie("accessToken")
  deleteCookie("refreshToken")
  deleteCookie("userName")
  deleteCookie("role")
  router.push('/login')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
}
</style>
