<template>
  <div class="min-h-screen bg-[#f0f2f5] flex flex-col font-hanken text-slate-800">
    <!-- Top Navigation Header -->
    <header class="sticky top-0 z-50 bg-white border-b border-slate-200 py-2 shadow-sm">
      <div class="max-w-[1280px] mx-auto px-6 flex items-center justify-between gap-4">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <div class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-500/20">
            <span class="material-symbols-outlined text-white text-[24px]" style="font-variation-settings: 'FILL' 1;">school</span>
          </div>
          <span class="text-xl font-bold text-blue-700 tracking-tight">EduSocial</span>
        </router-link>

        <!-- Back to Home Link -->
        <div class="flex items-center gap-4">
          <router-link
            to="/"
            class="flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all"
          >
            <span class="material-symbols-outlined text-[20px]">home</span>
            Home
          </router-link>
        </div>
      </div>
    </header>

    <!-- Main Container -->
    <div v-if="isLoading" class="flex-grow flex flex-col items-center justify-center py-20 gap-4">
      <span class="material-symbols-outlined text-blue-600 text-[48px] animate-spin">progress_activity</span>
      <p class="text-slate-500 font-medium text-sm">Loading profile...</p>
    </div>

    <div v-else-if="user" class="flex-grow flex flex-col items-stretch">
      <!-- Facebook-style Profile Header Area (White Background Card block) -->
      <div class="bg-white shadow-sm border-b border-slate-200">
        <div class="max-w-[1095px] mx-auto w-full">
          <!-- Cover Photo Section Wrapper (without overflow-hidden) -->
          <div class="relative rounded-b-xl shadow-inner bg-slate-200">
            <!-- Visual Container (crops image with overflow-hidden) -->
            <div
              class="h-[250px] md:h-[350px] rounded-b-xl overflow-hidden"
              :class="!user.coverPhoto ? 'bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600' : ''"
            >
              <img
                v-if="user.coverPhoto"
                :src="user.coverPhoto"
                alt="Cover Photo"
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-black/10 rounded-b-xl pointer-events-none"></div>

              <!-- Loading Indicator for Cover Upload -->
              <div v-if="isUploadingCover" class="absolute inset-0 bg-black/40 flex items-center justify-center rounded-b-xl">
                <span class="material-symbols-outlined text-white text-[48px] animate-spin">progress_activity</span>
              </div>
            </div>

            <!-- Cover Camera Button Wrapper -->
            <div ref="coverContainerRef" class="absolute bottom-4 right-4 z-20">
              <button
                @click="toggleCoverMenu"
                class="bg-white hover:bg-slate-100 text-slate-800 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-md transition-colors border border-slate-200"
              >
                <span class="material-symbols-outlined text-[18px]">photo_camera</span>
                <span class="hidden sm:inline">Edit cover photo</span>
              </button>

              <!-- Cover Dropdown Menu -->
              <div
                v-if="showCoverMenu"
                class="absolute right-0 mt-2 w-60 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-30 animate-fade-in text-left font-sans"
              >
                <button
                  @click="showCoverMenu = false; toast.info('Choose cover photo feature coming soon!')"
                  class="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors text-left"
                >
                  <span class="material-symbols-outlined text-slate-500 text-[20px]">photo_library</span>
                  Choose cover photo
                </button>
                <button
                  @click="handleUploadCoverPhoto"
                  class="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors text-left"
                >
                  <span class="material-symbols-outlined text-slate-500 text-[20px]">upload</span>
                  Upload photo
                </button>
                <button
                  @click="showCoverMenu = false; toast.info('Reposition feature coming soon!')"
                  class="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors text-left"
                >
                  <span class="material-symbols-outlined text-slate-500 text-[20px]">open_with</span>
                  Reposition
                </button>
                <div class="border-t border-slate-100 my-1"></div>
                <button
                  @click="handleRemoveCoverPhoto"
                  class="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50/50 transition-colors text-left"
                >
                  <span class="material-symbols-outlined text-[20px]">delete</span>
                  Remove
                </button>
              </div>
            </div>

            <!-- Hidden File Input for Cover -->
            <input
              type="file"
              ref="coverFileInputRef"
              accept="image/*"
              class="hidden"
              @change="handleCoverFileChange"
            />
          </div>

          <!-- Profile Info and Actions Block -->
          <div class="px-8 pb-6 pt-4 md:pt-0 relative flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
            <!-- Left Side: Avatar and Name -->
            <div class="flex flex-col md:flex-row items-center md:items-end gap-6 text-center md:text-left">
              <!-- Avatar -->
              <div ref="avatarContainerRef" class="relative flex-shrink-0 md:-mt-24 z-10">
                <div
                  @click="toggleAvatarMenu"
                  class="relative w-40 h-40 rounded-full border-4 border-white overflow-hidden shadow-lg bg-white cursor-pointer hover:brightness-95 transition-all flex items-center justify-center animate-fade-in"
                >
                  <img
                    :src="user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'"
                    alt="Profile Avatar"
                    class="w-full h-full object-cover"
                  />
                  <!-- Loading Overlay -->
                  <div v-if="isUploadingAvatar" class="absolute inset-0 bg-black/40 flex items-center justify-center rounded-full">
                    <span class="material-symbols-outlined text-white text-[32px] animate-spin">progress_activity</span>
                  </div>
                </div>

                <!-- Hidden File Input -->
                <input
                  type="file"
                  ref="fileInputRef"
                  accept="image/*"
                  class="hidden"
                  @change="handleFileChange"
                />

                <!-- Avatar Actions Dropdown -->
                <div
                  v-if="showAvatarMenu"
                  class="absolute left-0 md:left-auto md:right-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-50 animate-fade-in"
                >
                  <button
                    @click="handleSeeProfilePicture"
                    class="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors text-left"
                  >
                    <span class="material-symbols-outlined text-slate-500 text-[20px]">account_box</span>
                    See profile picture
                  </button>
                  <button
                    @click="handleChooseProfilePicture"
                    class="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors text-left"
                  >
                    <span class="material-symbols-outlined text-slate-500 text-[20px]">image</span>
                    Choose profile picture
                  </button>
                </div>
              </div>

              <!-- Name & Friends summary -->
              <div class="space-y-1 md:pb-2">
                <h1 class="text-3xl font-extrabold text-slate-900 tracking-tight">{{ user.fullName }}</h1>
                <p class="text-slate-500 font-semibold text-sm flex justify-center md:justify-start items-center gap-1">
                  248 connections • Computer Science Student
                </p>
                <!-- Avatar overlap group (Friends list preview style) -->
                <div class="flex justify-center md:justify-start -space-x-2 overflow-hidden py-1">
                  <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="" />
                  <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" alt="" />
                  <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100" alt="" />
                  <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" alt="" />
                </div>
              </div>
            </div>

            <!-- Right Side: Actions Buttons -->
            <div class="flex items-center gap-3 pb-2">
              <button class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold flex items-center gap-2 shadow-md shadow-blue-500/10 transition-colors">
                <span class="material-symbols-outlined text-[18px]">add_circle</span>
                Add to story
              </button>
              <button class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-sm font-semibold flex items-center gap-2 border border-slate-200 transition-colors">
                <span class="material-symbols-outlined text-[18px]">edit</span>
                Edit profile
              </button>
              <button class="w-10 h-10 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg flex items-center justify-center border border-slate-200 transition-colors">
                <span class="material-symbols-outlined text-[20px]">more_horiz</span>
              </button>
            </div>
          </div>

          <!-- Divider line -->
          <div class="border-t border-slate-200 mx-8"></div>

          <!-- Tabs (Post, About, Friends, Photos, Videos, More) -->
          <div class="px-8 flex items-center gap-1 overflow-x-auto scrollbar-none mt-1">
            <button
              v-for="tab in tabs"
              :key="tab"
              @click="activeTab = tab"
              class="px-4 py-4 text-sm font-bold border-b-4 transition-all relative whitespace-nowrap"
              :class="activeTab === tab ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-700'"
            >
              {{ tab }}
            </button>
          </div>
        </div>
      </div>

      <!-- Main Profile Body Grid (Two-column layout like Facebook) -->
      <main class="max-w-[1095px] w-full mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-5 gap-6">

        <!-- Left Column: Intro & Info (2/5 span) -->
        <div class="lg:col-span-2 space-y-6">

          <!-- Intro Card -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
            <h2 class="text-xl font-extrabold text-slate-900">Intro</h2>

            <!-- Bio text / Edit state -->
            <div class="space-y-3 text-center">
              <div v-if="!isEditingBio" class="space-y-3">
                <p class="text-sm text-slate-600 leading-relaxed font-normal">
                  {{ user.bio || "No bio added yet. Tell people a bit about your academic journey, major interests, and current focus!" }}
                </p>
                <button
                  @click="startEditingBio"
                  class="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-sm font-semibold border border-slate-200 transition-colors"
                >
                  Edit bio
                </button>
              </div>
              <div v-else class="space-y-3">
                <textarea
                  v-model="bioInputText"
                  maxlength="101"
                  class="w-full border border-slate-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans text-slate-700"
                  rows="3"
                  placeholder="Describe who you are..."
                ></textarea>
                <div class="flex justify-between items-center text-xs text-slate-400 px-1">
                  <span>{{ 101 - bioInputText.length }} characters remaining</span>
                  <div class="flex gap-2">
                    <button
                      @click="isEditingBio = false"
                      class="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-semibold border border-slate-200 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      @click="handleSaveBio"
                      :disabled="isUpdatingBio"
                      class="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-sm transition-colors flex items-center gap-1 disabled:opacity-50"
                    >
                      <span v-if="isUpdatingBio" class="material-symbols-outlined text-[16px] animate-spin">progress_activity</span>
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Details list -->
            <div class="space-y-4 pt-2">
              <div class="flex items-center gap-3 text-slate-700 text-sm">
                <span class="material-symbols-outlined text-slate-400 text-[20px]">school</span>
                <span>Studies Computer Science at <span class="font-bold">Tech University</span></span>
              </div>
              <div class="flex items-center gap-3 text-slate-700 text-sm">
                <span class="material-symbols-outlined text-slate-400 text-[20px]">location_on</span>
                <span>Lives in <span class="font-bold">San Francisco, California</span></span>
              </div>
              <div class="flex items-center gap-3 text-slate-700 text-sm">
                <span class="material-symbols-outlined text-slate-400 text-[20px]">mail</span>
                <span>Email: <span class="font-semibold text-blue-600 cursor-pointer">{{ user.email }}</span></span>
              </div>
              <div class="flex items-center gap-3 text-slate-700 text-sm">
                <span class="material-symbols-outlined text-slate-400 text-[20px]">schedule</span>
                <span>Joined {{ formatDate(user.createdAt) }}</span>
              </div>
              <div class="flex items-center gap-3 text-slate-700 text-sm">
                <span class="material-symbols-outlined text-slate-400 text-[20px]">wifi</span>
                <span>Followed by <span class="font-bold">342 people</span></span>
              </div>
            </div>

            <!-- Edit Details Button -->
            <button class="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-sm font-semibold border border-slate-200 transition-colors">
              Edit details
            </button>
          </div>

          <!-- Photos Card -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
            <div class="flex justify-between items-center">
              <h2 class="text-xl font-extrabold text-slate-900 hover:underline cursor-pointer">Photos</h2>
              <a href="#" class="text-sm text-blue-600 hover:bg-blue-50/50 px-3 py-1.5 rounded-lg font-semibold transition-colors">See all photos</a>
            </div>
            <div class="grid grid-cols-3 gap-2 rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=150" class="w-full h-24 object-cover hover:opacity-90 cursor-pointer transition-opacity" />
              <img src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5c?w=150" class="w-full h-24 object-cover hover:opacity-90 cursor-pointer transition-opacity" />
              <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=150" class="w-full h-24 object-cover hover:opacity-90 cursor-pointer transition-opacity" />
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=150" class="w-full h-24 object-cover hover:opacity-90 cursor-pointer transition-opacity" />
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=150" class="w-full h-24 object-cover hover:opacity-90 cursor-pointer transition-opacity" />
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=150" class="w-full h-24 object-cover hover:opacity-90 cursor-pointer transition-opacity" />
            </div>
          </div>

          <!-- Connections / Friends Card -->
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
            <div class="flex justify-between items-start">
              <div>
                <h2 class="text-xl font-extrabold text-slate-900 hover:underline cursor-pointer">Connections</h2>
                <p class="text-xs text-slate-400 font-semibold mt-0.5">248 mutual connections</p>
              </div>
              <a href="#" class="text-sm text-blue-600 hover:bg-blue-50/50 px-3 py-1.5 rounded-lg font-semibold transition-colors">See all connections</a>
            </div>

            <div class="grid grid-cols-3 gap-x-2 gap-y-4">
              <div v-for="friend in friends" :key="friend.name" class="space-y-1 cursor-pointer">
                <img :src="friend.avatar" class="w-full h-20 object-cover rounded-lg hover:opacity-90 transition-opacity border border-slate-100" />
                <p class="text-xs font-bold text-slate-800 truncate">{{ friend.name }}</p>
              </div>
            </div>
          </div>

        </div>

        <!-- Right Column: Create Post & Feed (3/5 span) -->
        <div class="lg:col-span-3 space-y-6">

          <!-- Create Post Card -->
          <div class="bg-white border border-slate-200 rounded-xl p-4 shadow-sm space-y-4">
            <div class="flex items-center gap-3">
              <img
                :src="user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'"
                alt="Profile Avatar"
                class="w-10 h-10 rounded-full object-cover"
              />
              <input
                type="text"
                :placeholder="`What's on your mind, ${user.fullName.split(' ')[0]}?`"
                class="w-full bg-[#f0f2f5] hover:bg-slate-200/80 px-4 py-2.5 rounded-full text-sm outline-none text-slate-800 placeholder-slate-500 font-medium cursor-pointer transition-colors"
              />
            </div>
            <div class="border-t border-slate-100 pt-3 flex items-center justify-between text-slate-500 text-xs sm:text-sm font-semibold px-2">
              <button class="flex items-center gap-2 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors">
                <span class="material-symbols-outlined text-red-500 text-[20px]">videocam</span>Live video
              </button>
              <button class="flex items-center gap-2 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors">
                <span class="material-symbols-outlined text-green-500 text-[20px]">photo_library</span>Photo/video
              </button>
              <button class="flex items-center gap-2 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors">
                <span class="material-symbols-outlined text-yellow-500 text-[20px]">sentiment_satisfied</span>Feeling/activity
              </button>
            </div>
          </div>

          <!-- Feed Header / Filter Card -->
          <div class="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex justify-between items-center">
            <h2 class="text-xl font-extrabold text-slate-900">Articles</h2>
            <div class="flex items-center gap-2">
              <button class="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded-lg text-sm font-semibold border border-slate-200 transition-colors">
                <span class="material-symbols-outlined text-[18px]">pageview</span>
                Filters
              </button>
              <button class="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded-lg text-sm font-semibold border border-slate-200 transition-colors">
                <span class="material-symbols-outlined text-[18px]">settings</span>
                Manage articles
              </button>
            </div>
          </div>

          <!-- User's Articles Feed list -->
          <div class="space-y-6">
            <div v-for="post in userPosts" :key="post.id" class="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
              <!-- Post Header -->
              <div class="p-4 flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <img :src="user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'" class="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h3 class="font-extrabold text-slate-900 text-sm hover:underline cursor-pointer">{{ user.fullName }}</h3>
                    <p class="text-xs text-slate-400 font-semibold mt-0.5 flex items-center gap-1">
                      {{ post.time }} • <span class="material-symbols-outlined text-[12px] text-slate-400">public</span>
                    </p>
                  </div>
                </div>
                <button class="text-slate-500 hover:bg-slate-50 w-9 h-9 rounded-full flex items-center justify-center transition-colors">
                  <span class="material-symbols-outlined text-[20px]">more_horiz</span>
                </button>
              </div>

              <!-- Post Content -->
              <div class="px-4 pb-3 space-y-3">
                <p class="text-sm text-slate-800 leading-relaxed font-normal">{{ post.content }}</p>
                <!-- Attachment File Block (Optional) -->
                <div v-if="post.hasAttachment" class="flex items-center justify-between border border-slate-100 rounded-xl p-3 bg-slate-50/50 hover:bg-slate-50 cursor-pointer transition-colors">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-red-50 text-red-500 rounded-lg flex items-center justify-center">
                      <span class="material-symbols-outlined text-[24px]">picture_as_pdf</span>
                    </div>
                    <div>
                      <p class="text-sm font-bold text-slate-800 truncate max-w-[200px] sm:max-w-none">{{ post.attachmentName }}</p>
                      <p class="text-xs text-slate-400 font-semibold">{{ post.attachmentSize }}</p>
                    </div>
                  </div>
                  <span class="material-symbols-outlined text-slate-400 text-[20px]">download</span>
                </div>
              </div>

              <!-- Post Stats (Likes and comments count) -->
              <div class="px-4 py-2 text-slate-400 text-xs flex justify-between items-center border-t border-slate-100">
                <span class="flex items-center gap-1 hover:underline cursor-pointer">
                  <span class="w-4 h-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-[10px]"><span class="material-symbols-outlined text-[10px]" style="font-variation-settings: 'FILL' 1;">thumb_up</span></span>
                  {{ post.likes }} likes
                </span>
                <span class="hover:underline cursor-pointer">{{ post.comments.length }} comments</span>
              </div>

              <!-- Action Buttons Row -->
              <div class="border-t border-b border-slate-100 py-1 flex items-center text-slate-500 text-sm font-bold px-2">
                <button
                  @click="toggleLike(post)"
                  class="flex-grow flex items-center justify-center gap-2 hover:bg-slate-50 py-2 rounded-lg transition-colors"
                  :class="post.liked ? 'text-blue-600' : ''"
                >
                  <span class="material-symbols-outlined text-[20px]" :style="post.liked ? 'font-variation-settings: \'FILL\' 1;' : ''">thumb_up</span>
                  Like
                </button>
                <button class="flex-grow flex items-center justify-center gap-2 hover:bg-slate-50 py-2 rounded-lg transition-colors">
                  <span class="material-symbols-outlined text-[20px]">chat_bubble</span>
                  Comment
                </button>
                <button class="flex-grow flex items-center justify-center gap-2 hover:bg-slate-50 py-2 rounded-lg transition-colors">
                  <span class="material-symbols-outlined text-[20px]">share</span>
                  Share
                </button>
              </div>

              <!-- Comments Section (Optional preview) -->
              <div v-if="post.comments.length > 0" class="bg-slate-50/50 p-4 space-y-3">
                <div v-for="comment in post.comments" :key="comment.author" class="flex gap-2">
                  <img :src="comment.avatar" class="w-8 h-8 rounded-full object-cover flex-shrink-0" />
                  <div class="bg-slate-100 rounded-2xl px-3 py-2 text-xs space-y-0.5 max-w-[85%]">
                    <p class="font-bold text-slate-900 cursor-pointer hover:underline">{{ comment.author }}</p>
                    <p class="text-slate-700 leading-normal font-normal">{{ comment.content }}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      <!-- Lightbox Modal for See Profile Picture -->
      <div
        v-if="showAvatarLightbox"
        @click="showAvatarLightbox = false"
        class="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 animate-fade-in cursor-zoom-out"
      >
        <button
          @click.stop="showAvatarLightbox = false"
          class="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer"
        >
          <span class="material-symbols-outlined text-[28px]">close</span>
        </button>
        <img
          :src="getHighResAvatar(user.avatar)"
          alt="Full Profile Picture"
          class="w-full max-w-[95vw] md:max-w-[650px] aspect-square object-cover rounded-lg shadow-2xl select-none animate-scale-in bg-zinc-900 border border-zinc-800"
          @click.stop
        />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { meUserAuthApi } from '@/apis/auth'
