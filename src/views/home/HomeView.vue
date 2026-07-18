<template>
  <div class="min-h-screen bg-slate-50 flex flex-col font-hanken text-slate-800">
    
    <!-- Top Navigation Header -->
    <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 py-3 shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
      <div class="max-w-[1280px] mx-auto px-6 flex items-center justify-between gap-4">
        
        <!-- Brand Logo -->
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-500/20">
            <span class="material-symbols-outlined text-white text-[24px]" style="font-variation-settings: 'FILL' 1;">school</span>
          </div>
          <span class="text-xl font-bold text-blue-700 tracking-tight">EduSocial</span>
        </div>

        <!-- Central Search Bar -->
        <div class="relative max-w-sm w-full hidden md:block">
          <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
          <input 
            type="text" 
            placeholder="Search resources, topics, or study hubs..." 
            class="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all font-medium placeholder-slate-400"
          />
        </div>

        <!-- Right Side Nav Actions -->
        <div class="flex items-center gap-4">
          
          <button class="relative w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-slate-100 transition-colors text-slate-600">
            <span class="material-symbols-outlined text-[22px]">notifications</span>
            <span class="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white"></span>
          </button>
          
          <button class="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-slate-100 transition-colors text-slate-600">
            <span class="material-symbols-outlined text-[22px]">forum</span>
          </button>

          <!-- User Quick Menu -->
          <div class="relative group">
            <button class="flex items-center gap-2 p-1 rounded-full border border-slate-100 hover:bg-slate-50 transition-colors">
              <img 
                :src="userAvatar" 
                alt="Profile Avatar" 
                class="w-8 h-8 rounded-full object-cover"
              />
              <span class="text-sm font-semibold text-slate-700 pr-2 hidden sm:inline">{{ userName }}</span>
              <span class="material-symbols-outlined text-slate-400 text-[18px]">expand_more</span>
            </button>

            <!-- Dropdown Menu -->
            <div class="absolute right-0 top-full pt-2 w-48 hidden group-hover:block transition-all duration-200 z-50">
              <div class="bg-white border border-slate-100 rounded-xl shadow-lg shadow-slate-200/50 py-1">
                <router-link to="/profile" class="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 transition-colors">
                  <span class="material-symbols-outlined text-slate-400 text-[18px]">person</span>My Profile
                </router-link>
                <a href="#" class="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 transition-colors">
                  <span class="material-symbols-outlined text-slate-400 text-[18px]">settings</span>Settings
                </a>
                <div class="border-t border-slate-100 my-1"></div>
                <button 
                  @click="handleLogout" 
                  class="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50/50 transition-colors font-medium text-left"
                >
                  <span class="material-symbols-outlined text-[18px]">logout</span>Log Out
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>

    <!-- Main Dashboard Grid Layout -->
    <main class="flex-grow max-w-[1280px] w-full mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-4 gap-6">

      <!-- Column 1: Left Sidebar -->
      <aside class="space-y-6 lg:col-span-1">
        
        <!-- User Profile Quick Card -->
        <div class="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden text-center pb-6">
          <div class="h-20 bg-gradient-to-r from-blue-500 to-indigo-600 relative"></div>
          <div class="relative -mt-10 mb-3 inline-block">
            <img 
              :src="userAvatar" 
              alt="User profile picture" 
              class="w-20 h-20 rounded-full border-4 border-white object-cover shadow-sm mx-auto"
            />
            <span class="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <h2 class="text-lg font-bold text-slate-800 px-4 truncate">{{ userName }}</h2>
          <p class="text-xs font-semibold text-slate-500 mt-0.5 px-4 truncate">{{ userBio }}</p>
          <p class="text-xs text-blue-600 font-medium px-4 mt-1">Tech University</p>

          <div class="border-t border-slate-50 mt-5 pt-4 grid grid-cols-2 text-center divide-x divide-slate-100">
            <div>
              <span class="block text-lg font-extrabold text-slate-800">248</span>
              <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Connections</span>
            </div>
            <div>
              <span class="block text-lg font-extrabold text-slate-800">18</span>
              <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Resources</span>
            </div>
          </div>
        </div>

        <!-- Shortcuts / Quick Actions Card -->
        <div class="bg-white border border-slate-100 rounded-2xl shadow-sm p-5 space-y-4">
          <h3 class="text-sm font-bold text-slate-500 uppercase tracking-wider">Quick Shortcuts</h3>
          <nav class="space-y-2 flex flex-col">
            <a href="#" class="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-slate-700">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-blue-600" style="font-variation-settings: 'FILL' 1;">groups</span>
                <span class="text-sm font-semibold">Active Hubs</span>
              </div>
              <span class="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-bold">3</span>
            </a>
            <a href="#" class="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-slate-700">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-blue-600" style="font-variation-settings: 'FILL' 1;">bookmark</span>
                <span class="text-sm font-semibold">Saved Guides</span>
              </div>
              <span class="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-bold">12</span>
            </a>
            <a href="#" class="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-colors text-slate-700">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-blue-600" style="font-variation-settings: 'FILL' 1;">verified</span>
                <span class="text-sm font-semibold">Academic Status</span>
              </div>
              <span class="text-xs bg-green-50 text-green-600 px-2.5 py-0.5 rounded-full font-bold text-[10px] uppercase">Verified</span>
            </a>
          </nav>
        </div>

      </aside>

      <!-- Column 2 & 3: Middle Feed Content Area -->
      <section class="space-y-6 lg:col-span-2">
        
        <!-- Post Creator Box -->
        <div class="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm space-y-4">
          <div class="flex items-start gap-4">
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150" 
              alt="Profile Avatar" 
              class="w-10 h-10 rounded-full object-cover shadow-sm mt-1"
            />
            <div class="flex-grow">
              <textarea 
                v-model="newPostContent"
                @focus="activeInput = true"
                rows="2"
                placeholder="Share a study guide, ask for project feedback, or write thoughts..." 
                class="w-full border border-slate-100 rounded-xl px-4 py-3 text-slate-700 placeholder-slate-400 focus:border-slate-200 outline-none text-sm bg-slate-50/50 hover:bg-slate-50 focus:bg-white transition-all resize-none"
              ></textarea>
            </div>
          </div>

          <!-- Bottom Action Buttons inside share box -->
          <div v-if="activeInput" class="flex justify-between items-center border-t border-slate-50 pt-4 flex-wrap gap-2">
            <div class="flex items-center gap-2">
              <button class="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-slate-50 transition-colors text-slate-500 text-xs font-semibold">
                <span class="material-symbols-outlined text-emerald-500 text-[18px]">image</span>Add Image
              </button>
              <button class="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-slate-50 transition-colors text-slate-500 text-xs font-semibold">
                <span class="material-symbols-outlined text-blue-500 text-[18px]">attach_file</span>Add Document
              </button>
              <button class="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-slate-50 transition-colors text-slate-500 text-xs font-semibold">
                <span class="material-symbols-outlined text-amber-500 text-[18px]">calendar_today</span>Event
              </button>
            </div>
            <div class="flex gap-2">
              <button @click="activeInput = false" class="px-4 py-1.5 text-slate-400 hover:text-slate-600 text-xs font-bold transition-colors">
                Cancel
              </button>
              <button 
                @click="handleCreatePost"
                class="px-5 py-1.5 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition-colors shadow-sm"
              >
                Post
              </button>
            </div>
          </div>
        </div>

        <!-- Social Activity Feed -->
        <div class="space-y-6">
          <div 
            v-for="post in posts" 
            :key="post.id" 
            class="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-[0_4px_25px_rgba(0,0,0,0.02)] transition-shadow duration-300"
          >
            <!-- Post Profile Header -->
            <div class="flex justify-between items-start mb-4">
              <div class="flex items-center gap-3">
                <img 
                  :src="post.avatar" 
                  :alt="post.author" 
                  class="w-11 h-11 rounded-full object-cover shadow-sm border border-slate-100"
                />
                <div>
                  <h4 class="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                    {{ post.author }}
                    <span class="material-symbols-outlined text-blue-500 text-[16px]" style="font-variation-settings: 'FILL' 1;">verified</span>
                  </h4>
                  <p class="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">{{ post.role }} • {{ post.time }}</p>
                </div>
              </div>
              <button class="w-8 h-8 rounded-full hover:bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors">
                <span class="material-symbols-outlined text-[20px]">more_horiz</span>
              </button>
            </div>

            <!-- Post Content Body -->
            <p class="text-sm leading-relaxed text-slate-600 mb-4 whitespace-pre-wrap">{{ post.content }}</p>

            <!-- Attachment File Box -->
            <div v-if="post.hasAttachment" class="border border-blue-100 bg-blue-50/20 rounded-xl p-4 mb-4 flex items-center justify-between gap-4">
              <div class="flex items-center gap-3 min-w-0">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  <span class="material-symbols-outlined text-[24px]">description</span>
                </div>
                <div class="min-w-0">
                  <h5 class="text-sm font-semibold text-slate-700 truncate">{{ post.attachmentName }}</h5>
                  <p class="text-xs text-slate-400 font-bold mt-0.5 uppercase tracking-wide">{{ post.attachmentSize }}</p>
                </div>
              </div>
              <button class="px-3.5 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-1">
                <span class="material-symbols-outlined text-sm">download</span>Get Guide
              </button>
            </div>

            <!-- Tags List -->
            <div v-if="post.tags && post.tags.length" class="flex flex-wrap gap-1.5 mb-4">
              <span 
                v-for="tag in post.tags" 
                :key="tag" 
                class="px-2.5 py-0.5 bg-slate-50 text-slate-500 rounded-full text-xs font-semibold border border-slate-100"
              >
                #{{ tag }}
              </span>
            </div>

            <!-- Interactive Actions Footer -->
            <div class="border-t border-slate-50 pt-3.5 flex justify-between items-center text-slate-500 text-xs font-semibold">
              <button 
                @click="toggleLike(post)" 
                class="flex items-center gap-1.5 hover:text-red-500 transition-colors px-3 py-1.5 rounded-lg hover:bg-slate-50"
                :class="{ 'text-red-500 font-bold': post.liked }"
              >
                <span class="material-symbols-outlined text-[18px]" :style="{ fontVariationSettings: post.liked ? `'FILL' 1` : `'FILL' 0` }">favorite</span>
                {{ post.likes }} {{ post.likes === 1 ? 'Like' : 'Likes' }}
              </button>
              <button 
                @click="post.showComments = !post.showComments" 
                class="flex items-center gap-1.5 hover:text-blue-500 transition-colors px-3 py-1.5 rounded-lg hover:bg-slate-50"
              >
                <span class="material-symbols-outlined text-[18px]">chat_bubble</span>
                {{ post.comments.length }} {{ post.comments.length === 1 ? 'Comment' : 'Comments' }}
              </button>
              <button 
                @click="handleSharePost(post)" 
                class="flex items-center gap-1.5 hover:text-slate-700 transition-colors px-3 py-1.5 rounded-lg hover:bg-slate-50"
              >
                <span class="material-symbols-outlined text-[18px]">share</span>Share
              </button>
            </div>

            <!-- Comments List Box -->
            <div v-if="post.showComments" class="border-t border-slate-50 mt-4 pt-4 space-y-4">
              
              <!-- Existing Comments -->
              <div v-for="comment in post.comments" :key="comment.author + comment.time" class="flex gap-3">
                <img :src="comment.avatar" :alt="comment.author" class="w-8 h-8 rounded-full object-cover shadow-sm mt-0.5" />
                <div class="bg-slate-50/70 border border-slate-100/50 rounded-2xl px-4 py-2.5 flex-grow text-slate-700">
                  <div class="flex justify-between items-center mb-1">
                    <span class="text-xs font-bold text-slate-800">{{ comment.author }}</span>
                    <span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">{{ comment.time }}</span>
                  </div>
                  <p class="text-xs leading-relaxed">{{ comment.content }}</p>
                </div>
              </div>

              <!-- Create Comment Box -->
              <div class="flex items-center gap-3 pt-1">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150" 
                  alt="Profile Avatar" 
                  class="w-8 h-8 rounded-full object-cover shadow-sm"
                />
                <input 
                  type="text" 
                  v-model="post.newCommentText"
                  @keyup.enter="handleAddComment(post)"
                  placeholder="Write a comment..." 
                  class="flex-grow bg-slate-50 border border-slate-100 rounded-full px-4 py-2 text-xs outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder-slate-400 font-medium"
                />
              </div>

            </div>

          </div>
        </div>

      </section>

      <!-- Column 4: Right Sidebar -->
      <aside class="space-y-6 lg:col-span-1">
        
        <!-- Recommended Study Groups / Hubs -->
        <div class="bg-white border border-slate-100 rounded-2xl shadow-sm p-5 space-y-4">
          <div class="flex justify-between items-center">
            <h3 class="text-sm font-bold text-slate-500 uppercase tracking-wider">Recommended Hubs</h3>
            <a href="#" class="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors">See All</a>
          </div>

          <div class="space-y-3 flex flex-col">
            <div v-for="group in groups" :key="group.name" class="flex items-center justify-between gap-3 p-1">
              <div class="flex items-center gap-3 min-w-0">
                <div class="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="material-symbols-outlined text-[20px]">{{ group.icon }}</span>
                </div>
                <div class="min-w-0">
                  <h4 class="text-xs font-bold text-slate-800 truncate">{{ group.name }}</h4>
                  <p class="text-[10px] text-slate-400 font-semibold uppercase tracking-wide">{{ group.members }} Members</p>
                </div>
              </div>
              <button 
                @click="toggleJoinGroup(group)"
                class="px-3 py-1 text-xs font-bold rounded-lg border transition-all active:scale-95 flex-shrink-0"
                :class="group.joined ? 'border-slate-200 text-slate-400 hover:bg-slate-50' : 'border-blue-600 text-blue-600 hover:bg-blue-50'"
              >
                {{ group.joined ? 'Joined' : 'Join' }}
              </button>
            </div>
          </div>
        </div>

        <!-- Academic Trending Tags -->
        <div class="bg-white border border-slate-100 rounded-2xl shadow-sm p-5 space-y-4">
          <h3 class="text-sm font-bold text-slate-500 uppercase tracking-wider">Trending Topics</h3>
          <div class="space-y-3 flex flex-col">
            <a href="#" class="flex justify-between items-center group">
              <span class="text-xs font-semibold text-slate-600 group-hover:text-blue-600 transition-colors">#calculus</span>
              <span class="text-[10px] bg-slate-50 px-2 py-0.5 rounded text-slate-400 font-bold">124 posts</span>
            </a>
            <a href="#" class="flex justify-between items-center group">
              <span class="text-xs font-semibold text-slate-600 group-hover:text-blue-600 transition-colors">#springboot</span>
              <span class="text-[10px] bg-slate-50 px-2 py-0.5 rounded text-slate-400 font-bold">89 posts</span>
            </a>
            <a href="#" class="flex justify-between items-center group">
              <span class="text-xs font-semibold text-slate-600 group-hover:text-blue-600 transition-colors">#machinelearning</span>
              <span class="text-[10px] bg-slate-50 px-2 py-0.5 rounded text-slate-400 font-bold">243 posts</span>
            </a>
            <a href="#" class="flex justify-between items-center group">
              <span class="text-xs font-semibold text-slate-600 group-hover:text-blue-600 transition-colors">#physics2</span>
              <span class="text-[10px] bg-slate-50 px-2 py-0.5 rounded text-slate-400 font-bold">54 posts</span>
            </a>
          </div>
        </div>

      </aside>

    </main>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { deleteCookie, getCookie } from '@/utils/cookie'
