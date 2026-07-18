<template>
  <div class="bg-surface text-on-surface min-h-screen flex flex-col font-hanken">
    <main class="flex-grow flex flex-col md:flex-row h-screen overflow-hidden">

      <!-- Left Side: Inspiring Academic Content -->
      <section class="hidden md:flex flex-1 relative bg-[#0866ff] items-center justify-center p-12 overflow-hidden">
        <!-- Animated Background -->
        <div class="relative z-10 max-w-lg text-white">
          <div class="mb-8">
            <span
              class="inline-block bg-white/20 text-white px-4 py-1.5 rounded-lg backdrop-blur-md text-[16px] font-bold tracking-tight">
              EduSocial
            </span>
          </div>
          <h1 class="text-white text-[48px] leading-[56px] font-extrabold tracking-tight mb-6">
            Join the future of collaborative learning.
          </h1>
          <p class="opacity-90 text-white text-[18px] leading-[28px] mb-12">
            Connect with thousands of students and faculty. Share resources, build study groups, and excel in your
            academic journey together.
          </p>

          <!-- Floating UI Mockup Elements -->
          <div class="relative h-80 w-full mt-10">
            <!-- Post Mockup -->
            <div
              class="social-card-float absolute top-0 left-0 bg-white p-6 rounded-2xl shadow-xl w-80 transform rotate-[-2deg] text-[#1a1c1f]">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-full overflow-hidden">
                  <img class="w-full h-full object-cover" alt="Profile avatar"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmBtccXAhSBtYnOqJGosXT9SeLqNYRQoujKvb0VN_w1Frcdx1NzxX4TeQhrJ-a1gbILIcfEm25RiNK66UMDMqkESD2G0V_lnKb6fefYszQ3h2c5sU3szUcUd4fIPh94mydzGKCUdCJFFnOxSlzKjzYEto8wutKw26xsvTYYM9hOqnl97VZBSG0jj1vXJqYHzl9ddOt7DmF1NkHQCrCd25e9Z3KOn63CM4C-UJBl7ggBnoUsnfhlDXIZNH7tuw6ydLkm1wq5NrXTmc" />
                </div>
                <div>
                  <p class="text-base font-semibold text-[#1a1c1f]">Prof. Sarah Chen</p>
                  <p class="text-xs text-[#64748b]">Shared a new study guide</p>
                </div>
              </div>
              <div class="h-2.5 bg-[#f1f5f9] mb-2.5 rounded-full w-full"></div>
              <div class="h-2.5 bg-[#f1f5f9] mb-4 rounded-full w-[70%]"></div>
              <div class="flex gap-2">
                <div class="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">Mathematics</div>
                <div class="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">Calculus</div>
              </div>
            </div>

            <!-- Notification Mockup -->
            <div
              class="social-card-float absolute bottom-0 right-0 bg-white p-4 rounded-2xl shadow-xl w-72 transform rotate-[3deg] text-[#1a1c1f]"
              style="animation-delay: -3s;">
              <div class="flex items-center gap-4">
                <div class="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600">
                  <span class="material-symbols-outlined text-2xl">person_add</span>
                </div>
                <div>
                  <p class="text-base font-semibold text-[#1a1c1f]">3 friends joined</p>
                  <p class="text-xs text-[#64748b]">Your study group is growing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Bottom Accent -->
        <div class="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#4069f2]/30 blur-[100px] rounded-full"></div>
      </section>

      <!-- Right Side: Registration Form -->
      <section class="flex-1 bg-white overflow-y-auto flex items-center justify-center p-4 md:p-8">
        <div class="w-full max-w-md">
          <!-- Mobile Branding -->
          <div class="md:hidden flex justify-center mb-8">
            <h2 class="font-headline-md text-[24px] font-bold text-[#0050cd]">EduSocial</h2>
          </div>
          <div class="mb-8 text-center md:text-left">
            <h2 class="font-headline-lg text-[32px] font-bold text-[#1a1c1f] mb-2">Create an account</h2>
            <p class="font-body-md text-[16px] text-[#424656]">Start your academic social journey today.</p>
          </div>

          <form class="space-y-4" @submit.prevent="handleRegister">
            <!-- Full Name -->
            <div class="space-y-1">
              <label class="font-label-md text-[14px] font-semibold text-[#1a1c1f]" for="full-name">Full Name</label>
              <div class="relative">
                <span
                  class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#424656] text-[20px]">person</span>
                <input v-model="form.fullName"
                  class="w-full pr-4 py-3 bg-white border border-[#c2c6d8] rounded-lg font-body-md text-[16px] form-input-focus transition-all duration-200 outline-none pl-12"
                  id="full-name" placeholder="Enter your full name" type="text" required />
              </div>
            </div>

            <!-- Email -->
            <div class="space-y-1">
              <label class="font-label-md text-[14px] font-semibold text-[#1a1c1f]" for="email">Email Address</label>
              <div class="relative">
                <span
                  class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#424656] text-[20px]">mail</span>
                <input v-model="form.email"
                  class="w-full pr-4 py-3 bg-white border border-[#c2c6d8] rounded-lg font-body-md text-[16px] form-input-focus transition-all duration-200 outline-none pl-12"
                  id="email" placeholder="you@university.edu" type="email" required />
              </div>
            </div>

            <!-- Passwords Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-1">
                <label class="font-label-md text-[14px] font-semibold text-[#1a1c1f]" for="password">Password</label>
                <div class="relative">
                  <span
                    class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#424656] text-[20px]">lock</span>
                  <input v-model="form.password"
                    class="w-full pr-4 py-3 bg-white border border-[#c2c6d8] rounded-lg font-body-md text-[16px] form-input-focus transition-all duration-200 outline-none pl-12"
                    id="password" placeholder="••••••••" type="password" required />
                </div>
              </div>
              <div class="space-y-1">
                <label class="font-label-md text-[14px] font-semibold text-[#1a1c1f]" for="confirm-password">Confirm
                  Password</label>
                <div class="relative">
                  <span
                    class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#424656] text-[20px]">lock</span>
                  <input v-model="form.confirmPassword"
                    class="w-full pr-4 py-3 bg-white border border-[#c2c6d8] rounded-lg font-body-md text-[16px] form-input-focus transition-all duration-200 outline-none pl-12"
                    id="confirm-password" placeholder="••••••••" type="password" required />
                </div>
              </div>
            </div>

            <!-- Bio -->
            <div class="space-y-1">
              <label class="font-label-md text-[14px] font-semibold text-[#1a1c1f]" for="bio">Short Bio</label>
              <div class="relative">
                <span
                  class="material-symbols-outlined absolute left-4 top-3 text-[#424656] text-[20px]">description</span>
                <textarea v-model="form.bio"
                  class="w-full pr-4 py-3 bg-white border border-[#c2c6d8] rounded-lg font-body-md text-[16px] form-input-focus transition-all duration-200 outline-none resize-none pl-12"
                  id="bio" placeholder="Tell us about your academic interests..." rows="3"></textarea>
              </div>
            </div>

            <!-- Terms -->
            <div class="flex items-center gap-2 py-1">
              <input v-model="form.terms"
                class="rounded border-[#c2c6d8] text-[#0050cd] focus:ring-[#0050cd] w-4 h-4 cursor-pointer" id="terms"
                type="checkbox" required />
              <label class="font-label-sm text-[12px] font-medium text-[#424656] cursor-pointer" for="terms">
                I agree to the <a class="text-[#0050cd] hover:underline" href="#">Terms of Service</a> and <a
                  class="text-[#0050cd] hover:underline" href="#">Privacy Policy</a>.
              </label>
            </div>

            <!-- Register Button -->
            <button :disabled="isSubmitting"
              class="w-full bg-[#0050cd] text-white py-3 rounded-lg font-label-md text-[14px] font-semibold shadow-md hover:bg-[#0050cd]/90 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
              type="submit">
              <span v-if="isSubmitting" class="material-symbols-outlined animate-spin mr-2">progress_activity</span>
              {{ isSubmitting ? 'Creating Account...' : 'Register Account' }}
            </button>

            <!-- Divider -->
            <div class="relative py-4">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-[#c2c6d8]"></div>
              </div>
              <div class="relative flex justify-center text-[12px] font-semibold uppercase tracking-wider">
                <span class="bg-white px-4 text-[#424656]">Already have an account?</span>
              </div>
            </div>

            <!-- Login Instead -->
            <router-link class="block w-full text-center py-3 border border-[#c2c6d8] rounded-lg font-label-md text-[14px] font-semibold text-[#0050cd] hover:bg-[#f3f3f7] transition-colors"
              to="/login">
              Log in instead
            </router-link>
          </form>

          <!-- Footer Links -->
          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <a class="font-label-sm text-[12px] font-medium text-[#424656] hover:text-[#0050cd] transition-colors"
              href="#">Help Center</a>
            <a class="font-label-sm text-[12px] font-medium text-[#424656] hover:text-[#0050cd] transition-colors"
              href="#">Safety</a>
            <a class="font-label-sm text-[12px] font-medium text-[#424656] hover:text-[#0050cd] transition-colors"
              href="#">Cookie Policy</a>
          </div>
          <div class="mt-4 text-center">
            <p class="font-label-sm text-[12px] font-medium text-[#424656] opacity-60">© 2024 EduSocial Academic
              Network. All rights reserved.</p>
          </div>
        </div>
      </section>
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
import { registerAuthApi } from '@/apis/auth';
import { ref, reactive } from 'vue';

const isSubmitting = ref(false);

const form = reactive({
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  bio: '',
  terms: false
});

const handleRegister = async () => {
  if (form.password !== form.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  isSubmitting.value = true;

  try {
    const { fullName, email, password, confirmPassword, bio, terms } = form;

    if (!terms) {
      alert("You must agree to the Terms of Service and Privacy Policy.");
      isSubmitting.value = false;
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      isSubmitting.value = false;
      return;
    }

    await registerAuthApi({ fullName, email, password, bio });
  } catch (error) {
    const myError = error as { status: number };
    if (myError.status === 400) {
      alert("Invalid input. Please check your details and try again.");
      return;
    }

    alert("Something went wrong!");
  }

  isSubmitting.value = false;
};
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

.form-input-focus:focus {
  box-shadow: 0 0 0 2px rgba(8, 102, 255, 0.2);
  border-color: #0050cd;
}

.social-card-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0) rotate(-2deg);
  }

  50% {
    transform: translateY(-10px) rotate(-2deg);
  }
}

div[style*="animation-delay"] {
  animation: float-alt 6s ease-in-out infinite;
}

@keyframes float-alt {

  0%,
  100% {
    transform: translateY(0) rotate(3deg);
  }

  50% {
    transform: translateY(-10px) rotate(3deg);
  }
}
</style>