import { uploadUserAvatarOrCoverApi, updateUserApi } from '@/apis/users'
import { toast } from 'vue-sonner'
import type { IUser } from '@/interfaces/users'

const user = ref<IUser | null>(null)
const isLoading = ref(true)
const activeTab = ref('Posts')
const showAvatarMenu = ref(false)
const avatarContainerRef = ref<HTMLElement | null>(null)

const fileInputRef = ref<HTMLInputElement | null>(null)
const showAvatarLightbox = ref(false)
const isUploadingAvatar = ref(false)

const showCoverMenu = ref(false)
const coverContainerRef = ref<HTMLElement | null>(null)
const coverFileInputRef = ref<HTMLInputElement | null>(null)
const isUploadingCover = ref(false)

const isEditingBio = ref(false)
const bioInputText = ref('')
const isUpdatingBio = ref(false)

const startEditingBio = () => {
  bioInputText.value = user.value?.bio || ''
  isEditingBio.value = true
}

const handleSaveBio = async () => {
  if (!user.value) return

  isUpdatingBio.value = true
  try {
    const res = await updateUserApi(user.value.id, { bio: bioInputText.value })
    if (res.status === 200 && res.data) {
      user.value = res.data
      isEditingBio.value = false
      toast.success("Bio updated successfully!")
    } else {
      toast.error(res.message || "Failed to update bio")
    }
  } catch (error: any) {
    console.error("Save bio error:", error)
    toast.error(error?.response?.data?.message || "Failed to update bio")
  } finally {
    isUpdatingBio.value = false
  }
}