import { toast } from 'vue-sonner'
import { meUserAuthApi } from '@/apis/auth'

const router = useRouter()
const userName = ref('')
const userAvatar = ref('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150')
const userBio = ref('Computer Science Student')

onMounted(async () => {
  try {
    const res = await meUserAuthApi()
    if (res.status === 200 && res.data) {
      userName.value = res.data.fullName
      userAvatar.value = res.data.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'
      userBio.value = res.data.bio || 'Computer Science Student'
      return
    }
  } catch (error) {
    console.error("Error fetching user profile:", error)
  }

  // Fallback if API fails
  const email = getCookie("email") || ''
  if (email) {
    const parts = email.split('@')
    const namePart = parts[0] || ''
    const nameWords = namePart.split(/[._-]/)
    userName.value = nameWords.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ')
  } else {
    userName.value = 'Alex Scholarly'
  }
})

const handleLogout = () => {
  deleteCookie("accessToken")
  deleteCookie("refreshToken")
  deleteCookie("email")
  deleteCookie("userName")
  deleteCookie("role")
  toast.success("Successfully logged out!")
  router.push('/login')
}

// User state and posting logic
const newPostContent = ref('')
const activeInput = ref(false)

interface Comment {
  author: string;
  avatar: string;
  content: string;
  time: string;
}

