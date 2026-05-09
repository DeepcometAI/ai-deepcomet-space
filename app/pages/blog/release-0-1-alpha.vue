<template>
  <div class="pb-20">
    <!-- Enhanced Background -->
    <CometBackground :star-count="50" />
    
    <!-- Header -->
    <section class="py-24 relative overflow-hidden">
      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-silver-400 hover:text-comet-400 mb-6 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
          Back to Blog
        </NuxtLink>
        <h1 class="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gradient mb-6">
          <TextTypewriter text="Aurelia v0.1.0-alpha Release Notes" />
        </h1>
        <div class="flex items-center justify-center gap-4 text-sm text-silver-400">
          <span class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"/>
            </svg>
            Mon Apr 06 2026
          </span>
          <span class="flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            Nehal-aditya
          </span>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-6">
        <ScrollReveal direction="up">
          <AnimatedCard>
            <div class="prose prose-invert max-w-none">
              <h2 class="font-display font-semibold text-2xl text-silver-100 mb-4">Aurelia v0.1.0-alpha: Specification-First</h2>
              <p class="text-silver-400 mb-6">
                We are thrilled to announce the first alpha release of the Aurelia compiler. 
                This marks the beginning of Phase 1 in the DeepcometAI master roadmap.
              </p>

              <h3 class="font-display font-semibold text-xl text-silver-100 mb-3">Dual-Language Strategy</h3>
              <p class="text-silver-400 mb-6">
                Our architecture leverages a dual-language approach:
              </p>
              <ul class="list-disc list-inside text-silver-400 space-y-2 mb-6">
                <li><span class="text-silver-200">C++23:</span> Powers the performance-critical compiler backend and MLIR/LLVM integration</li>
                <li><span class="text-silver-200">Go 1.22+:</span> Drives the developer-facing tooling, including the CLI, package manager, and Language Server Protocol (LSP)</li>
              </ul>

              <h3 class="font-display font-semibold text-xl text-silver-100 mb-3">MLIR Lowering Process</h3>
              <p class="text-silver-400">
                The source code is now successfully parsed into an AST and lowered into the 
                Aurelia High-Level Dialect (AHL), enabling shape inference and symbolic verification.
              </p>
            </div>
          </AnimatedCard>
        </ScrollReveal>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Aurelia v0.1.0-alpha Release Notes | Deepcomet AI'
})
</script>
