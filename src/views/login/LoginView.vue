<template>
  <div class="min-h-screen flex flex-col font-hanken text-[#1a1c1f] bg-[#f9f9fd]">
    <!-- Main Content Grid -->
    <main class="flex-grow flex items-center justify-center gradient-mesh px-4 py-8 overflow-y-auto min-h-0">
      <div class="max-w-[1280px] w-full flex flex-col lg:flex-row items-center justify-between gap-8 px-8">

        <!-- Left Side: Branding & Value Proposition -->
        <div class="hidden lg:flex flex-col max-w-[500px] space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-[#0866ff] rounded-lg flex items-center justify-center shadow-md">
              <span class="material-symbols-outlined text-white text-[32px]"
                style="font-variation-settings: 'FILL' 1;">school</span>
            </div>
            <h1 class="text-[32px] font-bold text-[#0050cd] tracking-tight">EduSocial</h1>
          </div>

          <h2 class="text-[48px] font-extrabold text-[#1a1c1f] leading-[1.1] mb-1">
            The nexus of <span class="text-[#0866ff]">learning</span> and connection.
          </h2>

          <p class="text-[18px] text-[#424656] leading-relaxed">
            Connect with fellow academics, share course resources, and build your scholarly community in a secure,
            intuitive digital environment.
          </p>

          <div class="pt-4 grid grid-cols-2 gap-4">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-[#0050cd]"
                style="font-variation-settings: 'FILL' 1;">groups</span>
              <span class="font-semibold text-sm text-[#1a1c1f]">Study Groups</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-[#0050cd]"
                style="font-variation-settings: 'FILL' 1;">library_books</span>
              <span class="font-semibold text-sm text-[#1a1c1f]">Shared Libraries</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-[#0050cd]"
                style="font-variation-settings: 'FILL' 1;">verified</span>
              <span class="font-semibold text-sm text-[#1a1c1f]">Academic Verification</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-[#0050cd]"
                style="font-variation-settings: 'FILL' 1;">forum</span>
              <span class="font-semibold text-sm text-[#1a1c1f]">Live Discussions</span>
            </div>
          </div>
        </div>

        <!-- Right Side: Login Card -->
        <div class="w-full max-w-[400px]">
          <!-- Mobile Branding -->
          <div class="flex lg:hidden flex-col items-center mb-8 text-center">
            <div class="w-16 h-16 bg-[#0866ff] rounded-xl flex items-center justify-center shadow-md mb-4">
              <span class="material-symbols-outlined text-white text-[40px]"
                style="font-variation-settings: 'FILL' 1;">school</span>
            </div>
            <h1 class="text-[32px] font-bold text-[#0050cd]">EduSocial</h1>
            <p class="text-base text-[#424656] mt-2">Connect to your academic network</p>
          </div>

          <div class="bg-white login-card-shadow rounded-2xl p-8 flex flex-col items-stretch">
            <h2 class="lg:hidden font-semibold text-2xl text-center mb-8 text-[#1a1c1f]">Sign In</h2>
            <h2 class="hidden lg:block font-semibold text-2xl text-on-surface mb-8 text-[#1a1c1f]">Log into EduSocial
            </h2>

            <form @submit.prevent="handleLogin" class="space-y-4">
              <div class="space-y-1.5">
                <label class="font-semibold text-sm text-[#424656]" for="email">Email or mobile number</label>
                <div class="relative flex items-center">
                  <span class="material-symbols-outlined absolute left-4 text-[#727687]"
                    :class="{ 'text-[#0050cd]': activeInput === 'email' }">mail</span>
                  <input v-model="form.email" @focus="activeInput = 'email'" @blur="activeInput = ''"
                    class="w-full pl-12 pr-4 py-3 border border-[#c2c6d8] rounded-xl focus:outline-none focus:border-[#0050cd] focus:ring-2 focus:ring-[#0050cd]/10 transition-all font-body-md bg-white text-[#1a1c1f] outline-none"
                    id="email" name="email" placeholder="student@university.edu" type="text" required />
                </div>
              </div>

              <div class="space-y-1.5">
                <label class="font-semibold text-sm text-[#424656]" for="password">Password</label>
                <div class="relative flex items-center">
                  <span class="material-symbols-outlined absolute left-4 text-[#727687]"
                    :class="{ 'text-[#0050cd]': activeInput === 'password' }">lock</span>
                  <input v-model="form.password" @focus="activeInput = 'password'" @blur="activeInput = ''"
                    class="w-full pl-12 pr-4 py-3 border border-[#c2c6d8] rounded-xl focus:outline-none focus:border-[#0050cd] focus:ring-2 focus:ring-[#0050cd]/10 transition-all font-body-md bg-white text-[#1a1c1f] outline-none"
                    id="password" name="password" placeholder="••••••••" type="password" required />
                </div>
              </div>

              <button :disabled="isSubmitting"
                class="w-full bg-[#0866ff] hover:bg-[#4069f2] text-white py-3 rounded-xl font-semibold text-sm shadow-md transition-colors duration-200 mt-2 flex justify-center items-center"
                type="submit">
                <span v-if="isSubmitting" class="material-symbols-outlined animate-spin mr-2">progress_activity</span>
                {{ isSubmitting ? 'Logging in...' : 'Log in' }}
              </button>

              <div class="text-center pt-2">
                <a class="text-[#0050cd] font-semibold text-sm hover:underline decoration-2 underline-offset-2 transition-all"
                  href="#">Forgot password?</a>
              </div>

              <div class="relative py-4 flex items-center">
                <div class="flex-grow border-t border-[#c2c6d8]"></div>
                <span class="mx-4 text-[#727687] font-semibold text-xs uppercase tracking-wider">or</span>
                <div class="flex-grow border-t border-[#c2c6d8]"></div>
              </div>

              <div class="flex justify-center">
                <router-link to="/register"
                  class="px-8 py-3 border-2 border-[#0866ff] text-[#0866ff] hover:bg-[#dbe1ff]/30 rounded-xl font-semibold text-sm transition-all active:scale-95 text-center">
                  Create new account
                </router-link>
              </div>
            </form>
          </div>

          <div class="mt-8 text-center lg:text-left">
            <p class="text-xs text-[#424656] leading-relaxed">
              By logging in, you agree to EduSocial's <a class="text-[#0050cd] hover:underline" href="#">Community
                Guidelines</a> and <a class="text-[#0050cd] hover:underline" href="#">Academic Integrity Policy</a>.
            </p>
          </div>
        </div>

      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-[#f3f3f7] border-t border-[#c2c6d8] opacity-80 hover:opacity-100 transition-opacity mt-auto py-4">
      <div class="w-full px-6 flex flex-col md:flex-row justify-between items-center gap-4 max-w-[1280px] mx-auto">
        <div class="flex flex-col items-center md:items-start gap-1">
          <span class="text-[20px] font-bold text-[#1a1c1f]">EduSocial</span>
          <p class="text-sm text-[#424656]">© 2024 EduSocial Academic Network. All rights reserved.</p>
        </div>
        <div class="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
          <a class="text-[#424656] hover:text-[#0050cd] transition-colors" href="#">Privacy Policy</a>
          <a class="text-[#424656] hover:text-[#0050cd] transition-colors" href="#">Terms of Service</a>
          <a class="text-[#424656] hover:text-[#0050cd] transition-colors" href="#">Accessibility</a>
          <a class="text-[#424656] hover:text-[#0050cd] transition-colors" href="#">Contact Support</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue-sonner'

import { loginUserAuthApi } from '@/apis/auth'
import { setCookie } from '@/utils/cookie'
import type { IResponse } from '@/interfaces'
import type { IAuthLoginUser, IAuthLoginUserResponse } from '@/interfaces/auth'

const router = useRouter()

const isSubmitting = ref(false)
const activeInput = ref('')

const form = reactive({
  email: '',
  password: ''
})

const handleLogin = async () => {
  isSubmitting.value = true
  try {
    const response: IResponse<IAuthLoginUserResponse> = await loginUserAuthApi({
      email: form.email,
      password: form.password,
    });

    if (response.status !== 200) {
      toast.error("Invalid credentials!");
      return;
    }

    const { data: { accessToken, refreshToken, user } } = response;

    setCookie("accessToken", accessToken, 7);
    setCookie("refreshToken", refreshToken, 7);
    setCookie("userName", user.fullName, 7);

    router.push("/");
  } catch (error) {
    const myError = error as { status: number };
    if (myError.status === 400) {
      toast.error("Invalid credentials!");
      return;
    }

    toast.error("Something went wrong!")
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

.font-hanken {
  font-family: 'Hanken Grotesk', sans-serif;
}

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

.login-card-shadow {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05), 0 8px 16px rgba(0, 0, 0, 0.1);
}

.gradient-mesh {
  background-color: #f9f9fd;
  background-image:
    radial-gradient(at 0% 0%, rgba(8, 102, 255, 0.05) 0px, transparent 50%),
    radial-gradient(at 100% 0%, rgba(0, 80, 205, 0.08) 0px, transparent 50%);
}
</style>
