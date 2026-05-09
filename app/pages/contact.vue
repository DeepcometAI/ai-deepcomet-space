<template>
  <div class="pb-20">
    <!-- Enhanced Background -->
    <CometBackground :star-count="50" />
    
    <!-- Header -->
    <section class="py-24 relative overflow-hidden">
      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 class="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gradient mb-6">
          <TextTypewriter text="Get in Touch" />
        </h1>
        <p class="text-xl text-silver-300 max-w-2xl mx-auto">
          Join us in building the future of AI-native computing. 
          Whether you're a developer, researcher, or enthusiast, we'd love to hear from you.
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <ScrollReveal direction="left">
            <AnimatedCard>
            <h2 class="font-display font-bold text-2xl text-silver-100 mb-6">Send a Message</h2>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-silver-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name"
                    class="w-full px-4 py-3 bg-space-900/80 border border-silver-700/50 rounded-lg text-silver-100 placeholder-silver-600 focus:border-comet-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-silver-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email"
                    class="w-full px-4 py-3 bg-space-900/80 border border-silver-700/50 rounded-lg text-silver-100 placeholder-silver-600 focus:border-comet-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-silver-300 mb-2">Subject</label>
                <select 
                  id="subject" 
                  v-model="form.subject"
                  class="w-full px-4 py-3 bg-space-900/80 border border-silver-700/50 rounded-lg text-silver-100 focus:border-comet-500 focus:outline-none transition-colors"
                  required
                >
                  <option value="" disabled>Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="aurelia">Aurelia Language</option>
                  <option value="zenith">Zenith Kernel</option>
                  <option value="skyos">SkyOS</option>
                  <option value="models">DeepComet Models</option>
                  <option value="partnership">Partnership</option>
                  <option value="careers">Careers</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-silver-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  v-model="form.message"
                  rows="5"
                  class="w-full px-4 py-3 bg-space-900/80 border border-silver-700/50 rounded-lg text-silver-100 placeholder-silver-600 focus:border-comet-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project or inquiry..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                class="w-full btn-primary flex items-center justify-center gap-2"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting">Sending...</span>
                <span v-else-if="isSubmitted">Message Sent!</span>
                <span v-else>Send Message</span>
                <svg v-if="!isSubmitting && !isSubmitted" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
                <svg v-else-if="isSubmitted" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </button>
            </form>
            </AnimatedCard>
          </ScrollReveal>

          <!-- Contact Info -->
          <ScrollReveal direction="right" class="space-y-8">
            <!-- Quick Contact Cards -->
            <AnimatedCard>
              <h3 class="font-display font-bold text-xl text-silver-100 mb-6">Connect With Us</h3>
              
              <div class="space-y-4">
                <a href="mailto:contact@deepcomet.space" class="flex items-center gap-4 p-4 rounded-xl bg-space-800/50 hover:bg-space-700/50 transition-colors group">
                  <div class="w-12 h-12 rounded-xl bg-comet-600/20 flex items-center justify-center group-hover:bg-comet-600/30 transition-colors">
                    <svg class="w-6 h-6 text-comet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-silver-200 group-hover:text-white transition-colors">Email</p>
                    <p class="text-sm text-silver-400">contact@deepcomet.space</p>
                  </div>
                </a>

                <a href="https://github.com/Nehal-aditya" target="_blank" rel="noopener" class="flex items-center gap-4 p-4 rounded-xl bg-space-800/50 hover:bg-space-700/50 transition-colors group">
                  <div class="w-12 h-12 rounded-xl bg-glow-purple/20 flex items-center justify-center group-hover:bg-glow-purple/30 transition-colors">
                    <svg class="w-6 h-6 text-glow-purple" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-silver-200 group-hover:text-white transition-colors">GitHub</p>
                    <p class="text-sm text-silver-400">github.com/Nehal-aditya</p>
                  </div>
                </a>
              </div>
            </AnimatedCard>

            <!-- Subdomains -->
            <AnimatedCard>
              <h3 class="font-display font-bold text-xl text-silver-100 mb-6">Explore Our Network</h3>
              
              <div class="space-y-3">
                <a href="https://ai.deepcomet.space" class="flex items-center justify-between p-4 rounded-xl bg-space-800/50 hover:bg-space-700/50 transition-colors group">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-comet-600/20 flex items-center justify-center">
                      <svg class="w-5 h-5 text-comet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div>
                      <p class="font-medium text-silver-200">ai.deepcomet.space</p>
                      <p class="text-xs text-silver-400">AI Platform</p>
                    </div>
                  </div>
                  <svg class="w-5 h-5 text-silver-500 group-hover:text-comet-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>

                <a href="https://science.deepcomet.space" class="flex items-center justify-between p-4 rounded-xl bg-space-800/50 hover:bg-space-700/50 transition-colors group">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-glow-purple/20 flex items-center justify-center">
                      <svg class="w-5 h-5 text-glow-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                      </svg>
                    </div>
                    <div>
                      <p class="font-medium text-silver-200">science.deepcomet.space</p>
                      <p class="text-xs text-silver-400">Research & Papers</p>
                    </div>
                  </div>
                  <svg class="w-5 h-5 text-silver-500 group-hover:text-glow-purple transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>

                <a href="https://openunits.deepcomet.space" class="flex items-center justify-between p-4 rounded-xl bg-space-800/50 hover:bg-space-700/50 transition-colors group">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-glow-amber/20 flex items-center justify-center">
                      <svg class="w-5 h-5 text-glow-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/>
                      </svg>
                    </div>
                    <div>
                      <p class="font-medium text-silver-200">openunits.deepcomet.space</p>
                      <p class="text-xs text-silver-400">Open Standards</p>
                    </div>
                  </div>
                  <svg class="w-5 h-5 text-silver-500 group-hover:text-glow-amber transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </AnimatedCard>

            <!-- Newsletter -->
            <AnimatedCard>
              <h3 class="font-display font-bold text-xl text-silver-100 mb-4">Stay Updated</h3>
              <p class="text-silver-400 mb-4 text-sm">
                Get the latest updates on our roadmap, new releases, and community events.
              </p>
              <div class="flex gap-2">
                <input 
                  type="email" 
                  v-model="newsletterEmail"
                  class="flex-1 px-4 py-3 bg-space-900/80 border border-silver-700/50 rounded-lg text-silver-100 placeholder-silver-600 focus:border-comet-500 focus:outline-none transition-colors text-sm"
                  placeholder="your@email.com"
                />
                <button 
                  @click="subscribeNewsletter"
                  class="px-6 py-3 bg-comet-600 hover:bg-comet-500 text-white font-medium rounded-lg transition-all duration-300"
                  :disabled="isSubscribing"
                >
                  <span v-if="isSubscribing">...</span>
                  <span v-else-if="isSubscribed">✓</span>
                  <span v-else>Subscribe</span>
                </button>
              </div>
            </AnimatedCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Contact | Deepcomet AI'
})

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const newsletterEmail = ref('')
const isSubscribing = ref(false)
const isSubscribed = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1500))
  isSubmitting.value = false
  isSubmitted.value = true
  
  // Reset after 3 seconds
  setTimeout(() => {
    isSubmitted.value = false
    form.value = { name: '', email: '', subject: '', message: '' }
  }, 3000)
}

const subscribeNewsletter = async () => {
  if (!newsletterEmail.value) return
  
  isSubscribing.value = true
  // Simulate subscription
  await new Promise(resolve => setTimeout(resolve, 1000))
  isSubscribing.value = false
  isSubscribed.value = true
  newsletterEmail.value = ''
  
  // Reset after 3 seconds
  setTimeout(() => {
    isSubscribed.value = false
  }, 3000)
}
</script>