interface Post {
  id: number;
  author: string;
  avatar: string;
  role: string;
  time: string;
  content: string;
  tags?: string[];
  hasAttachment?: boolean;
  attachmentName?: string;
  attachmentSize?: string;
  likes: number;
  liked: boolean;
  comments: Comment[];
  showComments: boolean;
  newCommentText: string;
}

const posts = ref<Post[]>([
  {
    id: 1,
    author: 'Prof. Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    role: 'Mathematics Faculty',
    time: '2 hours ago',
    content: 'I have uploaded the comprehensive study guide for the upcoming Calculus III midterms. It covers polar coordinates, double integrals, and vector fields. Good luck studying!',
    tags: ['Mathematics', 'Calculus', 'Midterms'],
    hasAttachment: true,
    attachmentName: 'Calculus_III_Study_Guide_v2.pdf',
    attachmentSize: '4.2 MB',
    likes: 24,
    liked: false,
    showComments: false,
    newCommentText: '',
    comments: [
      {
        author: 'Liam Johnson',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
        content: 'Thank you Professor! This is exactly what we needed.',
        time: '1 hour ago'
      }
    ]
  },
  {
    id: 2,
    author: 'David Vance',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    role: 'Computer Science Lead',
    time: '4 hours ago',
    content: 'Just set up our spring boot backend templates for the group project. Feel free to pull from the repository. Let me know if you run into any dependency compilation issues!',
    tags: ['SpringBoot', 'Java', 'WebDev'],
    likes: 12,
    liked: false,
    showComments: false,
    newCommentText: '',
    comments: []
  }
])

