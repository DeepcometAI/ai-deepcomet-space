<template>
  <div class="min-h-screen relative overflow-x-hidden">
    <!-- Navigation -->
    <header class="fixed top-0 left-0 right-0 z-50 glass-panel border-t-0 border-x-0 rounded-none">
      <nav class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-3 group">
            <svg class="w-10 h-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#0080ff"/>
                  <stop offset="100%" style="stop-color:#00f5ff"/>
                </linearGradient>
              </defs>
              <circle cx="70" cy="30" r="8" fill="url(#logoGradient)"/>
              <path d="M 70 30 Q 40 45 20 70" stroke="url(#logoGradient)" stroke-width="3" fill="none" stroke-linecap="round"/>
              <circle cx="50" cy="50" r="35" stroke="url(#logoGradient)" stroke-width="0.5" fill="none" opacity="0.5"/>
            </svg>
            <span class="font-display font-bold text-xl text-gradient">Deepcomet</span>
          </NuxtLink>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center gap-8">
            <NuxtLink to="/" class="nav-link" :class="{ 'text-silver-100': $route.path === '/' }">Home</NuxtLink>
            <NuxtLink to="/about" class="nav-link" :class="{ 'text-silver-100': $route.path === '/about' }">About</NuxtLink>
            <NuxtLink to="/projects" class="nav-link" :class="{ 'text-silver-100': $route.path === '/projects' }">Projects</NuxtLink>
            <NuxtLink to="/roadmap" class="nav-link" :class="{ 'text-silver-100': $route.path === '/roadmap' }">Roadmap</NuxtLink>
            <NuxtLink to="/contact" class="nav-link" :class="{ 'text-silver-100': $route.path === '/contact' }">Contact</NuxtLink>
          </div>

          <!-- CTA Button -->
          <NuxtLink to="/projects" class="hidden md:block btn-primary text-sm">
            Explore Ecosystem
          </NuxtLink>

          <!-- Mobile Menu Button -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 text-silver-300 hover:text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-silver-700/30 pt-4">
          <div class="flex flex-col gap-4">
            <NuxtLink to="/" class="text-silver-300 hover:text-white transition-colors" @click="mobileMenuOpen = false">Home</NuxtLink>
            <NuxtLink to="/about" class="text-silver-300 hover:text-white transition-colors" @click="mobileMenuOpen = false">About</NuxtLink>
            <NuxtLink to="/projects" class="text-silver-300 hover:text-white transition-colors" @click="mobileMenuOpen = false">Projects</NuxtLink>
            <NuxtLink to="/roadmap" class="text-silver-300 hover:text-white transition-colors" @click="mobileMenuOpen = false">Roadmap</NuxtLink>
            <NuxtLink to="/contact" class="text-silver-300 hover:text-white transition-colors" @click="mobileMenuOpen = false">Contact</NuxtLink>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="relative z-10 pt-20">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="relative z-10 mt-20 border-t border-silver-700/30">
      <div class="max-w-7xl mx-auto px-6 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Brand -->
          <div class="md:col-span-2">
            <div class="flex items-center gap-3 mb-4">
              <svg class="w-8 h-8" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#0080ff"/>
                    <stop offset="100%" style="stop-color:#00f5ff"/>
                  </linearGradient>
                </defs>
                <circle cx="70" cy="30" r="8" fill="url(#footerGradient)"/>
                <path d="M 70 30 Q 40 45 20 70" stroke="url(#footerGradient)" stroke-width="3" fill="none" stroke-linecap="round"/>
              </svg>
              <span class="font-display font-bold text-lg text-gradient">Deepcomet AI</span>
            </div>
            <p class="text-silver-400 text-sm max-w-sm">
              Accelerating Civilization's Future through Vertical AI Integration. Building the stack from silicon to consciousness.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="font-display font-semibold text-silver-200 mb-4">Explore</h4>
            <ul class="space-y-2 text-sm">
              <li><NuxtLink to="/about" class="text-silver-400 hover:text-comet-400 transition-colors">About</NuxtLink></li>
              <li><NuxtLink to="/projects" class="text-silver-400 hover:text-comet-400 transition-colors">Projects</NuxtLink></li>
              <li><NuxtLink to="/roadmap" class="text-silver-400 hover:text-comet-400 transition-colors">Roadmap</NuxtLink></li>
              <li><NuxtLink to="/contact" class="text-silver-400 hover:text-comet-400 transition-colors">Contact</NuxtLink></li>
            </ul>
          </div>

          <!-- Connect -->
          <div>
            <h4 class="font-display font-semibold text-silver-200 mb-4">Connect</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="https://github.com/Nehal-aditya" target="_blank" rel="noopener" class="text-silver-400 hover:text-comet-400 transition-colors flex items-center gap-2">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:contact@deepcomet.space" class="text-silver-400 hover:text-comet-400 transition-colors flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-silver-700/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-silver-500 text-sm">© 2026 Deepcomet AI. All rights reserved.</p>
          <div class="flex items-center gap-2 text-xs text-silver-600">
            <span class="w-2 h-2 rounded-full bg-comet-500 animate-pulse"></span>
            Building the vertical AI ecosystem
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)
</script>