const toggleCoverMenu = (e: MouseEvent) => {
  e.stopPropagation()
  showCoverMenu.value = !showCoverMenu.value
}

const handleUploadCoverPhoto = () => {
  coverFileInputRef.value?.click()
  showCoverMenu.value = false
}

const handleCoverFileChange = async (e: Event) => {
  const target = e.target as HTMLInputElement
  const file = target.files?.[0]
  if (!file || !user.value) return

  isUploadingCover.value = true
  try {
    const res = await uploadUserAvatarOrCoverApi(user.value.id, 'COVER_PHOTO', file)
    if (res.status === 200 && res.data) {
      user.value = res.data
      toast.success("Cover photo updated successfully!")
    } else {
      toast.error(res.message || "Failed to update cover photo")
    }
  } catch (error: any) {
    console.error("Cover upload error:", error)
    toast.error(error?.response?.data?.message || "Failed to upload cover photo")
  } finally {
    isUploadingCover.value = false
    target.value = ''
  }
}

const handleRemoveCoverPhoto = () => {
  showCoverMenu.value = false
  if (!user.value) return
  user.value.coverPhoto = null
  toast.success("Cover photo removed successfully!")
}

const toggleAvatarMenu = (e: MouseEvent) => {
  e.stopPropagation()
  showAvatarMenu.value = !showAvatarMenu.value
}