const handleCreatePost = () => {
  if (!newPostContent.value.trim()) return

  const newPost: Post = {
    id: Date.now(),
    author: userName.value,
    avatar: userAvatar.value,
    role: 'Verified Academic Student',
    time: 'Just now',
    content: newPostContent.value,
    tags: ['General', 'Share'],
    likes: 0,
    liked: false,
    showComments: false,
    newCommentText: '',
    comments: []
  }

  posts.value.unshift(newPost)
  newPostContent.value = ''
  activeInput.value = false
  toast.success('Your post has been published!')
}

const toggleLike = (post: Post) => {
  if (post.liked) {
    post.likes--
    post.liked = false
  } else {
    post.likes++
    post.liked = true
  }
}

const handleAddComment = (post: Post) => {
  if (!post.newCommentText.trim()) return

  post.comments.push({
    author: userName.value,
    avatar: userAvatar.value,
    content: post.newCommentText,
    time: 'Just now'
  })

  post.newCommentText = ''
  toast.success('Comment added!')
}

// Side panels state
const groups = ref([
  { name: 'Calculus III Study Hub', members: 42, joined: false, icon: 'functions' },
  { name: 'AI & Neural Networks Research', members: 128, joined: true, icon: 'psychology' },
  { name: 'Physics II Lab Partners', members: 16, joined: false, icon: 'science' }
])

const toggleJoinGroup = (group: any) => {
  group.joined = !group.joined
  if (group.joined) {
    group.members++
    toast.success(`Joined ${group.name}!`)
  } else {
    group.members--
    toast.info(`Left ${group.name}.`)
  }
}

const handleSharePost = (post: Post) => {
  navigator.clipboard.writeText(`Check out this post on EduSocial by ${post.author}!`)
  toast.success('Post link copied to clipboard!')
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

.gradient-mesh {
  background-color: #f9f9fd;
  background-image:
    radial-gradient(at 0% 0%, rgba(8, 102, 255, 0.02) 0px, transparent 50%),
    radial-gradient(at 100% 0%, rgba(0, 80, 205, 0.03) 0px, transparent 50%);
}
</style>
