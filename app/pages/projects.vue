<template>
  <div class="pb-20">
    <!-- Enhanced Background -->
    <CometBackground :star-count="80" />
    
    <!-- Header -->
    <section class="py-24 relative overflow-hidden">
      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 class="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gradient mb-6">
          <TextTypewriter text="The Ecosystem" />
        </h1>
        <p class="text-xl text-silver-300 max-w-2xl mx-auto">
          Discover the components powering the next generation of computing. 
          From systems programming to distributed infrastructure.
        </p>
      </div>
    </section>

    <!-- Core Technology -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="left" class="flex items-center gap-3 mb-8">
          <div class="w-2 h-8 bg-comet-500 rounded-full animate-pulse"></div>
          <h2 class="font-display font-bold text-2xl text-silver-100">Core Technology</h2>
        </ScrollReveal>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Aurelia Language -->
          <ScrollReveal direction="up" :delay="1">
            <AnimatedCard>
              <div class="flex items-start justify-between mb-6">
                <div class="w-14 h-14 rounded-xl bg-comet-600/20 flex items-center justify-center">
                  <svg class="w-7 h-7 text-comet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                  </svg>
                </div>
                <span class="px-3 py-1 text-xs font-medium bg-comet-600/20 text-comet-300 rounded-full">Core Tech</span>
              </div>
              <h3 class="font-display font-bold text-xl text-silver-100 mb-2 group-hover:text-comet-400 transition-colors">Aurelia Language</h3>
              <p class="text-silver-400 mb-4">
                Systems programming language with first-class tensor primitives and native automatic differentiation. 
                Compiles directly to MLIR for NPU targeting.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 text-xs bg-space-700 text-silver-300 rounded">Rust-based</span>
                <span class="px-2 py-1 text-xs bg-space-700 text-silver-300 rounded">MLIR</span>
                <span class="px-2 py-1 text-xs bg-space-700 text-silver-300 rounded">Tensors</span>
              </div>
            </AnimatedCard>
          </ScrollReveal>

          <!-- Zenith Kernel -->
          <ScrollReveal direction="up" :delay="2">
            <AnimatedCard>
              <div class="flex items-start justify-between mb-6">
                <div class="w-14 h-14 rounded-xl bg-glow-purple/20 flex items-center justify-center">
                  <svg class="w-7 h-7 text-glow-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                  </svg>
                </div>
                <span class="px-3 py-1 text-xs font-medium bg-glow-purple/20 text-glow-purple rounded-full">OS Layer</span>
              </div>
              <h3 class="font-display font-bold text-xl text-silver-100 mb-2 group-hover:text-glow-purple transition-colors">Zenith Kernel</h3>
              <p class="text-silver-400 mb-4">
                Microkernel architecture with probabilistic scheduling and AI-Watchdog immune system. 
                Mathematically proven safety guarantees.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 text-xs bg-space-700 text-silver-300 rounded">Microkernel</span>
                <span class="px-2 py-1 text-xs bg-space-700 text-silver-300 rounded">Formal Verification</span>
                <span class="px-2 py-1 text-xs bg-space-700 text-silver-300 rounded">AI-Watchdog</span>
              </div>
            </AnimatedCard>
          </ScrollReveal>

          <!-- SkyOS -->
          <ScrollReveal direction="up" :delay="3">
            <AnimatedCard>
              <div class="flex items-start justify-between mb-6">
                <div class="w-14 h-14 rounded-xl bg-glow-cyan/20 flex items-center justify-center">
                  <svg class="w-7 h-7 text-glow-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <span class="px-3 py-1 text-xs font-medium bg-glow-cyan/20 text-glow-cyan rounded-full">Platform</span>
              </div>
              <h3 class="font-display font-bold text-xl text-silver-100 mb-2 group-hover:text-glow-cyan transition-colors">SkyOS</h3>
              <p class="text-silver-400 mb-4">
                Generative Operating System powered by Large Action Models (LAM). 
                Semantic file system and dynamic generative UI framework.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 text-xs bg-space-700 text-silver-300 rounded">LAM</span>
                <span class="px-2 py-1 text-xs bg-space-700 text-silver-300 rounded">Semantic FS</span>
                <span class="px-2 py-1 text-xs bg-space-700 text-silver-300 rounded">Generative UI</span>
              </div>
            </AnimatedCard>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- AI Models -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex items-center gap-3 mb-8">
          <div class="w-2 h-8 bg-glow-amber rounded-full"></div>
          <h2 class="font-display font-bold text-2xl text-silver-100">AI Models</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <!-- DeepComet-Zenith -->
          <div class="glass-panel p-8 rounded-2xl card-hover group">
            <div class="flex items-start justify-between mb-6">
              <div class="w-14 h-14 rounded-xl bg-glow-amber/20 flex items-center justify-center">
                <svg class="w-7 h-7 text-glow-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <span class="px-3 py-1 text-xs font-medium bg-glow-amber/20 text-glow-amber rounded-full">10B Parameters</span>
            </div>
            <h3 class="font-display font-bold text-xl text-silver-100 mb-2 group-hover:text-glow-amber transition-colors">DeepComet-Zenith</h3>
            <p class="text-silver-400 mb-4">
              10 Billion parameter model specifically optimized for kernel-level operations, 
              system health monitoring, and real-time security analysis.
            </p>
            <div class="flex items-center gap-4 text-sm text-silver-500">
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                Optimized for NPU
              </span>
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
                Security Focus
              </span>
            </div>
          </div>

          <!-- DeepComet Model Family -->
          <div class="glass-panel p-8 rounded-2xl card-hover group">
            <div class="flex items-start justify-between mb-6">
              <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-comet-600/20 to-glow-purple/20 flex items-center justify-center">
                <svg class="w-7 h-7 text-comet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
              </div>
              <span class="px-3 py-1 text-xs font-medium bg-comet-600/20 text-comet-300 rounded-full">Model Family</span>
            </div>
            <h3 class="font-display font-bold text-xl text-silver-100 mb-2 group-hover:text-comet-400 transition-colors">DeepComet Model Family</h3>
            <p class="text-silver-400 mb-4">
              A complete suite of models from trillion-parameter Prime for research, 
              to Zenith for kernel ops, Code for synthesis, and Mobile for edge devices.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 text-xs bg-space-700 text-silver-300 rounded">Prime (1T+)</span>
              <span class="px-2 py-1 text-xs bg-space-700 text-silver-300 rounded">Zenith (10B)</span>
              <span class="px-2 py-1 text-xs bg-space-700 text-silver-300 rounded">Code</span>
              <span class="px-2 py-1 text-xs bg-space-700 text-silver-300 rounded">Mobile</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tooling & Infrastructure -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex items-center gap-3 mb-8">
          <div class="w-2 h-8 bg-glow-cyan rounded-full"></div>
          <h2 class="font-display font-bold text-2xl text-silver-100">Tooling & Infrastructure</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <!-- The Forge -->
          <div class="glass-panel p-8 rounded-2xl card-hover group">
            <div class="flex items-start justify-between mb-6">
              <div class="w-14 h-14 rounded-xl bg-glow-cyan/20 flex items-center justify-center">
                <svg class="w-7 h-7 text-glow-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/>
                </svg>
              </div>
              <span class="px-3 py-1 text-xs font-medium bg-glow-cyan/20 text-glow-cyan rounded-full">Tooling</span>
            </div>
            <h3 class="font-display font-bold text-xl text-silver-100 mb-2 group-hover:text-glow-cyan transition-colors">The Forge (DeepComet-Code)</h3>
            <p class="text-silver-400 mb-4">
              Specialized AI model for automatic migration of legacy C++ and Java codebases into Aurelia. 
              Preserves semantics while optimizing for NPU execution.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 text-xs bg-space-700 text-silver-300 rounded">C++ Migration</span>
              <span class="px-2 py-1 text-xs bg-space-700 text-silver-300 rounded">Java Migration</span>
              <span class="px-2 py-1 text-xs bg-space-700 text-silver-300 rounded">Semantic Preservation</span>
            </div>
          </div>

          <!-- SkyCloud -->
          <div class="glass-panel p-8 rounded-2xl card-hover group">
            <div class="flex items-start justify-between mb-6">
              <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-glow-purple/20 to-comet-600/20 flex items-center justify-center">
                <svg class="w-7 h-7 text-glow-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                </svg>
              </div>
              <span class="px-3 py-1 text-xs font-medium bg-glow-purple/20 text-glow-purple rounded-full">Infrastructure</span>
            </div>
            <h3 class="font-display font-bold text-xl text-silver-100 mb-2 group-hover:text-glow-purple transition-colors">SkyCloud Infrastructure</h3>
            <p class="text-silver-400 mb-4">
              A decentralized cloud network sharing idle NPU power. Peer-to-peer protocol 
              with secure execution enclaves for distributed AI workloads.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 text-xs bg-space-700 text-silver-300 rounded">P2P Network</span>
              <span class="px-2 py-1 text-xs bg-space-700 text-silver-300 rounded">Secure Enclaves</span>
              <span class="px-2 py-1 text-xs bg-space-700 text-silver-300 rounded">Tokenomics</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-6">
        <div class="glass-panel p-12 rounded-3xl text-center glow-effect">
          <h2 class="font-display font-bold text-3xl text-gradient mb-4">Explore the Documentation</h2>
          <p class="text-silver-400 mb-8">
            Dive deeper into each component of the Deepcomet AI ecosystem.
          </p>
          <a href="https://github.com/Nehal-aditya" target="_blank" rel="noopener" class="btn-primary">
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Projects | Deepcomet AI'
})
</script>