const handleSeeProfilePicture = () => {
  showAvatarLightbox.value = true
  showAvatarMenu.value = false
}

const handleChooseProfilePicture = () => {
  fileInputRef.value?.click()
  showAvatarMenu.value = false
}

const handleFileChange = async (e: Event) => {
  const target = e.target as HTMLInputElement
  const file = target.files?.[0]
  if (!file || !user.value) return

  isUploadingAvatar.value = true
  try {
    const res = await uploadUserAvatarOrCoverApi(user.value.id, 'AVATAR', file)
    if (res.status === 200 && res.data) {
      user.value = res.data
      toast.success("Profile picture updated successfully!")
    } else {
      toast.error(res.message || "Failed to update profile picture")
    }
  } catch (error: any) {
    console.error("Upload error:", error)
    toast.error(error?.response?.data?.message || "Failed to upload profile picture")
  } finally {
    isUploadingAvatar.value = false
    target.value = ''
  }
}

const handleClickOutside = (e: MouseEvent) => {
  if (avatarContainerRef.value && !avatarContainerRef.value.contains(e.target as Node)) {
    showAvatarMenu.value = false
  }
  if (coverContainerRef.value && !coverContainerRef.value.contains(e.target as Node)) {
    showCoverMenu.value = false
  }
}

const tabs = ['Posts', 'About', 'Friends', 'Photos', 'Videos', 'More']

const friends = ref([
  { name: 'Sarah Chen', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
  { name: 'David Vance', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
  { name: 'Liam Johnson', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100' },
  { name: 'Emma Wilson', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
  { name: 'Alex Thompson', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100' },
  { name: 'Jessica Miller', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100' }
])

const userPosts = ref([
  {
    id: 1,
    time: '2 days ago',
    content: 'Just finished setting up my workspace for the semester! Excited to collaborate and share academic resources on EduSocial.',
    likes: 8,
    liked: false,
    hasAttachment: false,
    comments: [
      {
        author: 'David Vance',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
        content: 'Awesome! Let\'s setup a study hub group soon.'
      }
    ]
  },
  {
    id: 2,
    time: '5 days ago',
    content: 'For anyone preparing for the midterms, here is the verified study guide folder for polar integration.',
    likes: 15,
    liked: false,
    hasAttachment: true,
    attachmentName: 'Calculus_III_Polar_Integrals_Summary.pdf',
    attachmentSize: '2.1 MB',
    comments: []
  }
])

onMounted(async () => {
  document.addEventListener('click', handleClickOutside)
  try {
    const res = await meUserAuthApi()
    if (res.status === 200 && res.data) {
      user.value = res.data
    }
  } catch (error) {
    console.error("Error fetching user profile:", error)
  } finally {
    isLoading.value = false
  }
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const toggleLike = (post: any) => {
  if (post.liked) {
    post.likes--
    post.liked = false
  } else {
    post.likes++
    post.liked = true
  }
}

const formatDate = (dateStr: string | Date | undefined) => {
  if (!dateStr) return 'N/A'
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  })
}
const getHighResAvatar = (url: string | null) => {
  if (!url) return 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=1000'
  if (url.includes('unsplash.com') && url.includes('w=150')) {
    return url.replace('w=150', 'w=1000')
  }
  return url
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

/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-none {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

@keyframes scaleIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.animate-scale-in {
  animation: scaleIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
